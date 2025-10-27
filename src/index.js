import React from 'react';
import ReactDOM from 'react-dom/client';
import Store from './Store';
import reportWebVitals from './reportWebVitals';
// import SignUp from './SignUp';
// import Buttons from './Buttons';
// import PolluxUI from './PolluxUI';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Store />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
