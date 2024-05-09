import Questions from "./Questions"
import Union from "../assets/Union.svg"
import { config } from "../utils/helper"

const Faq = () => {
  return (
    <div className="py-8 font-manrope relative w-[1376px]">
      <div className="bg-[#E8EEE7] rounded-3xl w-full flex">
        <div className="w-1/2">
            <div className="ml-[94px] mt-[80px]">
                <div className="font-grace font-normal text-[32px] text-[#9E9D9D]">What's on your mind</div>
                <div className="font-semibold text-6xl">Ask Questions</div>
            </div>
            <img className="top-[274px] absolute bottom-0 left-0" src={Union}/>
        </div>
        <div className="pr-[74px] pb-[74px] pt-[137px] w-1/2">
            <div className="w-[581px]">
                {
                    config.map((q)=>{
                        return (
                            <div className="mt-9">
                                <Questions key={q.id} {...q}/>
                                {
                                    q.id !== config.length ? (
                                        <div className="border-b border-[#D7D7D7] pt-6"></div>
                                    ) : (<></>)
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
