import React from 'react';

interface buttonSearchProps {
  buttonText: string;
}

export default function ButtonSearch({ buttonText }: buttonSearchProps) {
  return (
    <button className="rounded-full w-24 h-7 text-black font-light text-center text-sm border border-black mt-3 mr-2">{buttonText}</button>
  )
}


