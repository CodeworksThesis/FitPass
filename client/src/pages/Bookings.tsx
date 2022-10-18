import React from 'react';
import GymClassItemSmall from '../components/GymClassItemSmall';
import BookingFilterButton from '../components/BookingFilterButton';
import {useEffect, useState} from 'react';
import { formatDate } from '../utils/time';
import { tomorrow, dayAfterTomorrow ,nextMonday, secondMonday } from '../utils/days';
import { useGymClass } from '../hooks/useGymClass';
import { Post } from '../../../globalTypes/Post'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';


 function Bookings(){

  const { bookedGymClassDetails } = useGymClass();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0()

  const initialClasses = bookedGymClassDetails.filter((item) => {
    return new Date(item.classDate) >= new Date();
  }).sort((a, b) => { return new Date(a.classDate).getTime() - new Date(b.classDate).getTime() }) 
  
  // const initialClasses = [...bookedGymClassDetails]
  const [button, setButton] = useState('');
  const [classes, setClasses] = useState(initialClasses);
  const [dateString, setDateString] = useState('');

  useEffect(function sideEffect() {
    let selectedClasses: Post[] = [];
      if(button === 'today'){
        setDateString(formatDate(new Date()))
        selectedClasses = bookedGymClassDetails.filter((item) => {
          return new Date(item.classDate) <= tomorrow() && new Date(item.classDate) === new Date(Date.now());
        })
        setClasses(selectedClasses);
      }
      if(button === 'tomorrow'){
        setDateString(formatDate(tomorrow()))
        selectedClasses = bookedGymClassDetails.filter((item) => {
          return new Date(item.classDate) >= tomorrow() && new Date(item.classDate) < dayAfterTomorrow();
        })
        setClasses(selectedClasses);
      } 
      if(button === 'nextWeek'){
        setDateString('NEXT WEEK')
        selectedClasses = bookedGymClassDetails.filter((item) => {
          return new Date(item.classDate) >= nextMonday() && new Date(item.classDate) < secondMonday();
        })
        setClasses(selectedClasses);
      } 
      if(button === ''){
        setClasses(initialClasses);
      }
  }, [button, bookedGymClassDetails])

    return(
      <>
      {isAuthenticated? 
        <div className='relative flex flex-col w-full items-center mt-20'>
          <div className='flex flex-row justify-center'>
            <BookingFilterButton buttonClick={() => {setButton('today')}} buttonText={'TODAY'} isPressed={button==='today'}/>
            <BookingFilterButton buttonClick={() => {setButton('tomorrow')}} buttonText='TOMORROW' isPressed={button==='tomorrow'}/>
            <BookingFilterButton buttonClick={() => {setButton('nextWeek')}} buttonText='NEXT WEEK' isPressed={button==='nextWeek'}/>
          </div>
          <div className='w-full max-w-4xl pl-4'>
            <p>{dateString}</p>
          </div>
            <div className='flex flex-col items-center w-full'>
              {classes.map(post => <GymClassItemSmall key={post.id} {...post}/>)}
            </div>
        </div>
    : navigate('/')}
      </>
    )
}

export default Bookings;