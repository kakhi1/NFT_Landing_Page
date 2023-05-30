import minticon from "../assets/minticon.svg"
import minticon2 from "../assets/minticon2.png"
import minticon3 from "../assets/minticon3.png"
const Mint = () => {
  return (
    <div className="h-[2100px] flex flex-col justify-center items-center font-text">
        <div className="md:w-[1032px] w-full md:h-[867px] h-[700px]  flex  flex-col gap-8">
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
        {/* sectiov 2  */}
        <div className="w-full h-[1000px] flex relative flex-col items-center justify-end gap-4">
            <div className="w-[80%]  flex justify-start"><button className="w-[103px] h-[32px] bg-[#EFE4FC] rounded-lg font-semibold text-sm">FEATURES</button></div>
            <div className="w-[80%]  md:h-[753px] ">
                <div className="md:w-[710px] w-full h-[276px] flex flex-col items-start justify-between  ">
                    <div className="h-[60%] flex">
                        <div className="w-[11px] h-full rounded-lg bg-[#61A0FF]"></div>
                        <h1 className="font-semibold md:text-7xl text-5xl text-left m-3">We are platform for everyone</h1>
                    </div>
                    <button className="w-[177px] h-[52px] bg-designColor text-white 
                    text-xl font-extrabold">Mint purpose</button>
                </div>
                <div className="md:w-[70%] w-full md:h-[560px] h-[700px]  absolute md:-bottom-20 -bottom-100 md:right-[11%] hidden md:flex">
                    <div className="w-full h-full">
                        <div className="w-full md:h-[70%]  flex md:flex-row justify-around relative">
                            <div className="md:absolute z-30 left-2  top-4">
                             <div className="relative flex">
                              <div className="w-[168px] h-[168px] rounded-full bg-mintround1 bg-cover bg-center "></div>
                              <div className="w-[251px] h-[88px] shadow-black drop-shadow-2xl flex justify-center items-center bg-white rounded-[32px] absolute left-[80%] top-[5%]">
                                <span className=" text-left ml-10 font-medium text-lg "> Your exclusive member keycard.</span>
                                </div> 
                             </div>
                            </div>
                           <div className="md:absolute  bottom-[15%] left-[55%]">
                            <div className="relative flex">
                              <div className="w-[168px] h-[168px] rounded-full bg-mintround2 bg-cover bg-center "></div>
                              <div className="w-[251px] h-[88px] shadow-black drop-shadow-2xl flex justify-center items-center bg-white rounded-[32px] absolute left-[78%] top-[28%] ">
                                <span className=" text-left ml-10 font-medium text-lg "> The exactly Token Economics is TBA.</span>
                                </div> 
                             </div>
                           </div> 
                           <div className="md:absolute relative -right-10  md:-top-16 top-32">
                             <div className="relative flex">
                              <div className="w-[168px] h-[168px] rounded-full bg-mintround3 bg-cover bg-center "></div>
                              <div className="w-[251px] h-[88px]shadow-black drop-shadow-2xl  flex justify-center items-center bg-white rounded-[32px] absolute right-[75%] top-[5%] ">
                                <span className=" text-left ml-10 font-medium text-lg "> You don’t have to be a computer geek to buy NFTs.</span>
                                </div> 
                             </div>
                            </div>    
                        </div>
                        <div className="w-[50%] flex justify-around">
                          <div className="w-[79px] h-[79px] rounded-full mt-10 bg-gradient-to-l from-[#FFC56F] to-[#FF7051]"></div>
                          <div className="flex relative">
                              <div className="w-[131px] h-[131px] rounded-full bg-mintround4 bg-cover bg-center "></div>
                              <div className="w-[251px] h-[88px] shadow-black drop-shadow-2xl flex justify-center items-center bg-white rounded-[32px] absolute left-[79%] top-[18%] ">
                                <span className=" text-left ml-10 font-medium text-lg ">50% Discount on trading fees for keycard holders.</span>
                                </div> 
                             </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mint