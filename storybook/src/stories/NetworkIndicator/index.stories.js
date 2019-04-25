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
    </div>
  ));
