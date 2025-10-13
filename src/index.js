import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './SignUp.css';
import './index.css';
// import Todowithswiper1 from './Todowithswiper1.js';
// import Todowithswiper2 from './Todowithswiper2.js';
import reportWebVitals from './reportWebVitals.js';
import StarAdmin from './StarAdmin.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarAdmin/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
