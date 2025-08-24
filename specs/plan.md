# Development Plan

This document outlines the plan to develop the static web portal based on the requirements in `specs/initial-requirements.md`.

## 1. Project Setup & Configuration

- **Internationalization (i18n):**
    - Configure Docusaurus to support Indonesian (`id`) and English (`en`) languages.
    - Set `en` as the default language.
    - Create `i18n/id` directory for Indonesian translations.

- **Docusaurus Configuration (`docusaurus.config.ts`):**
    - Update site metadata: `title`, `tagline`, `url`, `baseUrl`.
    - Configure the navbar and footer.
    - Add a language dropdown to the navbar.

## 2. Feature Implementation

### Landing Page (`src/pages/index.tsx`)

- **Layout:**
    - Create a new layout for the landing page that includes an overview, a module section, and a contributors section.
- **Module List Component (`src/components/ModuleList/index.tsx`):**
    - Create a data file (e.g., `data/modules.json`) to store module information (title, description, URL, category).
    - The component will read the module data and display it.
    - Implement filtering by category ("under development", "available", "archive").
    - Implement a search input to filter modules by title or description.
- **Contributors Section:**
    - Create a simple component to display the list of contributors with links to their individual pages.

### Module Page (`src/pages/modules.tsx`)

- Create a dedicated page to browse all modules.
- Reuse the `ModuleList` component with full filtering and search capabilities.

### Contributors Page (`docs/contributors/`)

- Create a main contributors page (`docs/contributors/intro.md`) that lists all contributors.
- Create individual markdown files for each contributor inside `docs/contributors/` (e.g., `dian-hanifudin-subhi.md`, `putra-prima-arhandi.md`).
- Link to their GitHub profiles.

## 3. Content Creation

- **Module Data (`data/modules.json`):**
    - Populate the file with the modules specified in the requirements.
- **Contributor Content:**
    - Write brief profiles for each contributor in their respective markdown files.
- **Translation:**
    - Translate the landing page, module page, and other UI elements into Indonesian.

## 4. Cleanup and Refinement

- **Remove Unused Files:**
    - Delete the default blog feature files (`/blog`).
    - Remove example pages and components from the initial Docusaurus installation (`docs/tutorial-basics`, `docs/tutorial-extras`, `src/pages/markdown-page.md`).
- **Styling:**
    - Review and simplify the CSS (`src/css/custom.css`).
    - Ensure the design is clean and simple.

## 5. Deployment

- **GitHub Actions:**
    - Create a new workflow file (`.github/workflows/deploy.yml`).
    - The workflow will trigger on pushes to the `main` branch.
    - It will build the Docusaurus project and deploy the output to the `gh-pages` branch.
