# rimble-web3-components

> Web3 React components built with Rimble UI

[![NPM](https://img.shields.io/npm/v/rimble-web3-components.svg)](https://www.npmjs.com/package/rimble-web3-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Dependencies

- react
- rimble-ui
- styled-components
- prop-types

## Install

```bash
npm install --save rimble-web3-components rimble-ui prop-types styled-components
```

## Usage

```jsx
import React, { Component } from "react";

import { ConnectionBanner } from "rimble-web3-components";

class Example extends Component {
  render() {
    return (
      <ConnectionBanner
        currentNetwork={3}
        requiredNetwork={4}
        onWeb3Fallback={false}
      />
    );
  }
}
```

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
