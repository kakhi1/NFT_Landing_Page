
import logo from"../assets/logo.png"
const Header = () => {
  return (
    <div className="font-text bg-white flex justify-between w-full h-[71px] lg:px-[70px] px-3 items-center border-x-2 border-t-2  border-dashed" >
       <div className="gap-20 hidden md:flex"> 
        <div className="w-[25.84px] h-[31.15px]"><img src={logo} alt="logo" /></div>
        <div >
            <ul className="flex flex-row gap-6" >
                <li className="text-[#162639] text-lg font-bold">About</li>
                <li className="text-[#162639] text-lg font-bold">Projects</li>
                <li className="text-[#162639] text-lg font-bold">Marketplace</li>
                <li className="text-[#162639] text-lg font-bold">Governance</li>
                <li className="text-[#162639] text-lg font-bold">Discord</li>
            </ul>
            
        </div>
      </div>
      <div className="flex items-center justify-center"> <button className="w-[128px] h-[29px] bg-designColor rounded-sm text-white">Log in</button> </div>
    </div>
  )
}

export default Header