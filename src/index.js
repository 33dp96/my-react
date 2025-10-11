import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.css';
// import './SignUp.css';
import './index.css';
// import Todowithswiper1 from './Todowithswiper1.js';
//import ModPanel from './ModPanel.js';
import reportWebVitals from './reportWebVitals.js';
// import App from './App.js';
import Dashboard from './Dashboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
