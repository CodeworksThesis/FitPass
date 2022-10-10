import React from 'react';
import './App.css';
import GMapLanding from './pages/GMapLanding';
import OpenLanding from './pages/OpenLanding';

function App() {

  return (
    <div className="flex justify-center w-screen">
      <GMapLanding />
      <OpenLanding/>
    </div>
  );
}

export default App;
