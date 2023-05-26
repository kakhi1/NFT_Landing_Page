import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import Union  from "../assets/Union.png"
const Home = () => {
  return (
    <div className="h-[1100px] p-10 bg-[#EDF2F4] flex flex-col justify-around gap-4">
        <div className='flex gap-10 items-center justify-center'>
            <RiMoneyDollarCircleLine  size={25} color='#FFC56F'/> 
            <AiOutlineStar size={25} color='#4A3AFF'/> 
            <IoEarthOutline size={25} color='#9BE065'/> 
        </div>
        <div><h1 className='font-text text-7xl font-semibold text-[#1E344F]'> Discover 
            <span className='text-designColor'> Unique </span>  
                 NFT places</h1>
        </div>
        <div className='max-w-[1312px] h-[1100px]'>
            <div className='w-full h-full flex flex-col justify-between relative'>
                <div className='flex items-start justify-between gap-2 w-full pt-10'>
                    <img src={Union} alt="union" className='absolute' />
                    <div className='w-[237px] h-[85px] rounded-[32px] m-5 bg-[#FFFFFF] flex items-center justify-center gap-3 ml-14'>
                        <div className='w-[50px] h-[50px] rounded-full bg-people bg-center bg-cover'></div>
                        <div className='w-[108px] h-[50px] text-left '>
                            <h1 className='text-[#342E2E] font-text font-semibold text-base'>Anna May</h1>
                            <span className='text-[#342E2E] font-text font-normal text-base'>Donated $100</span>
                        </div>

                    </div>
                    <div className='w-[237px] h-[85px] rounded-[32px] m-5 bg-[#FFFFFF] flex items-center justify-center gap-3 mr-14'>
                    <div className='w-[50px] h-[50px] rounded-full bg-people2 bg-center bg-cover'></div>
                        <div className='w-[108px] h-[50px] text-left '>
                            <h1 className='text-[#342E2E] font-text font-semibold text-base'>Jane Holand</h1>
                            <span className='text-[#342E2E] font-text font-normal text-base'>Donated $500</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pb-10'>
                    <div className='w-[334px] h-[87px] text-left pl-5'>           
                        <span className='text-[#000000] font-normal text-lg '>The Environmental Social Governance (ESG) DAO that rewards contributors for supporting community.</span>
                    </div>
                    <div className='pr-8'>
                         <button className="w-[214px] h-[59px] bg-designColor rounded-md text-white">Mint now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Home