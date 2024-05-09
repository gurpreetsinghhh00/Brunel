import { ChangeEvent } from "react"

interface InputType{
    placeholder : string,
    onChange : (e : ChangeEvent<HTMLInputElement>) => void,
    className? : string,
}

const Input = ({placeholder, onChange, className = ""} : InputType) => {
  return (
    <input className={`px-9 py-6 bg-[#EFEFEF] w-full rounded-full font-medium text-xl outline-none ${className}`} type="text" onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input
