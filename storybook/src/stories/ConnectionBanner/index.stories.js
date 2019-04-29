import React from 'react';
import { storiesOf } from '@storybook/react';
import ConnectionBanner from '@rimble/connection-banner';
import { Text } from 'rimble-ui';

storiesOf('ConnectionBanner', module)
  .add('wrong network - default', () => (
    <ConnectionBanner
      currentNetwork={3}
      requiredNetwork={4}
      onWeb3Fallback={false}
    />
  ))
  .add('wrong network - custom message', () => (
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
  ))
  .add('no network - default', () => (
    <ConnectionBanner
      currentNetwork={null}
      requiredNetwork={4}
      onWeb3Fallback={false}
    />
  ))
  .add('no network - custom message', () => (
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
  ))

  .add('not web3 capable - default', () => (
    <div>
      <Text>Preview in Safari or Edge browser</Text>
      <ConnectionBanner
        currentNetwork={4}
        requiredNetwork={4}
        onWeb3Fallback={false}
      />
    </div>
  ))
  .add('not web3 capable - custom message', () => (
    <div>
      <Text>Preview in Safari or Edge browser</Text>
      <ConnectionBanner
        currentNetwork={4}
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
