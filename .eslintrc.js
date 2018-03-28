module.exports = {
  env: {
    browser : true,
    amd     : true,
    jquery  : true,
    node    : true,
    es6     : true
  },
  parser: "babel-eslint",
  extends: [
    'airbnb'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    },
  },
  overrides: {
    "files": ["src/**/*.jsx"],
    "rules": {
      'jsx-a11y/anchor-is-valid': ['error', {
        components: [],
        specialLink: [],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      }],
      'import/no-unresolved': ['error', { commonjs: true, caseSensitive: false }],
    }
  }
};
