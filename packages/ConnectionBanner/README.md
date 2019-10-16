![Rimble Connection Banner - wrong network](./_assets/connection-banner-wrong-network.png)
![Rimble Connection Banner - incompatible browser](./_assets/connection-banner-incompatible-browser.png)
![Rimble Connection Banner - no wallet](./_assets/connection-banner-no-wallet.png)

On mobile:
![Rimble Connection Banner - mobile - incompatible browser](./_assets/connection-banner-incompatible-browser-mobile.png)
![Rimble Connection Banner - mobile - wrong network](./_assets/connection-banner-wrong-network-mobile.png)

# @rimble/connection-banner

React component built with [Rimble UI](https://github.com/ConsenSys/rimble-ui) that displays a banner providing information about a user's Ethereum network connection. The banner will give informative and helpful information to resolve the issue with device-specific language. The banner informs the user of the following scenarios:

- not using a Web3-capable browser
- a wallet is not available
- current Ethereum network does not match the specified required network

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @rimble/connection-banner

// with yarn
yarn add @rimble/connection-banner
```

## Usage Example

### Default messages

```jsx
import ConnectionBanner from '@rimble/connection-banner';

<ConnectionBanner
  currentNetwork={3}
  requiredNetwork={1}
  onWeb3Fallback={true}
/>;
```

### Custom messages

```jsx
<ConnectionBanner
  currentNetwork={network.current.id}
  requiredNetwork={this.config.requiredNetwork}
  onWeb3Fallback={web3Fallback}

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
```

## Props

| Name                           | Type    | Default              | Description                                                                    |
| ------------------------------ | ------- | -------------------- | ------------------------------------------------------------------------------ |
| `currentNetwork`               | integer | none                 | The network ID that the user is connected to, if available                     |
| `requiredNetwork`              | integer | none                 | The network ID that the dApp requires to function                              |
| `onWeb3Fallback`               | boolean | false                | Set to `true` when you connect to a smart contract via a provider like infura  |
| `notWeb3CapableBrowserMessage` | node    | see default messages | Markup that will be rendered when the `notWeb3CapableBrowser` condition is met |
| `noNetworkAvailableMessage`    | node    | see default messages | Markup that will be rendered when the `noNetworkAvailable` condition is met    |
| `onWrongNetworkMessage`        | node    | see default messages | Markup that will be rendered when the `onWrongNetwork` condition is met        |

## Default Messages

### notWeb3CapableBrowserMessage - Desktop

> Your browser doesn't support our blockchain features
>
> Switch to either Brave, FireFox, Opera, or Chrome to continue

### notWeb3CapableBrowserMessage - Mobile

> Your browser doesn't support our blockchain features
>
> Try a mobile wallet browser like Status, Coinbase wallet or Cipher

### noNetworkAvailableMessage - Desktop only

> Install the MetaMask browser extension to use our blockchain features in your current browser
>
> `installMetaMaskButton`

### onWrongNetworkMessage - Desktop

> Switch to the `requiredNetworkName` Ethereum network in MetaMask
>
> Change your network in your MetaMask extension. You're currently on `currentNetworkName`

### onWrongNetworkMessage - Mobile

> Switch to the `requiredNetworkName` Ethereum network in Settings
>
> Change your network in your MetaMask extension. You're currently on `currentNetworkName`

## Documentation

[Documentation](https://rimble.consensys.design/components/web3-components/ConnectionBanner)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
