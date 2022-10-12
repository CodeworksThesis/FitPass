import React,{useState} from 'react'

interface ReserveButtonProps {
    buttonText: string;
    backgroundColor: string;
    textColor: string;
    hoverBackgroundColor: string;
    hoverTextColor:string;
    nav: () => void;
}

export default function ReserveButton({buttonText, backgroundColor, textColor, hoverBackgroundColor, hoverTextColor, nav}: ReserveButtonProps) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <button 
            className="rounded-xl w-32 h-16 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.4)] py-auto my-4 cursor-pointer hover:scale-110" 
            style={{ 
                backgroundColor: isHover ? hoverBackgroundColor : backgroundColor, 
                color: isHover? hoverTextColor : textColor,
                fontWeight: isHover? 'bold': 'normal'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={nav}
        >
            <p className="text-lg">{buttonText}</p> 
        </button>
    )
}