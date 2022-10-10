import React from 'react'
import GymClassList from '../components/GymClassList';
import OpenMap from '../components/OpenMap';
import GMap from '../components/GMap';

export default function OpenLanding(){
  return (
    <div>
        <OpenMap />
        <GymClassList />
    </div>
  )
}