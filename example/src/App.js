import React, { Component } from "react";
import { ConnectionBanner } from "rimble-web3-components";
import { Text } from "rimble-ui";

export default class App extends Component {
  render() {
    return (
      <div>
        <Text>Connection Banner</Text>
        <ConnectionBanner currentNetwork={3} requiredNetwork={4} />
      </div>
    );
  }
}
