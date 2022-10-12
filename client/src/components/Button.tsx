import React from 'react';


interface buttonProps {
  buttonText:string;
  buttonClick?: () => void
}

export default function Button({buttonText, buttonClick}:buttonProps) {
return (
  <button onClick={buttonClick} className="rounded-lg bg-[#6F87F5] w-4/5 h-14 text-white font-bold text-left pl-5 text-lg max-w-md">{buttonText}</button>
)
}