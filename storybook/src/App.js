import React from 'react';
import EthConverter from '@rimble/eth-converter';

function App() {
  return (
    <div className="App">
      <EthConverter ethAmount={1} convertTo={'usd'} />
    </div>
  );
}

export default App;
