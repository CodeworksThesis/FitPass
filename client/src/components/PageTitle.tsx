import React from 'react'

interface PageTitleProps {
    title: string;
}

export default function PageTitle({title}: PageTitleProps) {
  return (
    <header>
        <h1 className="font-bold italic text-1xl leading-10 text-center py-3 text-focus-in">
          {title}
        </h1>
    </header>
  )
}