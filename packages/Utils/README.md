# rimble-utils

Rimble Utils is part of an array of tools to help web3 dApp developers launch products faster and with better UX.

## Getting started

Clone this repository and install its dependencies:

```sh
// with npm
npm install @rimble/utils --save

// with yarn
yarn add @rimble/utils
```

## Usage Example

Import RimbleUtils library and call functions.

```jsx
import RimbleUtils from '@rimble/utils';

const canDoWeb3 = RimbleUtils.browserIsWeb3Compatible(); // returns true or false boolean
const currentNetworkName = RimbleUtils.getEthNetworkNameById(4); // returns "Rinkeby" string
const isMobile = RimbleUtils.isMobileDevice(); // returns true or false boolean
```

## Methods of RimbleUtils

| Name                  | Parameters          | Returns | Description                                                                                      |
| --------------------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------ |
| browserIsWeb3Capable  | none                | boolean | Examines brower's UserAgent and determines if browser is recent Chrome, FireFox, Brave, or Opera |
| getEthNetworkNameById | Ethereum network ID | string  | Converts an Ethereum network ID into a network name                                              |
| isMobileBrowser       | none                | boolean | Examines browser's UserAgent and determines if the current device is a mobile platform           |

## Documentation

[Documentation](https://rimble.consensys.design/components/web3-components/NetworkIndicator)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
