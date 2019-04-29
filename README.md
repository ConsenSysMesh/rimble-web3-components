# Rimble Web3 Components

Rimble Web3 Components provides drop-in React components using [Rimble-UI](https://github.com/ConsenSys/rimble-ui) for common UX patterns in decentralized applications. This monorepo includes a utility library and independently versioned packages for each of these components.

## Requirements

[Node](https://nodejs.org/en/) - [OS-dependent install instructions](https://nodejs.org/en/)

[Yarn](https://yarnpkg.com/en/) - [OS-dependent install instructions](https://yarnpkg.com/en/docs/install)

## Quick Start with Storybook Preview

This repo utilizes Storybook for component visualization and testing.

```console
// Clone the repo
git clone git@github.com:ConsenSys/rimble-web3-components.git

// Change into the repository root
cd rimble-web3-components

// Install all dependencies from repository root directory
yarn install

// Watch for changes to all packages and automaticallyt rebuild
yarn watch
```

Open a second terminal window

```console
// From a different terminal session, change directory to Storybook inside the root repository
cd storybook

// Install Storybook
yarn install

// Start Storybook
yarn storybook
```

You can now edit components that are in the `/package` directory and the changes will update in storybook.

## Monorepo structure

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

### Monorepo organization

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

## Prepary packages for Pull Request or publishing

Bootstrap packages with lerna

`lerna bootstrap`

Run linting on all packages

`lerna run lint`

Run tests on all packages

`lerna run test`

Compile libraries with Rollup

`yarn build`

Commit changes to libraries

`git commit -am “commit message”`

Version and publish updated packages to NPM

`lerna publish`

### Peer dependencies

- rimble-ui

  `yarn add rimble-ui`

- styled-components

  `yarn add styled-components`

- prop-types

  `yarn add prop-types`

### Misc

To publish a new package to NPM you must first manually create the package via the command line.

`npm publish --access public`

## Developing new locally

1.  Create new folder in the /packages directory
1.  Add required files and structure (generator coming soon)
1.  Code component
1.  Create new component folder in `/storybook/src/stories`
1.  Create new story for component
1.  Import component to new story using relative paths

Pull requests will automatically generate an atomic build that is hosted on Netlify. The link to the hosted version will be posted in the PR.

## Using components locally in another repo

1.  Create link to local component in rimble-web3-components repository

    ```console
    cd packages/ConnectionBanner
    yarn link
    ```

2.  Link to local component in rimble-app-demo repository

    ```console
    yarn link @rimble/connection-banner
    ```

3.  Modify webpack to [fix multiple issues of styled-components](https://www.styled-components.com/docs/faqs#how-can-i-fix-issues-when-using-npm-link-or-yarn-link)

### If using create-react-app, follow these steps to resolve multiple instances of styled-component:

1.  Need to customize webpack, but don’t want to eject:

    - https://github.com/timarney/react-app-rewired/
    - https://github.com/aze3ma/react-app-rewire-aliases

2.  Add packages:

    `yarn add -D react-app-rewired react-app-rewire-aliases`

3.  Create new file in root directory:

    `config-overrides.js`

4.  Paste snippet in config-overrides.js:

    ```js
    const rewireAliases = require('react-app-rewire-aliases');
    const { paths } = require('react-app-rewired');
    const path = require('path');

    /* config-overrides.js */
    module.exports = function override(config, env) {
      config = rewireAliases.aliasesOptions({
        'styled-components': path.resolve(
          `${paths.appSrc}/../node_modules/styled-components`,
        ),
      })(config, env);
      return config;
    };
    ```

### Issues

[Open an issue](https://github.com/ConsenSys/rimble-web3-components/issues) for any bugs or feature requests

### Contributing

We are open source and welcome your [contributions](https://github.com/ConsenSys/rimble-web3-components/CONTRIBUTIONS.md) !

### License

MIT © [ConsenSys](https://github.com/ConsenSys)
