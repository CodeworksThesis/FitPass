import React from 'react';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { UserMock } from './mocks/UserMock';
import Home from './pages/Home';
import { Route, Routes, Link } from 'react-router-dom';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import Favourites from './pages/Favourites';
import SearchResults from './pages/SearchResults';
import UserStats from './pages/UserStats';
import NavBar from './Navigation/NavigationBar';
import GymClassDetails from './pages/GymClassDetails';
import Payment from './pages/Payment';
import { useAuth0 } from '@auth0/auth0-react';
import { ErrorPage } from './pages/ErrorPage';

function App() {


  const { isAuthenticated } = useAuth0();


  return (
    <>
    {isAuthenticated ? 
    <nav className='fixed top-0 right-0 z-50'>
          <NavBar/>
      
        {/* <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/profile">Profile</Link>
        </li> */}
    </nav>
      : ''}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/stats" element={<UserStats/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/gymclass/:id" element={<GymClassDetails />} />
        {/* ErrorPage always at the bottom */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

