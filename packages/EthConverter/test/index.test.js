import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import EthConverter from '../src';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EthConverter value={1} currency={'usd'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
