import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './css/style.css'
import b2cauth from 'react-azure-adb2c';


// b2cauth.initialize({
//     instance: 'https://login.microsoftonline.com/tfp/', 
//     tenant: 'azureb2cfirst.onmicrosoft.com',
//     signInPolicy: 'B2C_1_react_signup',
//     applicationId: '1f25d876-a08b-4114-8db5-53bb37f647c0',
//     cacheLocation: 'sessionStorage',
//     scopes: ['https://azureb2cfirst.onmicrosoft.com/api/user_impersonation'],
//     redirectUri: 'http://localhost:3000/',
//     postLogoutRedirectUri: window.location.origin,
//   });


// b2cauth.run(() => {
// ReactDOM.render(<BrowserRouter>
//     <App />
// </BrowserRouter>, document.getElementById('root'));
//   });

  ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
