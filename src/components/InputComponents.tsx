import { useState } from "react"

interface InputProps{
    placeholder: string
    onchangeText: (text: string) => void
    label?: string| null,
    value?: string
    error?: string | null
}

const InputComponent: React.FC<InputProps> = ({placeholder,label, onchangeText, value, error }: InputProps) => {
    const [focus, setFocus] = useState<boolean>(false)

    return(
        <div className="flex w-full mb-4 flex-col">
            { label && <label htmlFor={label} className={` ${focus ? 'text-green-500' : ''}`}>{label}</label> }
            <input id={label || ''} value={value} 
                placeholder={placeholder} 
                onChange={e => onchangeText(e.target.value)} 
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} 
                className={`outline-none rounded-md p-2 border-2 
                        ${focus ? 'border-green-500' : ''} 
                        ${error ? 'border-red-500' : ''}
                    `} 
                    type="text"
             />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}

export default InputComponent