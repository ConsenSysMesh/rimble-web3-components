import React from 'react';
import { storiesOf } from '@storybook/react';
import ConnectionBanner from '@rimble/connection-banner';
import { Text } from 'rimble-ui';

storiesOf('ConnectionBanner', module)
  .add('wrong network - default', () => (
    <div>
      <ConnectionBanner
        currentNetwork={3}
        requiredNetwork={4}
        onWeb3Fallback={false}
      />
    </div>
  ))
  .add('wrong network - custom message', () => (
    <div>
      <ConnectionBanner
        currentNetwork={3}
        requiredNetwork={4}
        onWeb3Fallback={false}
      >
        {{
          notWeb3CapableBrowserMessage: (
            <div>
              <Text>Not a web3 capable browser</Text>
            </div>
          ),
          noNetworkAvailableMessage: (
            <div>
              <Text>No Ethereum network available</Text>
            </div>
          ),
          onWrongNetworkMessage: (
            <div>
              <Text>On wrong Ethereum network</Text>
            </div>
          ),
        }}
      </ConnectionBanner>
    </div>
  ))
  .add('no network - default', () => (
    <div>
      <ConnectionBanner
        currentNetwork={null}
        requiredNetwork={4}
        onWeb3Fallback={false}
      />
    </div>
  ))
  .add('no network - custom message', () => (
    <div>
      <ConnectionBanner
        currentNetwork={null}
        requiredNetwork={4}
        onWeb3Fallback={false}
      >
        {{
          notWeb3CapableBrowserMessage: (
            <div>
              <Text>Not a web3 capable browser</Text>
            </div>
          ),
          noNetworkAvailableMessage: (
            <div>
              <Text>No Ethereum network available</Text>
            </div>
          ),
          onWrongNetworkMessage: (
            <div>
              <Text>On wrong Ethereum network</Text>
            </div>
          ),
        }}
      </ConnectionBanner>
    </div>
  ));
