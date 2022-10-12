import React from 'react';
import ReserveButton from './ReserveButton';
import { useNavigate } from 'react-router-dom';

export default function ReserveBar() {
    const navigate = useNavigate()

  return (
    <footer className="flex justify-around py-3 border-t-[1px] shadow-[0_8px_10px_-7px_rgba(0,0,0,0.4)_inset]">
       <ReserveButton buttonText='BACK' backgroundColor='#fff' textColor='#000' hoverBackgroundColor="#269FAE" hoverTextColor="#fff" nav={() => navigate('/')}/>
       <ReserveButton buttonText='RESERVE' backgroundColor='#6F87F5' textColor='#FFF' hoverBackgroundColor="#269FAE" hoverTextColor="#fff" nav={() => navigate('/Payment')}/>
    </footer>
  )
}