import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { validate } from "../utils/helper"
import ErrorMessage from "../components/ErrorMessage"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.svg"

const Signin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        setError("");
        const message = validate(email);
        if(message)
        return setError(message);
        navigate("/success")
    }

  return (
    <div className="font-manrope">
        <nav className="w-full flex justify-between py-8 px-[52px]">
            <div className="">
                <img src={Logo} alt="Logo"  />
            </div>
            <button className="rounded-full border border-[#CACACA] px-5 py-2 text-[32px]" onClick={()=>navigate("/")}>X</button>
        </nav>
        <div className="w-[588px] m-auto mt-3">
            <div className="w-full leading-tight">
                <h1 className="text-center font-grace text-[#2DA950] text-4xl pb-4">Registration Form</h1>
                <div className="font-semibold text-[56px]">
                    <h2 className="text-center">Start your success</h2>
                    <h2 className="text-center">Journey here!</h2>
                </div>
            </div>
            <div className="pt-[62px] w-full font-manrope flex justify-center">
                <form className="w-[417px] mb-28" onSubmit={(e)=> e.preventDefault()}>
                    <div className="flex gap-y-6 flex-col">
                        <Input placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                        <div>
                        <Input placeholder="Enter your email" className={`${error ? "outline-1 outline-[#537FF1] bg-[#F5F8FF]" : ""}`} onChange={(e)=>setEmail(e.target.value)}/>
                        {
                            error && (
                                <ErrorMessage error={error}/>
                            )
                        }
                        </div>
                    </div>
                    {
                        name.length == 0 || email.length == 0 ? (
                            <Button className="mt-[47px] px-[50px] py-[26px] font-semibold text-lg disabled cursor-not-allowed" bgColor="bg-[#C9C9C9]">Submit</Button>
                        ):
                        (
                            <Button className="mt-[47px] px-[50px] py-[26px] font-semibold text-lg" onClick={handleSubmit}>Submit</Button>
                        )
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signin
