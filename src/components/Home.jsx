import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
const Home = () => {
  return (
    <div className="h-[1100px] p-10 bg-[#EDF2F4] flex flex-col justify-around">
        <div className='flex gap-10 items-center justify-center'>
            <RiMoneyDollarCircleLine  size={25} color='#FFC56F'/> 
            <AiOutlineStar size={25} color='#4A3AFF'/> 
            <IoEarthOutline size={25} color='#9BE065'/> 
        </div>
        <div><h1 className='font-text text-7xl font-semibold text-[#1E344F]'> Discover 
            <span className='text-designColor'> Unique </span>  
                 NFT places</h1>
        </div>
        <div className='max-w-[1312px] max-h-[807px] bg-hero bg-cover bg-center'>
            <div></div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Home