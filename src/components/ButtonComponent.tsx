import React from "react"


interface ButtonProps {
    title: string,
    icon?: React.ReactNode | null,
    onClick: () => void
}

const ButtonComponent:React.FC<ButtonProps> = ({ title, onClick, icon }:ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-green-500 flex justify-center items-center gap-2 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded">
            {title}
            { icon }
        </button>
    )
}


export default ButtonComponent