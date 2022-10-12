import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

//TODO: figure out why Auth, TS and env not work together 

ReactDOM.render(
  <Auth0Provider
    // domain={domain}
    // clientId={clientId}
    domain= {process.env.REACT_APP_AUTH0_DOMAIN as string}
    clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID as string}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root'),
);