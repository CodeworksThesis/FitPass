import React from 'react';
import './App.css';
import { UserMock } from './mocks/UserMock';
import Profile from './pages/profile';
import { Route, Routes, Link } from 'react-router-dom';
import UserStats from './pages/stats';

function App() {
  return (
    <div>
      <h1>FitPass</h1>
      {/* <LoginPage /> */}
      {/* <Profile id={UserMock.id} favourites={[]} booked={[]} profilePic={UserMock.profilePic} /> */}


      <nav>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav> 
       


      <Routes>
        <Route path="/profile" element={<Profile id={UserMock.id} profilePic={UserMock.profilePic} />}/>
        <Route path="/stats" element={<UserStats  id={UserMock.id} favourites={UserMock.favourites} booked={UserMock.booked} profilePic={UserMock.profilePic} />}/>
    </Routes>
    </div>
  );
}

export default App;

