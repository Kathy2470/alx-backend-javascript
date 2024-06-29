import standard from 'eslint-config-standard';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**'],
  },
  standard,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // Add custom rules here if needed
    },
  },
];
