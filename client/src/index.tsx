import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { GymClassProvider } from './hooks/useGymClass';
import './index.css';
import { LocationProvider } from './hooks/useLocation';
import { ProfileProvider } from './hooks/useProfileUpdate';

const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? '';
const audience = process.env.REACT_APP_AUTH0_AUDIENCE

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    audience={audience}
    scope='openid profile email'
  ><LocationProvider>
    <GymClassProvider>
      <ProfileProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ProfileProvider>
    </GymClassProvider>
    </LocationProvider>
  </Auth0Provider>
);

