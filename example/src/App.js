import React, { Component } from "react";

import { ConnectionBanner } from "rimble-web3-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <ConnectionBanner requiredNetwork={3} curerentNetwork={4} />
      </div>
    );
  }
}
