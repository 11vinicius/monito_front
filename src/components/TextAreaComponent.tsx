import { useState } from "react"

interface TextAreaProps{
    onchangeText: (text: string) => void
    label?: string| null,
    value?: string
    rows?: number
    error?: string | null
}

const TextAreaComponent: React.FC<TextAreaProps> = ({label, rows, onchangeText, value, error }: TextAreaProps) => {
    const [focus, setFocus] = useState<boolean>(false)

    return(
        <div className="flex  w-full mb-4 flex-col">
            { label && <label htmlFor={label} className={`${focus ? 'text-green-500' : 'text-gray-700'}`}>{label}</label> }
            <textarea id={label || ''}
                value={value} 
                rows={rows || 10}
                onChange={e => onchangeText(e.target.value)} 
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} 
                className={`outline-none resize-none rounded-md p-2 border-2 
                        ${focus ? 'border-green-500' : 'border-gray-400'} 
                        ${error ? 'border-red-500' : ''}
                    `} 
             />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}

export default TextAreaComponent