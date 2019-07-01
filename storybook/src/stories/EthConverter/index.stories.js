import React from 'react';
import { storiesOf } from '@storybook/react';
import EthConverter from '@rimble/eth-converter';
import { withKnobs, object } from '@storybook/addon-knobs';

storiesOf('EthConverter', module)
  .addDecorator(withKnobs) // enable knobs
  .add('usd', () => {
    const props = object('props', { ethValue: 1, convertTo: 'usd' });

    return (
      <div>
        <EthConverter ethValue={props.ethValue} convertTo={props.convertTo} />
      </div>
    );
  });
