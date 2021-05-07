import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from "./routes";
import reportWebVitals from './reportWebVitals';
// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
