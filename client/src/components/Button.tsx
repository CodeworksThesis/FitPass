import React from 'react';


interface buttonProps {
    buttonText:string;
}

export default function Button({buttonText}:buttonProps) {
  return (
    <button className="rounded-lg bg-[#6F87F5] w-4/5 h-14 text-white font-bold text-left pl-5 text-lg max-w-md">{buttonText}</button>
  )
}