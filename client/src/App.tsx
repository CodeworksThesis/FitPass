import React from 'react';
import './App.css';
import Profile from './pages/profile';
import { UserMock } from './mocks/UserMock';


function App() {
  return (
     <div>
        <Profile id={UserMock.id} favourites={[]} booked={[]} profilePic={UserMock.profilePic} />
     </div>
  )

}

export default App;
