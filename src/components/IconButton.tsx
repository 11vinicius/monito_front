
type Color = 'blue' | 'red' | 'green'

interface IconButtonComponentProps {     
    icon: React.ReactNode,
    bgColor?: Color,
    onclick: () => void
}

const IconButtonComponent = ({ icon, bgColor, onclick }:IconButtonComponentProps) => {
    const colorMap: Record<Color, string> = {
        blue: 'bg-blue-500 hover:bg-blue-700',
        red: 'bg-red-500 hover:bg-red-700',
        green: 'bg-green-500 hover:bg-green-700',
      }

    return (
        <div className={`${colorMap[bgColor as keyof typeof colorMap]} text-white m-1 rounded-md w-10 h-10 flex items-center justify-center`} onClick={onclick}>
            {icon}
        </div>
    )
}


export default IconButtonComponent
