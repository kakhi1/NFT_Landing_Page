

const Finalsection = () => {
  return (
    <div className="font-text">
        {/* ---------------1------------------ */}
        <div className="w-full h-[1161px] border-black border-4 border-dashed flex items-center justify-center">
            <div className="md:w-[75%] w-full md:ml-28 h-[892px] bg-finalsecbg bg-cover relative rounded-[60px] flex flex-col items-end ">
                <div className="md:w-[504px] w-full h-[250px] z-30 md:absolute rounded-t-[60px] -left-[9%] bg-white top-[10%] flex flex-col ">
                    <div className="w-full h-[10% ] flex items-start mb-5">
                        <span className="w-[59px] h-[32px] rounded-lg bg-[#EFE4FC] flex  justify-center items-center">NFT</span>
                    </div>
                    <div className="w-full h-[38%] flex justify-start items-end">
                        <div className="w-[8px] h-[80%] bg-[#6052FF] rounded-t-lg"></div>
                        <h1 className="font-semibold md:text-7xl text-3xl ml-5">PFP NFT </h1>
                        <div className="w-[39px]  h-[39px] rounded-full  bg-gradient-to-l from-[#DECAFF] to-[#691EE2] ml-20 mb-10"></div>
                    </div>
                    <div className="w-full h-[38%] flex justify-start items-start">
                      <div className="w-[8px] h-[60%] bg-[#6052FF] rounded-b-lg"></div>
                      <h1 className="font-semibold md:text-7xl text-3xl text-[#6052FF] ml-5">Marketplace</h1>
                    </div>

                </div>
                <div className="md:w-[85%] w-full md:h-[70%] h-[50%] bg-finalsecbg2 bg-cover bg-top md:absolute -bottom-16 -left-[10%] z-30"></div>
                <div className="md:w-[45%] w-full h-[25%] rounded-[60px] bg-white md:mr-[10%] md:top-0 bottom-0 flex flex-col z-30 justify-center items-start">                    
                    <span className="font-medium md:text-lg text-sm text-left ml-7 ">We regulated NFT marketplace and payable in Cryptocurrencies and FIAT. You don’t have to be a computer geek to buy NFTs.</span>
                    <button className="rounded-md w-[182px] h-[52px] ml-7 mt-2 text-white bg-[#6052FF] ">
                    Discover now
            </button>
               </div>
               <div className="w-[79px] h-[79px] rounded-full mt-[30%] mr-[15%] bg-gradient-to-l from-[#FFC56F] to-[#FF7051]"></div>
            </div>
        </div>
        {/* ---------------2------------------ */}
        <div className="w-full h-[1839px] flex">
          <div className="w-[75%] h-[50%]"></div>
          <div className="w-[25%] h-[50%] flex flex-col m-16 gap-10">
            <h1 className="w-[72px] h-[35px] text-3xl font-semibold "> Syne</h1>
            <div className="w-full">
              <div className="w-[305px] h-[325px] rounded-[28px] bg-black">
              </div>
              <div className="w-[244px] h-[320px] bg-red-400 "></div>
            </div>

          </div>

        </div>

    </div>
  )
}

export default Finalsection