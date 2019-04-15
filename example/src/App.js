import React, { Component } from "react";

import { Text } from "rimble-ui";
import { ConnectionBanner } from "rimble-web3-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <Text>Connection Banner</Text>
        <ConnectionBanner requiredNetwork={3} curerentNetwork={4} />
      </div>
    );
  }
}
