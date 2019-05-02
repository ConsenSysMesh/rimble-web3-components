![Rimble Network Indicator - current network](./_assets/network-indicator-current-network.png)

![Rimble Network Indicator - wrong network](./_assets/network-indicator-wrong-network.png)

![Rimble Network Indicator - no network](./_assets/network-indicator-no-network.png)

# @rimble/network-indicator

React component built with [Rimble UI](https://github.com/ConsenSys/rimble-ui) that will display the current Ethereum network name based on a given network ID and optionally display and icon and tooltip indicating whether the user is on the correct network for the application.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @rimble/network-indicator

// with yarn
yarn add @rimble/network-indicator
```

## Usage Example

```jsx
import NetworkIndicator from '@rimble/network-indicator';

// Default
<NetworkIndicator currentNetwork={3} />;

// Has requiredNetwork prop
<NetworkIndicator currentNetwork={3} requiredNetwork={1} />;

// Custom tooltips for default
<NetworkIndicator currentNetwork={1}>
  {{
    onNetworkMessage: 'Connected to correct network',
    noNetworkMessage: 'Not connected to anything'
  }}
</NetworkIndicator>

// Custom tooltips with requiredNetwork prop
<NetworkIndicator currentNetwork={null} requiredNetwork={1}>
  {{
    onNetworkMessage: 'Connected to correct network',
    noNetworkMessage: 'Not connected to anything',
    onWrongNetworkMessage: 'Wrong network',
  }}
</NetworkIndicator>
```

## Props

| Name                    | Type    | Default              | Description                                                                                                                          |
| ----------------------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `currentNetwork`        | integer | none                 | The network ID that the user is connected to, if available                                                                           |
| `requiredNetwork`       | integer | none                 | The network ID that the dApp requires to function                                                                                    |
| `onNetworkMessage`      | string  | none                 | Content of a hover tooltip when there is a `currentNetwork` prop and when `requiredNetwork` exists and matches `currentNetwork` prop |
| `noNetworkMessage`      | string  | see default messages | Content of a hover tooltip when there is a null value for `currentNetwork` prop even when there is a `requiredNetwork` prop          |
| `onWrongNetworkMessage` | string  | see default messages | Content of a hover tooltip when values do not match for `currentNetwork` and `requiredNetwork` props                                 |

## Default Messages

### onNetworkMessage

Only when `requiredNetwork` exists and matches `currentNetwork` prop

> You're on the right network

### noNetworkMessage

> You're not on an Ethereum network

### onWrongNetworkMessage

> You're on the wrong network

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
