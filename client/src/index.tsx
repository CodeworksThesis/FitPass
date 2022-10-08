import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

//TODO: figure out why Auth, TS and env not work together 
const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';


ReactDOM.render(
  <Auth0Provider
    // domain={domain}
    // clientId={clientId}
    domain='fitpass.eu.auth0.com'
    clientId='At8nqhZKzFDcvJAgmCCkGDHfRFz5Ao2s'
    redirectUri={window.location.origin}
  >
      <App />
  </Auth0Provider>,
  document.getElementById('root'),
);

