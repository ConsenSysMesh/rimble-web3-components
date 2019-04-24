![Rimble Connection Banner - wrong network](./_assets/connection-banner-wrong-network.png)
![Rimble Connection Banner - incompatible browser](./_assets/connection-banner-incompatible-browser.png)
![Rimble Connection Banner - no wallet](./_assets/connection-banner-no-wallet.png)

# @rimble/connection-banner

Web3 React component built with Rimble UI that will display an informative banner when the user is not in a web3 capable browser, or when the current browser does not have a wallet available, or when the current ethereum network does not match the required network.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @rimble/connection-banner

// with yarn
yarn add @rimble/connection-banner
```


## Usage Example
```jsx
import ConnectionBanner from "@rimble/connection-banner";

<ConnectionBanner currentNetwork={3} requiredNetwork={1} onWeb3Fallback={true} />
```

## Props
| Name    | Type   | Default | Description                                  |
| ------- | ------ | ------- | -------------------------------------------- |
| `currentNetwork`   | integer | none  | The network ID that the user is connected to, if available |
| `requiredNetwork`  | integer | none   | The network ID that the dApp requires to function   |
| `onWeb3Fallback`  | boolean | false   | Set to `true` when you connect to a smart contract via a provider like infura   |


## Documentation

[Documentation](https://consensys.github.io/rimble-ui/)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
