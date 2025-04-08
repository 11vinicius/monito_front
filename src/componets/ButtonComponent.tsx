

interface ButtonProps {
    title: string,
    onClick: () => void
}

const ButtonComponent:React.FC<ButtonProps> = ({ title, onClick }:ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-4 rounded">
            {title}
        </button>
    )
}


export default ButtonComponent