import React from 'react'

interface PageTitleProps {
    title: string;
}

export default function PageTitle({title}: PageTitleProps) {
  return (
    <div>
        <h1 className="font-bold italic text-2xl leading-10 text-center py-3">{title}</h1>
    </div>
  )
}