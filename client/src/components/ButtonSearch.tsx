import React from "react"

interface buttonSearchProps {
    buttonText: string
    buttonClick?: () => void
    isPressed: boolean
}

export default function ButtonSearch({
    buttonText,
    buttonClick,
    isPressed,
}: buttonSearchProps) {
    return (
        <button
            onClick={buttonClick}
            className={
                isPressed
                    ? " bg-[#6F87F5] rounded-full w-24 h-7 text-white font-light text-center text-sm mt-3 mr-2"
                    : "rounded-full w-24 h-7 text-black font-light text-center text-sm border border-black mt-3 mr-2"
            }
        >
            {buttonText}
        </button>
    )
}
