![Rimble Network Indicator - current network](./_assets/network-indicator-current-network.png)
![Rimble Network Indicator - wrong network](./_assets/network-indicator-wrong-network.png)

# @rimble/network-indicator

Web3 React component built with Rimble UI that will display the current ethereum network name based on a given network ID.

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

> We can't detect a network. Install MetaMask or switch to a mobile dApp browser like Cipher or Status.

### onWrongNetworkMessage

> Switch to the `requiredNetworkName` Network

## Documentation

[Documentation](https://consensys.github.io/rimble-ui/)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
