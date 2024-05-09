import { useState } from "react"

const Questions = ({question, answer} : {question : string, answer : string}) => {
    const [show, setShow] = useState(false);
  return (
    <div className="font-manrope font-semibold text-xl">
      <div className="flex w-full justify-between font-semibold">
        <div>{question}</div>
        <button className="self-start" onClick={()=> {setShow(!show)}}>{show ? "-" : "+"}</button>
      </div>
      <div className={`text-[#617275] text-[15px] font-normal pt-6 ${show ? "block" : "hidden"}`}>
        {answer}
      </div>
    </div>
  )
}

export default Questions
