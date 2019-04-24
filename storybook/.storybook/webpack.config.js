const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // resolve styled-components to a single version for storybooks, as recommended by the docs
  // https://www.styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page
  config.resolve.alias['styled-components'] = path.resolve(
    'node_modules',
    'styled-components',
  );

  return config;
};
