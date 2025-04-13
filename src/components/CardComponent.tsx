interface CardProps {
    children: React.ReactNode
    title?: string
}

const CardComponent: React.FC<CardProps> = ({children, title}:CardProps) => {
    return (
        <div className="border-2 w-full bg-white shadow-lg border-gray-200 rounded-md p-4 justify-between">
            {title && <div className="text-2xl w-fit mb-4 border-b-3 border-green-700 text-gray-700 font-bold">{title}</div>}
            <div className="overflow min-h-[650px] " >
                {children}
            </div>
        </div>
    )
}

export default CardComponent

