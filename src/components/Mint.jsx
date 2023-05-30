import minticon from "../assets/minticon.svg"
import minticon2 from "../assets/minticon2.png"
import minticon3 from "../assets/minticon3.png"
const Mint = () => {
  return (
    <div className="h-[1100px] flex justify-center items-center font-text">
        <div className="w-[1032px] h-[867px] flex  flex-col gap-8">
            <div className="flex flex-row ">
             <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-l mt-2 from-[#EECAFF] to-[#691EE2] "></div>
             <div className="w-[145px] h-[45px] bg-[#E7EEFA] ml-[40%] mb- flex justify-center items-center rounded-lg font-semibold text-sm">
                <span>MINT</span> </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="font-semibold text-7xl text-[#1E344F]">Mint, purchase and bid the world s premier NFTs.</h1>
              <span className="font-medium text-base">Purpose for Profit rewards contributors with short-term liquidity and bonuses for contributing towards  long-term impact investments. Mint PURPOSE, Yield PROFIT, Support PROJECTS</span>
            </div>
            <div className="flex justify-center items-center gap-10 relative">
                <button className="w-[180px] h-[52px] bg-designColor text-white 
                 font-semibold text-xl rounded-md">Mint purpose</button>
                 <button className="w-[162px] h-[52px] text-designColor bg-white 
                 font-semibold text-xl rounded-md border-2 border-designColor z-30">Learn more</button>
                 <div className="w-[80px] h-[80px] rounded-full right-[12%]  bg-gradient-to-l from-[#FFC56F] to-[#FF7051] z-10 absolute"></div>
            </div>
            <div className="h-[407px] flex  md:flex-row flex-col items-center gap-5">
                <div className="md:w-[49%] w-full ">
                    <div className="h-[187px] flex flex-col items-start justify-center bg-[#FFF2E2] rounded-md gap-4">
                        <span className=" ml-[20%] font-semibold text-5xl">$105.018 USD</span>
                        <span className=" ml-[20%] font-medium text-2xl w-full flex justify-start gap-2 " ><img src={minticon} alt="icon" /> Average price</span>

                    </div>
                </div>
                <div className="md:w-[49%] w-full  ">
                    <div className="h-[187px] flex flex-col items-start justify-center bg-[#FFFFFF] rounded-md gap-4 mb-4">
                        <span className=" ml-[10%] font-semibold text-5xl">$1894,803,003 USD</span>
                        <span className=" ml-[10%] font-medium text-2xl w-full flex justify-start gap-2 " ><img src={minticon2} alt="icon" /> Total Profit</span>

                    </div>
                    <div className="h-[187px] flex flex-col items-start justify-center bg-designColor text-white rounded-md gap-4 ">
                        <span className=" ml-[10%] font-semibold text-5xl">$555,869,950 USD</span>
                        <span className=" ml-[10%] font-medium text-2xl w-full flex justify-start gap-2 " ><img src={minticon3} alt="icon" /> Total Supply</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mint