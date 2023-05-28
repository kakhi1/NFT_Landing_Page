

const Artsec = () => {
  return (
    <div className="h-[974px] bg-[#EDF2F4] flex flex-col font-text relative">
       {/* logo */}
        <div className="w-[57px] h-[57px] absolute right-[20%] top-[20%] hidden md:flex" >
             <div className="w-[57px] h-[57px] bg-black relative overflow-hidden ">
                <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute top-7 left-7" ></div>
                <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute -top-7 -left-7" ></div>
                <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute top-7 right-7" ></div>
                <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute -top-7 -right-7" ></div>
              </div>
        </div>
        <div className="h-[40%] flex md:flex-row flex-col  md:items-end items-center gap-3 md:gap-0">
             <div className="w-1/3">
              <div className='lg:w-[237px] w-[150xp] lg:h-[85px] h-[50px] rounded-[32px] lg:m-5 m-0 bg-[#FFFFFF] flex items-center justify-center gap-3 lg:ml-14 z-30'>
                        <div className='md:w-[50px] w-[30px] md:h-[50px] h-[30px] rounded-full bg-people bg-center bg-cover'></div>
                        <div className='w-[108px] md:h-[50px] h-[40px] text-left '>
                            <h1 className='text-[#342E2E] font-text font-semibold md:text-base text-xs'>Anna May</h1>
                            <span className='text-[#342E2E] font-text font-normal md:text-base text-xs'>Donated $100</span>
                        </div>

               </div>
             </div>            
            <div className="md:w-[750px] w-full h-full md:h-[80%] flex md:items-end items-center">
                <h1 className="md:text-7xl text-5xl font-semibold text-[#1E344F] ">Lets make 
                 <span className="text-[#FF7051]"> your art </span>  
                 into digital assets</h1>
            </div>
            <div className="w-1/3 flex justify justify-center  relative z-40">
             
              <div className="w-[58px] h-[58px] rounded-full bg-people2 bg-cover bg-center"></div>

            </div>
        </div>
        <div className="flex w-full h-[60%] items-center justify-between gap-1 mx-5">
          <div className="w-[25%] h-[70%] bg-red-400"></div>
          <div className="w-[20%] h-[70%] bg-red-400"></div>
          <div className="w-[20%] h-[70%] bg-red-400"></div>
        </div>
    </div>
  )
}

export default Artsec