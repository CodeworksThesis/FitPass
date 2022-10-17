import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { GymClassProvider } from './hooks/useGymClass'
import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';
const audience = process.env.REACT_APP_AUTH0_AUDIENCE

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
    scope='openid profile email'
  >
    <GymClassProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GymClassProvider>
  </Auth0Provider>,
  document.getElementById('root'),
);

