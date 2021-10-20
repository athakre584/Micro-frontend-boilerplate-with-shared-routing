module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 2,
    indent: ['error', 2, {SwitchCase: 1, ignoredNodes: ['TemplateLiteral']}],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    'no-console': ['error', {allow: ['warn', 'error']}],
    quotes: ['error', 'single'],
  },
};
