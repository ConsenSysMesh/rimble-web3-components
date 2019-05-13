import React from 'react';
import PropTypes from 'prop-types';
import RimbleUtils from '@rimble/utils';
import { Flex, Text, Icon, Tooltip, Box } from 'rimble-ui';
import { ThemeProvider } from 'rimble-ui';

const RightNetwork = ({ currentNetwork, onNetworkMessage }) => {
  const tooltipMessage =
    onNetworkMessage === null
      ? `You're on the right network`
      : onNetworkMessage;
  return (
    <Tooltip message={tooltipMessage} placement="bottom">
      <Flex>
        <Text mr={2}>{RimbleUtils.getEthNetworkNameById(currentNetwork)}</Text>
        <Icon name="CheckCircle" color="#28C081" />
      </Flex>
    </Tooltip>
  );
};

RightNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
};

const WrongNetwork = ({
  currentNetwork,
  requiredNetwork,
  onWrongNetworkMessage,
}) => {
  const tooltipMessage =
    onWrongNetworkMessage === null
      ? `You're on the wrong network`
      : onWrongNetworkMessage;
  return (
    <Tooltip message={tooltipMessage}>
      <Flex>
        <Text mr={2}>{RimbleUtils.getEthNetworkNameById(currentNetwork)}</Text>
        <Icon name="Error" color="#DC2C10" />
      </Flex>
    </Tooltip>
  );
};

WrongNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
  requiredNetwork: PropTypes.number.isRequired,
  onWrongNetworkMessage: PropTypes.string,
};

const NoNetwork = ({ noNetworkMessage }) => {
  const tooltipMessage =
    noNetworkMessage === null
      ? `You're not on an Ethereum network`
      : noNetworkMessage;
  return (
    <Tooltip message={tooltipMessage}>
      <Flex>
        <Text mr={2}>None</Text>
        <Icon name="Error" color="#DC2C10" />
      </Flex>
    </Tooltip>
  );
};

const OnNetwork = ({ currentNetwork, onNetworkMessage }) => {
  return (
    <div>
      {onNetworkMessage === null ? (
        <Flex>
          <Text mr={2}>
            {RimbleUtils.getEthNetworkNameById(currentNetwork)}
          </Text>
        </Flex>
      ) : (
        <Tooltip message={onNetworkMessage}>
          <Flex>
            <Text mr={2}>
              {RimbleUtils.getEthNetworkNameById(currentNetwork)}
            </Text>
          </Flex>
        </Tooltip>
      )}
    </div>
  );
};

OnNetwork.propTypes = {
  currentNetwork: PropTypes.number.isRequired,
};

class NetworkIndicator extends React.Component {
  static propTypes = {
    currentNetwork: PropTypes.number,
    requiredNetwork: PropTypes.number,
    children: PropTypes.shape({
      onNetworkMessage: PropTypes.string,
      noNetworkMessage: PropTypes.string,
      onRequiredNetworkMessage: PropTypes.string,
      onWrongNetworkMessage: PropTypes.string,
    }),
  };
  static defaultProps = {
    currentNetwork: null,
    requiredNetwork: null,
    children: {
      onNetworkMessage: null,
      noNetworkMessage: null,
      onRequiredNetworkMessage: null,
      onWrongNetworkMessage: null,
    },
  };

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
    const { currentNetwork, requiredNetwork } = this.props;

    const {
      onNetworkMessage,
      noNetworkMessage,
      onRequiredNetworkMessage,
      onWrongNetworkMessage,
    } = this.props.children;

    return (
      <Box>
        <Box display="inline-block">
          <Flex flexDirection="column">
            <Text fontSize={1} color="#a2a2a2" caps>
              Current Network
            </Text>
            {this.state.isCorrectNetwork && requiredNetwork ? (
              // Has requiredNetwork prop
              <RightNetwork
                currentNetwork={currentNetwork}
                onNetworkMessage={onNetworkMessage}
              />
            ) : this.state.isCorrectNetwork === false && requiredNetwork ? (
              // Has requiredNetwork prop
              <WrongNetwork
                currentNetwork={currentNetwork}
                requiredNetwork={requiredNetwork}
                onWrongNetworkMessage={onWrongNetworkMessage}
              />
            ) : this.state.isCorrectNetwork === null && requiredNetwork ? (
              // Has requiredNetwork prop
              <NoNetwork noNetworkMessage={noNetworkMessage} />
            ) : currentNetwork ? (
              <OnNetwork
                currentNetwork={currentNetwork}
                onNetworkMessage={onNetworkMessage}
              />
            ) : (
              <NoNetwork noNetworkMessage={noNetworkMessage} />
            )}
          </Flex>
        </Box>
      </Box>
    );
  }
}

NetworkIndicator.propTypes = {
  currentNetwork: PropTypes.number,
  requiredNetwork: PropTypes.number,
};

export default NetworkIndicator;
