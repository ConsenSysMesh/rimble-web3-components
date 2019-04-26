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

<NetworkIndicator currentNetwork={3} requiredNetwork={1} />;
```

## Props

| Name              | Type    | Default | Description                                                |
| ----------------- | ------- | ------- | ---------------------------------------------------------- |
| `currentNetwork`  | integer | none    | The network ID that the user is connected to, if available |
| `requiredNetwork` | integer | none    | The network ID that the dApp requires to function          |

## Documentation

[Documentation](https://consensys.github.io/rimble-ui/)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
