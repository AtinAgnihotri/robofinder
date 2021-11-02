import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card name="Bender" email="bender@planetexpress.te"/>
      <Card name="BT-7274" email="bt_7274@defendfrontier.org"/>
      <Card name="Legion" email="legion.geth@sr2.normandy.al"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
