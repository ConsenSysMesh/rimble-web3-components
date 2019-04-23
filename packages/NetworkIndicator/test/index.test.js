import React from 'react';
import ReactDOM from 'react-dom';
import NetworkIndicator from '../src/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkIndicator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
