import React from 'react';
import './App.css';
import { LoginPage } from './components/LoginPage';
import { UserMock } from './mocks/UserMock';
import Home from './pages/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import Favourites from './pages/Favourites';
import SearchResults from './pages/SearchResults';
import UserStats from './pages/UserStats';

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/login">Login</Link> */}
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/login" element={<LoginPage />}/> */}
      <Route path="/profile" element={<Profile id={UserMock.id} favourites={[]} booked={[]} profilePic={UserMock.profilePic} />}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/searchresults" element={<SearchResults/>}/>
      <Route path="/stats" element={<UserStats/>}/>
    </Routes>
    </>
  );
}

export default App;

