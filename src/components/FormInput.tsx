import { ChangeEvent } from 'react'

type FormInputPropTypes = {
    type: string;
    placeholder: string;
    className?: string;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    name?: string
    value?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    disabled?:boolean
    inputType?: string;
}

const FormInput = ({type, name, value, onChange, disabled, className, placeholder, inputMode, inputType}: FormInputPropTypes) => {
  return (
    <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        placeholder={placeholder}
        disabled={disabled}
        className={`${className} w-full rounded-md text-textDark font-semibold border-[1.26px] border-border-frame outline-none ${inputType !== "cardNumber" && "md:px-7 px-5 "} md:py-4 py-3 placeholder:text-[#999] placeholder:font-medium font-inter text-sm focus:outline-none transition duration-300 focus:border-primary focus:bg-primaryLight focus:text-primary focus:ring-[0.5px] focus:ring-primary`} 
        />
  )
}

export default FormInput