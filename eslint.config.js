module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'prettier/prettier': 'error',
    'max-len': ['error', 80],
    'import/imports-first': ['warn', 'DISABLE-absolute-first'],
  },
  env: {
    browser: true,
  },
};
