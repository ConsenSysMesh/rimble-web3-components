import React from 'react';
import { storiesOf } from '@storybook/react';
import NetworkIndicator from '@rimble/network-indicator';
import { Text, Box } from 'rimble-ui';

storiesOf('NetworkIndicator', module)
  .add('current network', () => (
    <div>
      <Box my={3}>
        <Text>network id: 1</Text>
        <NetworkIndicator currentNetwork={1} />
      </Box>

      <Box my={3}>
        <Text>network id: 3</Text>
        <NetworkIndicator currentNetwork={3} />
      </Box>

      <Box my={3}>
        <Text>network id: 4</Text>
        <NetworkIndicator currentNetwork={4} />
      </Box>

      <Box my={3}>
        <Text>network id: 42</Text>
        <NetworkIndicator currentNetwork={42} />
      </Box>

      <Box my={3}>
        <Text>network id: 7645</Text>
        <NetworkIndicator currentNetwork={7645} />
      </Box>

      <Box my={3}>
        <Text>
          network id: none <Text.span italic>mouseover for tooltip</Text.span>
        </Text>

        <NetworkIndicator currentNetwork={null} />
      </Box>

      <Box my={3}>
        <Text>Custom tooltip when on a network</Text>

        <NetworkIndicator currentNetwork={1}>
          {{
            onNetworkMessage: 'You are connected',
          }}
        </NetworkIndicator>
      </Box>

      <Box my={3}>
        <Text>Custom tooltip when not on a network</Text>

        <NetworkIndicator currentNetwork={null}>
          {{
            noNetworkMessage: 'Not connected to anything',
          }}
        </NetworkIndicator>
      </Box>
    </div>
  ))
  .add('required network', () => (
    <div>
      <Box my={3}>
        <Text>On required network</Text>
        <NetworkIndicator currentNetwork={1} requiredNetwork={1} />
      </Box>

      <Box my={3}>
        <Text>
          On wrong network <Text.span italic>mouseover for tooltip</Text.span>
        </Text>
        <NetworkIndicator currentNetwork={3} requiredNetwork={1} />
      </Box>
      <Box my={3}>
        <Text>
          No current network <Text.span italic>mouseover for tooltip</Text.span>
        </Text>

        <NetworkIndicator currentNetwork={null} requiredNetwork={1} />
      </Box>

      <Box my={3}>
        <Text>Custom message - On required network</Text>
        <NetworkIndicator currentNetwork={1} requiredNetwork={1}>
          {{
            onNetworkMessage: 'Connected to correct network',
          }}
        </NetworkIndicator>
      </Box>

      <Box my={3}>
        <Text>
          Custom message - On wrong network{' '}
          <Text.span italic>mouseover for tooltip</Text.span>
        </Text>
        <NetworkIndicator currentNetwork={3} requiredNetwork={1}>
          {{
            onWrongNetworkMessage: 'Wrong network',
          }}
        </NetworkIndicator>
      </Box>
      <Box my={3}>
        <Text>
          Custom message - No current network{' '}
          <Text.span italic>mouseover for tooltip</Text.span>
        </Text>

        <NetworkIndicator currentNetwork={null} requiredNetwork={1}>
          {{
            noNetworkMessage: 'Not connected to anything',
          }}
        </NetworkIndicator>
      </Box>
    </div>
  ));
