import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

interface Module {
  title: string;
  url: string;
  category: string;
}

export default function ModuleList() {
  const [modules, setModules] = useState<Module[]>([]);
  const [filteredModules, setFilteredModules] = useState<Module[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetch('/data/modules.json')
      .then((response) => response.json())
      .then((data) => {
        setModules(data);
        setFilteredModules(data);
      });
  }, []);

  useEffect(() => {
    let filtered = modules;

    if (category !== 'all') {
      filtered = filtered.filter((module) => module.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((module) =>
        module.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredModules(filtered);
  }, [searchTerm, category, modules]);

  return (
    <div className={styles.moduleListContainer}>
        <div className={styles.filters}>
            <input
            type="text"
            placeholder="Search modules..."
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="under-development">Under Development</option>
                <option value="available">Available</option>
                <option value="archive">Archive</option>
            </select>
        </div>
        <div className={styles.moduleList}>
        {filteredModules.map((module, index) => (
            <div key={index} className={styles.moduleCard}>
            <span className={styles.moduleCategory}>{module.category}</span>
            <h3>{module.title}</h3>
            <a href={module.url} target="_blank" rel="noopener noreferrer">
                <Translate id="components.moduleList.goToModule">Go to Module</Translate>
            </a>
            </div>
        ))}
        </div>
    </div>
  );
}