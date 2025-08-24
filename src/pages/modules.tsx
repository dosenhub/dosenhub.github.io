import React from 'react';
import Layout from '@theme/Layout';
import ModuleList from '../components/ModuleList';
import Translate from '@docusaurus/Translate';

export default function Modules() {
  return (
    <Layout title="Modules">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '2rem 0',
        }}>
        <h1><Translate id="pages.modules.allModules">All Modules</Translate></h1>
        <ModuleList />
      </div>
    </Layout>
  );
}
