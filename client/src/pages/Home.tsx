import React from 'react'
import GymClassList from '../components/GymClassList';
import Map from '../components/Map';
import PageTitle from '../components/PageTitle';
import { GymClass } from '../mocks/GymClassMock';

export default function Landing(){
  return (
    <div className="w-[90%] mx-auto">
        <PageTitle title={"FIND YOUR NEAREST CLASS"}/>
        <div className="h-[20rem]">
          <Map gymClassList={GymClass} isHome={true}/>
        </div>
        <GymClassList />
    </div>
  )
}