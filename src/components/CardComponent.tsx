interface CardProps {
    children: React.ReactNode
    title?: string
}

const CardComponent: React.FC<CardProps> = ({children, title}:CardProps) => {
    return (
        <div className="border-2 bg-white shadow-lg border-gray-200 rounded-md p-4 justify-between">
            <div className="text-2xl w-fit mb-4 border-b-3 border-green-500 text-gray-700 font-bold">{title}</div>
            <div className="overflow min-h-[590px] max-h-[50px]" >
                {children}
            </div>
        </div>
    )
}

export default CardComponent

