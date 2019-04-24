import React from 'react';
import { storiesOf } from '@storybook/react';
import ConnectionBanner from '@rimble/connection-banner';

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
    </div>
  ));
