import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
const Home = () => {
  return (
    <div className="md:h-[1100px] h-[800px] sm:p-10 bg-[#EDF2F4] flex flex-col justify-around  gap-4 border-x-2  border-dashed">
        <div className='flex gap-10 items-center justify-center'>
            <RiMoneyDollarCircleLine  size={25} color='#FFC56F'/> 
            <AiOutlineStar size={25} color='#4A3AFF'/> 
            <IoEarthOutline size={25} color='#9BE065'/> 
        </div>
        <div><h1 className='font-text md:text-7xl text-3xl font-semibold text-[#1E344F]'> Discover 
            <span className='text-designColor'> Unique </span>  
                 NFT places</h1>
        </div>
        <div className="max-w-[1312px] md:h-[802px] h-[520px] pl-8 ">
        <div className="w-full h-full bg-hero bg-cover bg-center flex  flex-col justify-between relative">
             <div className='md:w-[100px] w-[50px] md:h-[100px]  h-[50px] rounded-full right-[55%] absolute z-30  -top-8 bg-gradient-to-l from-[#bdbcff] to-[#0f0cd5]'></div>
             <div className='md:w-[39px] w-[20px] md:h-[39px] h-[20px] rounded-full right-[18%] absolute z-30  bottom-[15%] bg-gradient-to-l from-[#DECAFF] to-[#691EE2]'></div>
            <div className='w-full h-[50%] flex justify-between items-start'>
            <div className='lg:w-[237px] w-[150xp] lg:h-[85px] h-[50px] rounded-[32px] lg:m-5 m-0 bg-[#FFFFFF] flex items-center justify-center gap-3 lg:ml-14 z-30'>
                        <div className='md:w-[50px] w-[30px] md:h-[50px] h-[30px] rounded-full bg-people bg-center bg-cover'></div>
                        <div className='w-[108px] md:h-[50px] h-[40px] text-left '>
                            <h1 className='text-[#342E2E] font-text font-semibold md:text-base text-xs'>Anna May</h1>
                            <span className='text-[#342E2E] font-text font-normal md:text-base text-xs'>Donated $100</span>
                        </div>

                    </div>
                    <div className='lg:w-[237px] w-[150px] lg:h-[85px] h-[50px] rounded-[32px] lg:m-5  bg-[#FFFFFF] flex items-center justify-center gap-3 lg:mr-8 z-30'>
                    <div className='md:w-[50px] w-[30px] md:h-[50px] h-[30px] rounded-full bg-people2 bg-center bg-cover'></div>
                        <div className='md:w-[108px] w-[80xp] md:h-[50px] h-[40px] text-left '>
                            <h1 className='text-[#342E2E] font-text font-semibold md:text-base text-xs'>Jane Holand</h1>
                            <span className='text-[#342E2E] font-text font-normal md:text-base text-xs'>Donated $500</span>
                        </div>
                    </div>
            </div>
            <div className='w-full h-[50%] flex justify-between items-end'>
            <div className='flex justify-between w-full  '>
                    <div className='md:w-[334px] w-[150px] md:h-[87px] h-[50px] text-left z-30'>           
                        <span className='text-[#000000] font-normal md:text-lg text-xs
                         '>The Environmental Social Governance (ESG) DAO that rewards contributors for supporting community.</span>
                    </div>
                    <div className='md:pr-8 pr-0 z-30'>
                         <button className="md:w-[214px] w-[120px] md:h-[59px] h-[40px] bg-designColor rounded-md
                          text-white">Mint now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home