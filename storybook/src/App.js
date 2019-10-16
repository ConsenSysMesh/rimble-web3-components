import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectionBanner from '@rimble/connection-banner';

function App() {
  return (
    <div className="App">
      <ConnectionBanner currentNetwork={4} requiredNetwork={3} />
    </div>
  );
}

export default App;
