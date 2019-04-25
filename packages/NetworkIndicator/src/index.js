import React from 'react';
import PropTypes from 'prop-types';
import RimbleUtils from '@rimble/utils';
import { Flex, Text, Icon, Tooltip } from 'rimble-ui';

const RightNetwork = ({ currentNetwork }) => {
  const tooltipMessage = `You're on the right network`;
  return (
    <Tooltip message={tooltipMessage} placement="bottom">
      <Flex>
        <Text mr={2}>{RimbleUtils.getEthNetworkNameById(currentNetwork)}</Text>
        <Icon name="CheckCircle" color="green" />
      </Flex>
    </Tooltip>
  );
};

RightNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
};

const WrongNetwork = ({ currentNetwork, requiredNetwork }) => {
  const tooltipMessage = `Switch to the ${RimbleUtils.getEthNetworkNameById(
    requiredNetwork,
  )} network`;
  return (
    <Tooltip message={tooltipMessage}>
      <Flex>
        <Text mr={2}>{RimbleUtils.getEthNetworkNameById(currentNetwork)}</Text>
        <Icon name="Error" color="red" />
      </Flex>
    </Tooltip>
  );
};

WrongNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
  requiredNetwork: PropTypes.number.isRequired,
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

const OnNetwork = ({ currentNetwork }) => {
  return (
    <Flex>
      <Text mr={2}>{RimbleUtils.getEthNetworkNameById(currentNetwork)}</Text>
    </Flex>
  );
};

OnNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
};

class NetworkIndicator extends React.Component {
  state = {
    isCorrectNetwork: null,
  };

  componentDidMount() {
    if (this.props.currentNetwork && this.props.requiredNetwork) {
      this.checkCorrectNetwork();
    }
  }

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

  render() {
    return (
      <Flex flexDirection="column">
        <Text fontSize={1} color="#a2a2a2" caps>
          Current Network
        </Text>
        {this.state.isCorrectNetwork && this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <RightNetwork currentNetwork={this.props.currentNetwork} />
        ) : this.state.isCorrectNetwork === false &&
          this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <WrongNetwork
            currentNetwork={this.props.currentNetwork}
            requiredNetwork={this.props.requiredNetwork}
          />
        ) : this.state.isCorrectNetwork === null &&
          this.props.requiredNetwork ? (
          // Has requiredNetwork prop
          <div>
            <NoNetwork />
            {this.props.currentNetwork} & {this.props.requiredNetwork} &&{' '}
            {this.state.isCorrectNetwork}
          </div>
        ) : this.props.currentNetwork ? (
          <OnNetwork currentNetwork={this.props.currentNetwork} />
        ) : (
          <div>
            <NoNetwork />
            {this.props.currentNetwork} & {this.props.requiredNetwork} &&{' '}
            {this.state.isCorrectNetwork}
          </div>
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
