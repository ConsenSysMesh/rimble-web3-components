![Rimble Ether to Fiat Converter](./_assets/eth-fiat-converter.png)

# @rimble/eth-converter

React component built with [Rimble UI](https://github.com/ConsenSys/rimble-ui) that takes in a value of Ether and returns a value in a fiat currency or other cryptocurrency.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @rimble/eth-converter

// with yarn
yarn add @rimble/eth-converter
```

## Usage Example

### Default messages

```jsx
import ConnectionBanner from '@rimble/eth-converter';

<EthConverter ethValue={1} convertTo={'usd'} />;
```

## Props

| Name       | Type    | Default | Description                                         |
| ---------- | ------- | ------- | --------------------------------------------------- |
| `ethValue` | integer | none    | The amount of Ether that will be converted          |
| `converTo` | string  | usd     | The currency code to convert that value of Ether to |

## Documentation

[Documentation](https://rimble.consensys.design)

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
