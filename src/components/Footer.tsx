import Copyright from "../assets/Copyright.svg"

const Footer = () => {
  return (
    <div className="h-36 py-[60px] px-12 rounded-3xl bg-[#F5F5F5] font-manrope flex justify-between items-center">
      <div className="flex gap-x-[10px] p-[2px]">
        <div>
            <img src={Copyright} alt="copyright" />
        </div>
        <div>
            Talup 2023. All rights reserved
        </div>
      </div>
      <div className="text-">
        <span className="underline">
            Terms & Conditions
        </span>
        <span className="underline ml-10">
            Privacy Policy
        </span>
      </div>
    </div>
  )
}

export default Footer
