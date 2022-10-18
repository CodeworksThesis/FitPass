import React from 'react'

interface popupProps {
  setOpenMessage: (arg0: boolean) => void
}

export const Popup = ({setOpenMessage}: popupProps) => {

  return (
    <div className='w-[100vw] h-[100vh] bg-[#c8c8c8] fixed -mt-28'>
      <div className='absolute bg-white drop-shadow-lg py-5 w-[80vw] h-[15vh] left-[10%] mt-[100px]'>
        <section className='aboslute text-center'>
          <h1 className='text-sm mt-5'>Your username has been updated!</h1>
          <button className='mt-5 bg-[#6f87f5] text-white text-sm py-1.5 px-3 rounded'
          onClick={() => setOpenMessage(false)}>close</button>
        </section>
      </div>
    </div>
  )
}
