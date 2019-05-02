import { configure, addDecorator, addParameters } from '@storybook/react';

addParameters({
  viewport: {
    defaultViewport: 'responsive',
  },
});

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
