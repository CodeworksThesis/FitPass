import React from 'react';


interface buttonProps {
  buttonText:string;
  buttonClick?: () => void;
  isPressed:boolean;
}

export default function BookingFilterButton({buttonText, buttonClick, isPressed}:buttonProps) {
return (
  <button onClick={buttonClick} className={isPressed ? 
    'bg-[#6F87F5] rounded-lg p-4 m-2 text-white shadow shadow-[#808080]' 
    : 'rounded-lg border border-[#808080] p-4 m-2 shadow shadow-[#808080]'}>{buttonText}</button>
)
}