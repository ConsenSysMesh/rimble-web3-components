import React from 'react';
import { storiesOf } from '@storybook/react';
import NetworkIndicator from '@rimble/network-indicator';
import { Text, Box } from 'rimble-ui';

storiesOf('NetworkIndicator/CurrentNetwork', module)
  .add('connected', () => (
    <div>
      <NetworkIndicator currentNetwork={1} />
    </div>
  ))
  .add('not connected', () => (
    <div>
      <NetworkIndicator currentNetwork={null} />
    </div>
  ))
  .add('connected - custom message', () => (
    <div>
      <NetworkIndicator currentNetwork={1}>
        {{
          onNetworkMessage: 'You are connected',
        }}
      </NetworkIndicator>
    </div>
  ))
  .add('not connected - custom message', () => (
    <div>
      <NetworkIndicator currentNetwork={null}>
        {{
          noNetworkMessage: 'Not connected to anything',
        }}
      </NetworkIndicator>
    </div>
  ));
storiesOf('NetworkIndicator/RequiredNetwork', module)
  .add('matching networks', () => (
    <div>
      <NetworkIndicator currentNetwork={1} requiredNetwork={1} />
    </div>
  ))
  .add('on wrong network', () => (
    <div>
      <NetworkIndicator currentNetwork={3} requiredNetwork={1} />
    </div>
  ))
  .add('no current network', () => (
    <div>
      <NetworkIndicator currentNetwork={null} requiredNetwork={1} />
    </div>
  ))

  .add('matching networks - custom message', () => (
    <div>
      <NetworkIndicator currentNetwork={1} requiredNetwork={1}>
        {{
          onNetworkMessage: 'Connected to correct network',
        }}
      </NetworkIndicator>
    </div>
  ))
  .add('on wrong network - custom message', () => (
    <div>
      <NetworkIndicator currentNetwork={3} requiredNetwork={1}>
        {{
          onWrongNetworkMessage: 'Wrong network',
        }}
      </NetworkIndicator>
    </div>
  ))
  .add('no current network - custom message', () => (
    <div>
      <NetworkIndicator currentNetwork={null} requiredNetwork={1}>
        {{
          noNetworkMessage: 'Not connected to anything',
        }}
      </NetworkIndicator>
    </div>
  ));
