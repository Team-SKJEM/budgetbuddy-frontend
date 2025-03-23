# BudgetBuddy Frontend w/ React + TypeScript + Vite

## Project Folder Structure

```
/budgetbuddy-frontend
│── public/                  # Static assets (index.html, favicon, etc.)
│── src/                     # Main source code
│   ├── assets/              # Images, fonts, styles
│   │   ├── images/
│   │   ├── styles/
│   │   └── fonts/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css  # Component-specific styles
│   │   │   ├── Button.test.tsx    # Unit test for Button
│   │   │   └── index.ts           # Barrel export
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── index.ts               # Barrel export for all components
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   ├── useDebounce.ts
│   │   ├── useAuth.test.ts  # Test for custom hook
│   │   └── index.ts
│   ├── pages/               # Page-level components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.test.tsx    # Test for a page
│   │   ├── index.ts
│   │   └── NotFound.tsx
│   ├── context/             # Context API providers
│   │   ├── AuthContext.tsx
│   │   ├── AuthContext.test.tsx
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   ├── services/            # API calls / business logic
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   └── api.test.ts
│   ├── store/               # State management (Redux/Zustand)
│   │   ├── authStore.ts
│   │   ├── userStore.ts
│   │   └── index.ts
│   ├── utils/               # Helper functions
│   │   ├── formatDate.ts
│   │   ├── validateEmail.ts
│   │   ├── index.ts
│   │   └── utils.test.ts
│   ├── __tests__/           # Integration & end-to-end tests
│   │   ├── App.test.tsx
│   │   ├── routes.test.tsx
│   │   ├── setupTests.ts     # Global test setup
│   │   └── mocks/
│   ├── App.tsx              # Main app entry point
│   ├── main.tsx             # ReactDOM.render()
│   ├── routes.tsx           # Centralized routing
│   ├── index.css            # Global styles
│   ├── vite.config.ts        # Vite config (if using Vite)
│   ├── tsconfig.json         # TypeScript config
│── package.json
│── .eslintrc.js             # ESLint config
│── .prettierrc              # Prettier config
│── .husky/                  # Husky Git hooks
│── jest.config.js           # Jest configuration
│── README.md
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
