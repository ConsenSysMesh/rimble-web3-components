import React, { Component } from "react";
import PropTypes from "prop-types";
import RimbleUtils from "rimble-utils";
import { Box, Flex, Icon, Text, MetaMaskButton } from "rimble-ui";

const bannerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  backgroundColor: "white"
};

const WrongNetwork = ({ currentNetwork, requiredNetwork }) => {
  return (
    <Box style={bannerStyle} p={3}>
      <Flex alignItems={"center"}>
        <Box p={4}>
          <Icon name="Warning" color="gold" size="30" />
        </Box>
        <Flex flexDirection={"column"}>
          <Text fontWeight={"bold"}>
            Switch to the {RimbleUtils.getEthNetworkNameById(requiredNetwork)}{" "}
            Ethereum network in MetaMask
          </Text>
          <Text>
            Change your network in your MetaMask extension. You're currently on{" "}
            {RimbleUtils.getEthNetworkNameById(currentNetwork)}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const NoNetwork = () => {
  return (
    <Box style={bannerStyle} p={3}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Box p={4}>
            <Icon name="Warning" color="gold" size="30" />
          </Box>
          <Flex flexDirection={"column"}>
            <Text fontWeight={"bold"}>
              Install MetaMask to use our blockchain features
            </Text>
            <Text>
              This will let you connect using an Ethereum public address
            </Text>
          </Flex>
        </Flex>
        <MetaMaskButton>Install MetaMask</MetaMaskButton>
      </Flex>
    </Box>
  );
};

const NotWeb3Browser = () => {
  return (
    <Box style={bannerStyle} p={3}>
      <Flex alignItems={"center"}>
        <Box p={4}>
          <Icon name="Warning" color="gold" size="30" />
        </Box>
        <Flex flexDirection={"column"}>
          <Text fontWeight={"bold"}>
            Your browser doesn't support our blockchain features
          </Text>
          <Text>
            Switch to either Brave, FireFox, Opera, or Chrome to continue
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

class ConnectionBanner extends Component {
  static propTypes = {
    currentNetwork: PropTypes.number,
    requiredNetwork: PropTypes.number,
    onWeb3Fallback: PropTypes.bool
  };

  state = {
    isCorrectNetwork: null
  };

  checkCorrectNetwork = () => {
    const isCorrectNetwork =
      this.props.currentNetwork === this.props.requiredNetwork;
    if (isCorrectNetwork !== this.state.isCorrectNetwork) {
      this.setState({ isCorrectNetwork });
    }
  };

  componentDidMount() {
    const browserIsWeb3Capable = RimbleUtils.browserIsWeb3Capable();
    this.setState({ browserIsWeb3Capable });
  }

  componentDidUpdate() {
    if (
      this.props.currentNetwork &&
      this.props.requiredNetwork &&
      this.state.isCorrectNetwork === null
    ) {
      this.checkCorrectNetwork();
    }
  }

  render() {
    return (
      <div>
        {this.state.isCorrectNetwork === false ? (
          <WrongNetwork
            currentNetwork={this.props.currentNetwork}
            requiredNetwork={this.props.requiredNetwork}
          />
        ) : this.state.browserIsWeb3Capable === false ? (
          <NotWeb3Browser />
        ) : this.props.onWeb3Fallback === true ||
          this.props.currentNetwork === null ? (
          <NoNetwork />
        ) : null}
      </div>
    );
  }
}

export { ConnectionBanner };
