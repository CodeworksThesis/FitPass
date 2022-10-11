import React from 'react';
import ReserveButton from './ReserveButton';

export default function ReserveBar() {
  return (
    <footer className="flex justify-around border-t-[1px] shadow-[0_6px_10px_0px_rgba(0,0,0,0.2)_inset]">
       <ReserveButton buttonText='BACK' backgroundColor='#fff' textColor='#6F87F5' hoverBackgroundColor="#269FAE" hoverTextColor="#fff"/>
       <ReserveButton buttonText='RESERVE' backgroundColor='#6F87F5' textColor='#FFF' hoverBackgroundColor="#269FAE" hoverTextColor="#fff"/>
    </footer>
  )
}