import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Icon, Tooltip } from 'rimble-ui';

const RightNetwork = ({ networkName }) => {
  const tooltipMessage = `You're on the right network`;
  return (
    <Tooltip message={tooltipMessage} placement="bottom">
      <Flex>
        <Text mr={2}>{networkName}</Text>
        <Icon name="CheckCircle" color="green" />
      </Flex>
    </Tooltip>
  );
};

RightNetwork.propTypes = {
  networkName: PropTypes.string.isRequired,
};

const WrongNetwork = ({ currentNetworkName, requiredNetworkName }) => {
  const tooltipMessage = `Switch to the ${requiredNetworkName} network`;
  return (
    <Tooltip message={tooltipMessage}>
      <Flex>
        <Text mr={2}>{currentNetworkName}</Text>
        <Icon name="Error" color="red" />
      </Flex>
    </Tooltip>
  );
};

WrongNetwork.propTypes = {
  currentNetworkName: PropTypes.string.isRequired,
  requiredNetworkName: PropTypes.string.isRequired,
};

const NoNetwork = () => {
  const tooltipMessage = `We can't detect a network. Install MetaMask or 
  switch to a mobile dApp browser like Cipher or Status.`;
  return (
    <Tooltip message={tooltipMessage}>
      <Flex>
        <Text mr={2}>None</Text>
        <Icon name="Error" color="red" />
      </Flex>
    </Tooltip>
  );
};

const OnNetwork = ({ networkName }) => {
  return (
    <Flex>
      <Text mr={2}>{networkName}</Text>
    </Flex>
  );
};

OnNetwork.propTypes = {
  networkName: PropTypes.string.isRequired,
};

class NetworkIndicator extends React.Component {
  state = {
    isCorrectNetwork: null,
  };

  componentDidUpdate() {
    if (this.props.currentNetwork && this.props.requiredNetwork) {
      this.checkCorrectNetwork();
    }
  }

  checkCorrectNetwork = () => {
    const isCorrectNetwork =
      this.props.currentNetwork === this.props.requiredNetwork;
    if (isCorrectNetwork !== this.state.isCorrectNetwork) {
      this.setState({ isCorrectNetwork });
    }
  };

  getNetworkName = networkId => {
    let networkName = '';

    switch (networkId) {
      case 1:
        networkName = 'Main';
        break;
      case 2:
        networkName = 'Private';
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
      default:
        networkName = 'Unknown';
        break;
    }
    return networkName;
  };

  render() {
    return (
      <Flex flexDirection="column">
        <Text fontSize={1} color="#a2a2a2" caps>
          Current Network
        </Text>
        {this.state.isCorrectNetwork && this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <RightNetwork
            networkName={this.getNetworkName(this.props.currentNetwork)}
          />
        ) : this.state.isCorrectNetwork === false &&
          this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <WrongNetwork
            currentNetworkName={this.getNetworkName(this.props.currentNetwork)}
            requiredNetworkName={this.getNetworkName(
              this.props.requiredNetwork,
            )}
          />
        ) : this.state.isCorrectNetwork === null &&
          this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <NoNetwork />
        ) : this.props.currentNetwork ? (
          <OnNetwork
            networkName={this.getNetworkName(this.props.currentNetwork)}
          />
        ) : (
          <NoNetwork />
        )}
      </Flex>
    );
  }
}

NetworkIndicator.propTypes = {
  currentNetwork: PropTypes.number,
  requiredNetwork: PropTypes.number,
};

export default NetworkIndicator;
