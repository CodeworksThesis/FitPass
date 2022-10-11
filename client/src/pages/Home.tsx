import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import PageTitle from '../components/PageTitle';

export default function Landing(){
  return (
    <div className="w-[90%] mx-auto">
        <PageTitle title={"FIND YOUR NEAREST CLASS"}/>
        <Map />
        <GymClassList />
    </div>
  )
}