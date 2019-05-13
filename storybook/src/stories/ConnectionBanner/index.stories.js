import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import ConnectionBanner from '@rimble/connection-banner';
import { Text } from 'rimble-ui';

storiesOf('ConnectionBanner', module)
  .addDecorator(withKnobs) // enable knobs
  .add('wrong network - default', () => {
    const props = object('props', {
      currentNetwork: 3,
      requiredNetwork: 5,
      onWeb3Fallback: false,
    });

    return (
      <ConnectionBanner
        currentNetwork={props.currentNetwork}
        requiredNetwork={props.requiredNetwork}
        onWeb3Fallback={props.onWeb3Fallback}
      />
    );
  })
  .add('wrong network - custom message', () => {
    const props = object('props', {
      currentNetwork: 3,
      requiredNetwork: 5,
      onWeb3Fallback: false,
    });

    return (
      <ConnectionBanner
        currentNetwork={props.currentNetwork}
        requiredNetwork={props.requiredNetwork}
        onWeb3Fallback={props.onWeb3Fallback}
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
    );
  })
  .add('no network - default', () => {
    const props = object('props', {
      currentNetwork: null,
      requiredNetwork: 4,
      onWeb3Fallback: false,
    });

    return (
      <ConnectionBanner
        currentNetwork={props.currentNetwork}
        requiredNetwork={props.requiredNetwork}
        onWeb3Fallback={props.onWeb3Fallback}
      />
    );
  })
  .add('no network - custom message', () => {
    const props = object('props', {
      currentNetwork: null,
      requiredNetwork: 4,
      onWeb3Fallback: false,
    });

    return (
      <ConnectionBanner
        currentNetwork={props.currentNetwork}
        requiredNetwork={props.requiredNetwork}
        onWeb3Fallback={props.onWeb3Fallback}
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
    );
  })

  .add('not web3 capable - default', () => {
    const props = object('props', {
      currentNetwork: 4,
      requiredNetwork: 4,
      onWeb3Fallback: false,
    });

    return (
      <div>
        <Text>Preview in Safari or Edge browser</Text>
        <ConnectionBanner
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
          onWeb3Fallback={props.onWeb3Fallback}
        />
      </div>
    );
  })
  .add('not web3 capable - custom message', () => {
    const props = object('props', {
      currentNetwork: 4,
      requiredNetwork: 4,
      onWeb3Fallback: false,
    });

    return (
      <div>
        <Text>Preview in Safari or Edge browser</Text>
        <ConnectionBanner
          currentNetwork={props.currentNetwork}
          requiredNetwork={props.requiredNetwork}
          onWeb3Fallback={props.onWeb3Fallback}
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
    );
  });
