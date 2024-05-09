import Person from "../assets/Person.svg"
import Rocket from "../assets/Rocket.svg"
import Arrow from "../assets/Arrow.svg"
import Button from "./Button"

const Stories = () => {
  return (
    <div className="py-20 w-[1376px]">
      <div className="pl-[62px] pr-[145px]">
        <div className="leading-tight flex items-center flex-col">
            <h1 className="text-center font-grace text-[#2DA950] text-4xl">Success stories</h1>
            <h2 className="text-center mt-4 font-semibold text-[56px]">Every success journey</h2>
            <h2 className="text-center font-semibold text-[56px]">we've encountered.</h2>
        </div>
        <div className="flex">
            <div className="w-[730px] h-[596px] mt-28 relative">
                <img className="ml-32 rounded-lg z-0" src={Person} alt="person"/>
                <div className="p-7 space-y-[10px] bg-white rounded-3xl z-10 absolute top-[114px] shadow-lg">
                    <div className="text-[#1C1C1C] font-medium text-[64px]">40%</div>
                    <p className="font-medium text-lg leading-tight text-[#828282] w-[207px]">Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className="px-8 py-[34px] space-y-[10px] text-white bg-[#002E18] rounded-3xl z-10 absolute bottom-0 right-0 shadow-lg">
                    <div className="font-medium text-[64px] ">$0.5 <span className="font-medium text-xl text-[#A6A3A0]">MILLION</span></div>
                    <p className="font-medium text-lg text-[#A6A3A0] leading-tight  w-[207px]">Reduced client expenses by saving on hiring and employee costs.</p>
                </div>
                <div className="bg-white absolute left-[67px] bottom-[95px] rounded-full p-4 flex gap-x-[14px] shadow-lg">
                    <div>
                        <img src={Rocket} alt="rocket"/>
                    </div>
                    <div>
                        <div className="font-bold text-2xl">10 DAYS</div>
                        <div className="text-[#828282] font-medium text-base" >Staff Deployment</div>
                    </div>
                </div>
            </div>
            <div className="h-[596px] pt-[71px] mt-28 pl-[107px]" >
                <div className="w-[398px] h-[192px] text-[40px] font-semibold leading-tight">
                    Enhance fortune 50 company’s insights teams research capabilities
                </div>
                <div className="flex gap-x-3 mt-14">
                    <div className="w-[15px] h-[15px] bg-[#2DA950] p-2 rounded-full"></div>
                    <div className="w-[15px] h-[15px] bg-[#E4E3E3] hover:bg-[#CAD0CB] p-2 rounded-full"></div>
                    <div className="w-[15px] h-[15px] bg-[#E4E3E3] p-2 rounded-full"></div>
                </div>
                <Button className="mt-[130px] py-8 w-[245px] font-semibold text-xl flex justify-center items-center gap-x-4">
                    <div>Explore More</div>
                    <div><img src={Arrow} alt="arrow" /></div>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
