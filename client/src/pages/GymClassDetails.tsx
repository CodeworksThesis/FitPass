import React from 'react'
import { useParams } from 'react-router-dom';
import { GymClass } from '../mocks/GymClassMock';
import PageTitle from '../components/PageTitle';
import Map from '../components/Map';
import { formatDateTime } from '../utils/time';
import ReserveBar from '../components/ReserveBar';

export default function GymClassDetails() {
  const { id } = useParams()
  console.log(id)
  const gymClass = GymClass.filter(post => post.id === id)
  const {postPic, exerciseName, desc,exerciseType, classDate, studioName, price} = gymClass[0]
  if (!gymClass) return <div>Loading...</div>

  return (
    <div className="overflow-y-scroll">
      <div className="w-full h-40 md:h-64">
        <img src={postPic} alt={exerciseName} className="w-full h-full object-cover"/>
      </div>
      <PageTitle title={exerciseName}/>
      <article className="bg-[#6F87F5] flex flex-col mx-auto w-[95%] rounded-xl text-white mb-5 transition-all">
        <div className="flex gap-2 pl-4">
          <p className="rounded-2xl border-[1px] border-white py-3 px-3 mt-4 text-sm">{exerciseType}</p>
          <p className="rounded-2xl border-[1px] border-white py-3 px-3 mt-4 text-sm">{studioName}</p>
        </div>
        <div>
          <p className="text-[13px] px-4 pt-3 pb-1"><span className="font-bold">When: </span>{formatDateTime(classDate)}</p>
          <p className="text-[13px] px-4 pt-1 pb-1"><span className="font-bold">Price: </span>{price}</p>
          <p className="text-[13px] px-4 pt-1 pb-5"><span className="font-bold">Description: </span>{desc}</p>
        </div>
      </article>
      <div className="flex flex-col flex-1 w-[95%] mx-auto h-[24rem] mb-28 md:h-[36rem] transition-all">
        <Map gymClassList={gymClass} isHome={false}/>
      </div>
      <div className="fixed bottom-0 w-full bg-white">
        <ReserveBar />
      </div>
    </div>
  )
}