import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { MoralisProvider } from "react-moralis";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="styCKL2IOxfdqF83fpMnYgIZjzmQCngppq9XllEQ" serverUrl="https://dafptvgwliyh.usemoralis.com:2053/server">
      < Router>
        <App />
      </ Router>
    </MoralisProvider>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
