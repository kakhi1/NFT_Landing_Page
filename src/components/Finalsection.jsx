

const Finalsection = () => {
  return (
    <div className="font-text">
        {/* ---------------1------------------ */}
        <div className="w-full h-[1161px] border-black border-4 border-dashed flex items-center justify-center">
            <div className="w-[80%] ml-28 h-[892px] bg-finalsecbg bg-cover relative rounded-[60px] flex flex-col items-end ">
                <div className="w-[504px] h-[250px] z-30 absolute rounded-t-[60px] -left-10 bg-white top-[10%] flex flex-col ">
                    <div className="w-full h-[10% ] flex items-start mb-5">
                        <span className="w-[59px] h-[32px] rounded-lg bg-[#EFE4FC] flex  justify-center items-center">NFT</span>
                    </div>
                    <div className="w-full h-[38%] flex justify-start items-end">
                        <div className="w-[8px] h-[80%] bg-[#6052FF] rounded-t-lg"></div>
                        <h1 className="font-semibold text-7xl ml-5">PFP NFT </h1>
                        <div className="w-[39px]  h-[39px] rounded-full  bg-gradient-to-l from-[#DECAFF] to-[#691EE2] mr-5 mb-10"></div>
                    </div>
                    <div className="w-full h-[38%] flex justify-start items-start">
                      <div className="w-[8px] h-[60%] bg-[#6052FF] rounded-b-lg"></div>
                      <h1 className="font-semibold text-7xl text-[#6052FF] ml-5">Marketplace</h1>
                    </div>

                </div>
                <div className="w-[85%] h-[70%] bg-red-400 absolute -bottom-16 -left-[10%] z-30"></div>
                <div className="w-[45%] h-[25%] rounded-[60px] bg-white mr-[10%] flex flex-col  justify-center items-start">                    
                    <span className="font-medium text-lg text-left ml-7 ">We regulated NFT marketplace and payable in Cryptocurrencies and FIAT. You don’t have to be a computer geek to buy NFTs.</span>
                    <button className="rounded-md w-[182px] h-[52px] ml-7 mt-2 text-white bg-[#6052FF] ">
                    Discover now
            </button>
               </div>
               <div className="w-[79px] h-[79px] rounded-full mt-[30%] mr-[15%] bg-gradient-to-l from-[#FFC56F] to-[#FF7051]"></div>
            </div>
        </div>

    </div>
  )
}

export default Finalsection