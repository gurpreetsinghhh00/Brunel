import { useNavigate } from "react-router-dom"
import SuccessTick from "../assets/SuccessTick.svg"
import { useEffect } from "react"
import Logo  from "../assets/Logo.svg"

const Success = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate("/");
        }, 5000)
        
        return ()=>{
            clearTimeout(timer);
        }
    }, []);

  return (
    <div>
        <nav className="w-full flex justify-between py-8 px-[52px]">
            <div className="">
                <img src={Logo} alt="Logo"  />
            </div>
        </nav>
        <div className="w-full min-h-screen flex justify-center items-center font-manrope leading-tight">
            <div className="w-[718px]">
                <div className="flex justify-center">
                    <img src={SuccessTick} alt="success" />
                </div>
                <h1 className="mt-10 text-center font-grace text-[#2DA950] text-4xl">Success Submitted</h1>
                <h2 className="text-center mt-4 font-semibold text-[56px]">Congratulations</h2>
                <p className="text-center text-[#727272] mt-5 font-medium text-[27px]">
                    Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                </p>
            </div>
        </div>
        <div className="m-auto mt-12 w-[718px] mb-[42px] text-center font-normal text-[26px] text-[#727272]">Redirecting you to Homepage in 
            <span className="text-black font-semibold"> 5 Seconds</span>
        </div>
    </div>
  )
}

export default Success