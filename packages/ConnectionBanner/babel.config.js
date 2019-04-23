const baseConfig = require('../../babel.config');

module.exports = {
  ...baseConfig,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'umd',
      },
    ],
    '@babel/preset-react',
  ],
};
