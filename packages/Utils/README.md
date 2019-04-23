# rimble-utils

Rimble Utils is part of an array of tools to help web3 dApp developers launch products faster and with better UX.

## Getting started

Clone this repository and install its dependencies:

```bash
npm install rimble-utils --save
```

Import RimbleUtils library and call functions.

```js
import RimbleUtils from "rimble-utils";

const canDoWeb3 = RimbleUtils.browserIsWeb3Compatible();
const currentNetworkName = RimbleUtils.getEthNetworkNameById(4); // returns "Rinkeby"
```

## Documentation

[Documentation](https://consensys.github.io/rimble-ui/)


## License

MIT License

Copyright (c) 2018 ConsenSys, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
