import React, {FC} from 'react'


type ButtonProps = {
    children: React.ReactNode
    className: string
    disabled?: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button:FC<ButtonProps> = ({className, children, onClick, disabled, type, onMouseEnter, onMouseLeave}) => {
  return (
    <button type={type} disabled={disabled} className={`${className} flex items-center justify-center rounded-lg hover:bg-opacity-90 md:px-7 px-5 md:py-4 py-3 `} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;
