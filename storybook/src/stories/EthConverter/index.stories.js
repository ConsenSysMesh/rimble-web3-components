import React from 'react';
import { storiesOf } from '@storybook/react';
import EthConverter from '@rimble/eth-converter';
import { withKnobs, object } from '@storybook/addon-knobs';

storiesOf('EthConverter', module)
  .addDecorator(withKnobs) // enable knobs
  .add('usd', () => {
    const props = object('props', { value: 1, currency: 'usd' });

    return (
      <div>
        <EthConverter value={props.value} currency={props.currency} />
      </div>
    );
  });
