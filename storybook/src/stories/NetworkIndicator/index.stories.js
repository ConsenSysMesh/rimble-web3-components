import React from 'react';
import { storiesOf } from '@storybook/react';
import NetworkIndicator from '@rimble/network-indicator';
import { withKnobs, object } from '@storybook/addon-knobs';

storiesOf('NetworkIndicator/CurrentNetwork', module)
  .addDecorator(withKnobs) // enable knobs
  .add('connected', () => {
    const props = object('props', { currentNetwork: 1 });

    return (
      <div>
        <NetworkIndicator currentNetwork={props.currentNetwork} />
      </div>
    );
  })
  .add('not connected', () => {
    const props = object('props', { currentNetwork: null });

    return (
      <div>
        <NetworkIndicator currentNetwork={props.currentNetwork} />
      </div>
    );
  })
  .add('connected - custom message', () => {
    const props = object('props', { currentNetwork: 1 });

    return (
      <div>
        <NetworkIndicator currentNetwork={props.currentNetwork}>
          {{
            onNetworkMessage: 'You are connected',
          }}
        </NetworkIndicator>
      </div>
    );
  })
  .add('not connected - custom message', () => {
    const props = object('props', { currentNetwork: null });

    return (
      <div>
        <NetworkIndicator currentNetwork={props.currentNetwork}>
          {{
            noNetworkMessage: 'Not connected to anything',
          }}
        </NetworkIndicator>
      </div>
    );
  });
storiesOf('NetworkIndicator/RequiredNetwork', module)
  .add('matching networks', () => {
    const props = object('props', { currentNetwork: 1, requiredNetwork: 1 });

    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        />
      </div>
    );
  })
  .add('on wrong network', () => {
    const props = object('props', { currentNetwork: 4, requiredNetwork: 1 });

    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        />
      </div>
    );
  })
  .add('no current network', () => {
    const props = object('props', { currentNetwork: null, requiredNetwork: 1 });

    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        />
      </div>
    );
  })

  .add('matching networks - custom message', () => {
    const props = object('props', { currentNetwork: 1, requiredNetwork: 1 });

    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        >
          {{
            onNetworkMessage: 'Connected to correct network',
          }}
        </NetworkIndicator>
      </div>
    );
  })
  .add('on wrong network - custom message', () => {
    const props = object('props', { currentNetwork: 4, requiredNetwork: 1 });
    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        >
          {{
            onWrongNetworkMessage: 'Wrong network',
          }}
        </NetworkIndicator>
      </div>
    );
  })
  .add('no current network - custom message', () => {
    const props = object('props', { currentNetwork: null, requiredNetwork: 1 });

    return (
      <div>
        <NetworkIndicator
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
        >
          {{
            noNetworkMessage: 'Not connected to anything',
          }}
        </NetworkIndicator>
      </div>
    );
  });
