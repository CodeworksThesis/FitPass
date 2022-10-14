import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
import BookingFilterButton from '../components/BookingFilterButton';
import { UserMock } from '../mocks/UserMock';
import {useEffect, useState} from 'react';
import { formatDate } from '../utils/time';
import { tomorrow, dayAfterTomorrow ,nextMonday, secondMonday } from '../utils/days';


function Bookings(){
  const initialClasses = UserMock.booked.filter((item) => {
    return item.classDate >= new Date();
    })

  const [button, setButton] = useState('');
  const [classes, setClasses] = useState(initialClasses);
  const [dateString, setDateString] = useState('')

   useEffect(function sideEffect() {
    let selectedClasses:any[] =[];
      if(button === 'today'){
        setDateString(formatDate(new Date()))
        selectedClasses = initialClasses.filter((item) => {
          return item.classDate <= tomorrow();
        })
        setClasses(selectedClasses);
      }
      if(button === 'tomorrow'){
        setDateString(formatDate(tomorrow()))
        selectedClasses = initialClasses.filter((item) => {
          return item.classDate >= tomorrow() && item.classDate <= dayAfterTomorrow();
        })
        setClasses(selectedClasses);
      } 
      if(button === 'nextWeek'){
        setDateString('NEXT WEEK')
        selectedClasses = initialClasses.filter((item) => {
          return item.classDate >= nextMonday() && item.classDate <= secondMonday();
        })
        setClasses(selectedClasses);
      } 
 }, [button])

    return(
        <div className='relative block flex flex-col w-full items-center mt-20'>
          <div className='flex flex-row justify-center'>
            <BookingFilterButton buttonClick={() => {setButton('today')}} buttonText={'TODAY'} isPressed={button==='today'}/>
            <BookingFilterButton buttonClick={() => {setButton('tomorrow')}} buttonText='TOMORROW' isPressed={button==='tomorrow'}/>
            <BookingFilterButton buttonClick={() => {setButton('nextWeek')}} buttonText='NEXT WEEK' isPressed={button==='nextWeek'}/>
          </div>
          <div className='w-full max-w-4xl pl-4 h-4'>
            <p>{dateString}</p>
          </div>
            <div className='flex flex-col items-center w-full'>
                {classes.map((post,index) => <GymClassItemSmall key={index} exerciseName={post.exerciseName} studioName={post.studioName} classDate={post.classDate} postPic={post.postPic} exerciseType={post.exerciseType} duration={post.duration} desc={post.desc}/>)}
            </div>
        </div>
    )
}

export default Bookings;