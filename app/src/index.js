import EmbarkJS from 'Embark/EmbarkJS';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
// import your contracts
// e.g if you have a contract named SimpleStorage:
import CryptomonContract from '../../embarkArtifacts/contracts/CryptomonContract';


EmbarkJS.onReady((err) => {
  // You can execute contract calls after the connection
  ReactDOM.render(<App />, document.getElementById('root'));
});
