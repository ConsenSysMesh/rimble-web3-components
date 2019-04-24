import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ConnectionBanner from '@rimble/connection-banner';

storiesOf('ConnectionBanner', module)
  .add('default', () => (
    <ConnectionBanner
      currentNetwork={3}
      requiredNetwork={4}
      onWeb3Fallback={false}
    />
  ))
  .add('custom message', () => (
    <ConnectionBanner
      currentNetwork={3}
      requiredNetwork={4}
      onWeb3Fallback={false}
    >
      {{
        notWeb3CapableBrowserMessage: (
          <div>
            <p>Not a web3 capable browser</p>
          </div>
        ),
        noNetworkAvailableMessage: (
          <div>
            <p>No Ethereum network available</p>
          </div>
        ),
        onWrongNetworkMessage: (
          <div>
            <p>On wrong Ethereum network</p>
          </div>
        ),
      }}
    </ConnectionBanner>
  ));
