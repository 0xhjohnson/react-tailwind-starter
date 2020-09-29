module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js'
      }
    }
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:cypress/recommended'
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'global-require': 0,
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'import/no-extraneous-dependencies': 0
  },
  plugins: ['react-hooks', 'jsx-a11y']
};
