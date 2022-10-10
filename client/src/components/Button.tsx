import React from 'react'

interface buttonProps {
    buttonText:string;
}

export default function Button({buttonText}:buttonProps) {
  return (
    <button className="rounded-md bg-[green]">{buttonText}</button>
  )
}