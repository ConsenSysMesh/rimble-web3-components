import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

addParameters({
  viewport: {
    defaultViewport: 'responsive',
  },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
  },
});

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
