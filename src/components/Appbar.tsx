import Button from "./Button"
import Logo  from "../assets/Logo.svg"
import { useNavigate } from "react-router-dom"

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <nav className="rounded-full border flex items-center justify-between py-[17px] px-[21px]">
        <div className="ml-8 cursor-pointer">
            <img src={Logo} alt="Logo" onClick={()=>navigate("/")} />
        </div>
        <div className="flex flex-row gap-x-4 font-manrope">
            <Button bgColor="bg-white" textColor="text-black" className="border py-6 px-10 hover:bg-[#F1F1F1]" onClick={()=>{
              navigate("/signin")
            }}>Get Projects</Button>
            <Button bgColor="bg-black" textColor="text-white" className="border py-6 px-10 hover:bg-[#4E4E4E]">Onboard Talent</Button>
        </div>
      </nav>
    </div>
  )
}

export default Appbar
