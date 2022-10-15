<<<<<<< HEAD
import React from "react"

interface buttonSearchProps {
    buttonText: string
    buttonClick?: () => void
    isPressed: boolean
}

export default function ButtonSearchCategories({
    buttonText,
    buttonClick,
    isPressed,
}: buttonSearchProps) {
    return (
        <button
            onClick={buttonClick}
            className={
                isPressed
                    ? "bg-[#6F87F5] rounded-full h-7 text-white font-light text-center text-sm mt-3 mr-2 pl-2 pr-2 border border-[#6F87F5]"
                    : "rounded-full h-7 text-black font-light text-center text-sm border border-black mt-3 mr-2 pl-2 pr-2"
            }
        >
            {buttonText}
        </button>
    )
}
=======
import React from 'react';

interface buttonSearchProps {
  buttonText: string;
  buttonClick?: () => void;
  isPressed: boolean;
}

export default function ButtonSearchCategories({ buttonText, buttonClick, isPressed }: buttonSearchProps) {
  return (
    <button onClick={buttonClick} className={isPressed ? "bg-[#6F87F5] rounded-full h-7 text-white font-light text-center text-sm mt-3 mr-2 pl-2 pr-2 border border-[#6F87F5]" : "rounded-full h-7 text-black font-light text-center text-sm border border-black mt-3 mr-2 pl-2 pr-2"}>{buttonText}</button>
  )
}
>>>>>>> development
