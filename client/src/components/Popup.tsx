import React from 'react'

interface popupProps {
  setOpenMessage: (arg0: boolean) => void
  popupText: string
}

export const Popup = ({ setOpenMessage, popupText }: popupProps) => {

  return (
    <div className='bg-[#c8c8c8]'>
      <div className='absolute bg-white drop-shadow-lg py-5 w-[80vw] h-[15vh] left-[10%] mt-[100px]'>
        <section className='aboslute text-center'>
          <h1 className='text-sm mt-5'>{popupText}</h1>
          <button className='mt-5 bg-[#6f87f5] text-white text-sm py-1.5 px-3 rounded'
            onClick={() => setOpenMessage(false)}>close</button>
        </section>
      </div>
    </div>
  )
}
