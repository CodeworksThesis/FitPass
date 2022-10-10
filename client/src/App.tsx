import React from 'react';
import './App.css';
import { LoginPage } from './components/LoginPage';
import { UserMock } from './mocks/UserMock';
import Profile from './pages/profile';

function App() {
  return (
    <div>
      <h1>FitPass</h1>
      <LoginPage />
      <Profile id={UserMock.id} favourites={[]} booked={[]} profilePic={UserMock.profilePic} />
    </div>
  );
}

export default App;

