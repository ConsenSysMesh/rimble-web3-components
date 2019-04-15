import React, { Component } from "react";
import { ConnectionBanner } from "rimble-web3-components";
import { Box, Card, Text, Heading, Field, Select, Checkbox } from "rimble-ui";

export default class App extends Component {
  state = {
    currentNetwork: 3,
    currentNetworkSelect: 3,
    requiredNetwork: 4,
    onWeb3Fallback: false
  };

  selectRequiredNetwork = (event) => {
    const networkId = parseInt(event.target.value, 0)
    this.setState({requiredNetwork: networkId})
  }

  selectCurrentNetwork = (event) => {    
    const value = event.target.value;
    // Select component requires empty string
    this.setState({currentNetworkSelect: value});
    
    // ComponentBanner accepts null
    const networkId = value === '' ? null : parseInt(value, 0)
    this.setState({currentNetwork: networkId}, () => {
      console.log("this.state.currentNetwork", this.state.currentNetwork);
    });
  }

  toggleOnWeb3Fallback = () => {
    this.setState({ onWeb3Fallback: !this.state.onWeb3Fallback }, () => {
      console.log("this.state.onWeb3Fallback", this.state.onWeb3Fallback)
    })
  }

  render() {
    return (
      <Box maxWidth={"800px"} mx={"auto"}>
        <Heading.h1>Rimble Web3 Components</Heading.h1>
        <Heading.h2>Connection Banner</Heading.h2>
        <Text>
          Requires currentNetwork and requiredNetwork props, optional
          onWeb3Fallback prop.
        </Text>
        <Card maxWidth={"400px"}>
          <Heading.h3>ConnectionBanner Props</Heading.h3>
          <Field label="requiredNetwork">
            <Select items={[0, 1, 3, 4, 42]} required onChange={this.selectRequiredNetwork} value={this.state.requiredNetwork} />
          </Field>
          <Field label="currentNetwork (accepts null)">
            <Select items={['', 0, 1, 3, 4, 42]} required onChange={this.selectCurrentNetwork} value={this.state.currentNetworkSelect} />
          </Field>
          <Checkbox label="onWeb3Fallback (optional)" onChange={this.toggleOnWeb3Fallback} value={this.state.onWeb3Fallback} />
        </Card>

        <ConnectionBanner
          currentNetwork={this.state.currentNetwork}
          requiredNetwork={this.state.requiredNetwork}
          onWeb3Fallback={this.state.onWeb3Fallback}
        />
      </Box>
    );
  }
}
