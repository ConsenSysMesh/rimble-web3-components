![Rimble Connection Banner - wrong network](./_assets/connection-banner-wrong-network.png)
![Rimble Connection Banner - incompatible browser](./_assets/connection-banner-incompatible-browser.png)
![Rimble Connection Banner - no wallet](./_assets/connection-banner-no-wallet.png)

# @rimble/connection-banner

React component built with [Rimble UI](https://github.com/ConsenSys/rimble-ui) that displays a banner providing information about a user's Ethereum network connection. The banner informs the user of the following scenarios:
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

### notWeb3CapableBrowserMessage

> Your browser doesn't support our blockchain features
>
> Switch to either Brave, FireFox, Opera, or Chrome to continue

### noNetworkAvailableMessage

> Install MetaMask to use our blockchain features
>
> This will let you connect using an Ethereum public address
>
> `installMetaMaskButton`

### onWrongNetworkMessage

> Switch to the `requiredNetworkName` Ethereum network in MetaMask
>
> Change your network in your MetaMask extension. You're currently on `currentNetworkName`

## Documentation

[Documentation](https://consensys.github.io/rimble-ui/)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
