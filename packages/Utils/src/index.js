import Bowser from 'bowser';

// Validates user's browser is web3 capable
const funcs = {
  browserIsWeb3Capable() {
    // User Agent
    const browser = Bowser.getParser(window.navigator.userAgent);
    const userAgent = browser.parse().parsedResult;

    const validBrowser = browser.satisfies({
      desktop: {
        chrome: '>49',
        firefox: '>52',
        opera: '>36',
      },
    })
      ? true
      : false;

    return validBrowser;
  },

  // Returns a network name based on a network ID
  getEthNetworkNameById(networkId) {
    let networkName = '';

    if (typeof networkId === 'undefined') {
      networkId = '';
    }

    switch (networkId) {
      case 1:
        networkName = 'Main';
        break;
      case 3:
        networkName = 'Ropsten';
        break;
      case 4:
        networkName = 'Rinkeby';
        break;
      case 42:
        networkName = 'Kovan';
        break;
      case '':
        networkName = 'None';
        break;
      default:
        networkName = 'Custom';
        break;
    }
    return networkName;
  },
};

export default funcs;
