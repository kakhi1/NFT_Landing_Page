import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import Union  from "../assets/Union.png"
const Home = () => {
  return (
    <div className="md:h-[1100px] h-[800px] sm:p-10 bg-[#EDF2F4] flex flex-col justify-around  gap-4">
        <div className='flex gap-10 items-center justify-center'>
            <RiMoneyDollarCircleLine  size={25} color='#FFC56F'/> 
            <AiOutlineStar size={25} color='#4A3AFF'/> 
            <IoEarthOutline size={25} color='#9BE065'/> 
        </div>
        <div><h1 className='font-text text-7xl font-semibold text-[#1E344F]'> Discover 
            <span className='text-designColor'> Unique </span>  
                 NFT places</h1>
        </div>
        <div className='max-w-[1312px] lg:h-[1000px] md:h-[668px] h-[450px] flex flex-col items-center relative lg:pl-6'>
                <div className='flex items-start justify-between gap-2 w-full lg:pt-10 pt-0'>
                    <div className='w-[100px] h-[100px] rounded-full right-[55%] absolute z-30  -top-0 bg-gradient-to-l from-[#bdbcff] to-[#0f0cd5]'></div>
                    <img src={Union} alt="union" className='absolute z-10 ' />
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
                <div className='flex justify-between md:pb-10  w-full sm:mt-[45%] mt-[44%] '>
                    <div className='md:w-[334px] w-[150px] md:h-[87px] h-[30px] text-left md:pl-5 pl-0 z-30'>           
                        <span className='text-[#000000] font-normal md:text-lg text-xs
                         '>The Environmental Social Governance (ESG) DAO that rewards contributors for supporting community.</span>
                    </div>
                    <div className='md:pr-8 pr-0 z-30'>
                         <button className="md:w-[214px] w-[120px] md:h-[59px] h-[40px] bg-designColor rounded-md
                          text-white">Mint now</button>
                    </div>
                </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Home