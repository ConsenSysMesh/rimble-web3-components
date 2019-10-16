import React from 'react';
import ConnectionBanner from '@rimble/connection-banner';

function App() {
  return (
    <div className="App">
      {/* <EthConverter value={1} currency={'usd'} /> */}
      <ConnectionBanner currentNetwork={1} requiredNetwork={3} />
    </div>
  );
}

export default App;
