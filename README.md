# Rimble Web3 Components

Monorepo for React components and utility library that help developers build web3 dapps faster with better UX.

## Requirements

[Node](https://nodejs.org/en/) - [OS-dependent install instructions](https://nodejs.org/en/)

[Yarn](https://yarnpkg.com/en/) - [OS-dependent install instructions](https://yarnpkg.com/en/docs/install)

[Lerna](https://lerna.js.org/) - `npm install -g lerna`

## Quick Start

Install all dependencies

`yarn install`

Bootstrap packages with lerna

`lerna bootstrap`

## Monorepo Scripts

Run linting on all packages

`lerna run lint`

Run tests on all packages

`lerna run test`

Compile libraries with Rollup

`yarn build`

Commit changes to libraries

`git commit -am “commit message”`

Publish updated packages to NPM

`lerna publish`

### For CI build environment

Remove existing compiled packages, lint and test

`lerna run check-packages`

### Monorepo structure

```text
├── node_modules
├── packages
│   ├── ConnectionBanner
│   │   ├── src
│   │   ├── test
│   │   ├── babel.config.js
│   │   ├── eslint.config.js
│   │   ├── jest.config.js
│   │   ├── prettier.config.js
│   │   ├── package.json
│   │   └── task -> ../../scripts/task
│   ├── NetworkIndicator
│   │   └── ... (same for all components)
│   ├── Utils
│   │   ├── src
│   │   ├── test
│   │   ├── babel.config.js
│   │   ├── eslint.config.js
│   │   ├── jest.config.js
│   │   ├── prettier.config.js
│   │   ├── package.json
│   │   └── task -> ../../scripts/task
│   └── ...
├── scripts
│   └── task
├── babel.config.js
├── eslint.config.js
├── jest.config.js
├── lerna.json
├── lint-staged.config.js
├── package.json
├── prettier.config.js
└── rollup.config.js
```

- Yarn handles dependencies
  - Root package defines shared development tooling (lint, prettier, babel)
    - Default base config files for each tool exist in root
    - Config files are shared by all packages
  - Each package is for a releasable component or library
    - All packages share same structure and tooling
    - Config files for each tool are import defaults from root
    - Config files for any tool can be extended for individual package needs
    - Symlinks to a common `task` script that defines how tools are invoked by lerna
    - Each package is versioned independently via the `lerna publish` command
- Rollup transpiles via babel releasable packages
- Lerna handles multiple package tasks (test, lint, publish)

### Misc

To publish to a new package to NPM you must first manually create the package via the command line.
`npm publish --access public`

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your contributions!

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
