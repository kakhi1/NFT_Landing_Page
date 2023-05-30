import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
const Artsec = () => {
  return (
    <div className="md:h-[974px] h-[1150px] bg-[#EDF2F4] flex flex-col font-text relative border-x-2 border-b-2  border-dashed">
      {/* logo */}
      <div className="w-[57px] h-[57px] absolute right-[20%] top-[20%] hidden md:flex">
        <div className="w-[57px] h-[57px] bg-black relative overflow-hidden ">
          <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute top-7 left-7"></div>
          <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute -top-7 -left-7"></div>
          <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute top-7 right-7"></div>
          <div className="w-[57px] h-[57px] bg-[#EDF2F4] opacity-100 rounded-full absolute -top-7 -right-7"></div>
        </div>
      </div>
      <div className="h-[40%] flex md:flex-row flex-col  md:items-end items-center gap-3 md:gap-0">
        <div className="w-1/3">
          <div className="lg:w-[237px] w-[150xp] lg:h-[85px] h-[50px] rounded-[32px] lg:m-5 m-0 bg-[#FFFFFF] flex items-center justify-center gap-3 lg:ml-14 z-30">
            <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] rounded-full bg-people bg-center bg-cover"></div>
            <div className="w-[108px] md:h-[50px] h-[40px] text-left ">
              <h1 className="text-[#342E2E] font-text font-semibold md:text-base text-xs">
                Anna May
              </h1>
              <span className="text-[#342E2E] font-text font-normal md:text-base text-xs">
                Donated $100
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-[750px] w-full h-full md:h-[80%] flex md:items-end items-center">
          <h1 className="md:text-7xl text-4xl font-semibold text-[#1E344F] ">
            Lets make
            <span className="text-[#FF7051]"> your art </span>
            into digital assets
          </h1>
        </div>
        <div className="w-1/3 flex justify justify-center  relative z-40">
          <div className="w-[58px] h-[58px] rounded-full bg-people2 bg-cover bg-center"></div>
        </div>
      </div>
      <div className="flex w-full md:h-[60%] h-[80%] items-center justify-center mx-5 relative">
        <div className="w-[110px] h-[110px] rounded-full top-[12%] left-[12%]  bg-gradient-to-l from-[#FFC56F] to-[#FF7051] z-10 absolute"></div>
        <div className="w-[160px] h-[160px] rounded-full top-[6%] left-[74%]  bg-gradient-to-l from-[#EECAFF] to-[#691EE2] z-10 absolute"></div>
        <div className="lg:w-[237px] w-[180px] shadow-black drop-shadow-2xl lg:h-[85px] h-[50px] absolute right-[8%] top-[18%] rounded-[32px] lg:m-5  bg-[#FFFFFF] flex items-center justify-center gap-3 lg:mr-8 z-40">
          <div className="md:w-[50px] w-[30px] md:h-[50px] h-[30px] rounded-full bg-people2 bg-center bg-cover"></div>
          <div className="w-[108px]  md:h-[50px] h-[40px] text-left ">
            <h1 className="text-[#342E2E] font-text font-semibold md:text-base text-xs">
              Jane Holand
            </h1>
            <span className="text-[#342E2E] font-text font-normal md:text-base text-xs">
              Donated $500
            </span>
          </div>
        </div>
        <div className="w-[80%] items-center justify-center md:flex-row flex-col  md:gap-16 gap-5 flex font-text">
          <div className="md:w-[25%] w-[60%] md:h-[60%] h-[90%] rounded-lg z-30 items-start p-3 md:p-3 lg:p-7 bg-white flex-col">
            <div className="w-[73px] h-[72px] rounded-full text-left bg-[#EFE4FC] flex justify-center items-center">
              <img src={icon} alt="icon" />
            </div>
            <h1 className="text-left font-bold text-xl  md:mt-5 lg:mt-7 h-[10%]">
              Create{" "}
            </h1>
            <span className="text-left flex  my-3 lg:my-7 text-xs font-medium h-[20%]">
              Click My Collections and set up your collection. Add a
              description, profile & banner images, and set a secondary sales
              fee.
            </span>
            <button className="rounded-md w-[60%] h-[35px] text-white bg-[#6052FF] flex items-center justify-center">
              Create
            </button>
          </div>
          <div className="md:w-[25%] w-[60%] md:h-[60%] h-[100%] rounded-lg z-30 items-start p-3 md:p-3 lg:p-8  bg-white flex-col md:mb-16">
            <div className="w-[73px] h-[72px] rounded-full text-left bg-[#DDDAFF] flex justify-center items-center">
              <img src={icon2} alt="icon2" />
            </div>
            <h1 className="text-left font-bold text-xl  md:mt-5 lg:mt-8 h-[10%]">
              Instant payment
            </h1>
            <span className="text-left flex  my-3 lg:my-8 text-xs font-medium h-[20%]">
              Put NFTs on sale or on auction. Get paid for your digital
              collectables
            </span>
            <button className="rounded-md w-[60%] h-[35px] text-white bg-[#6052FF] flex items-center justify-center">
              Sale now
            </button>
          </div>
          <div className="md:w-[25%] w-[60%] md:h-[60%] h-[100%] rounded-lg z-30 items-start p-3 md:p-3 lg:p-8 bg-white flex-col">
            <div className="w-[73px] h-[72px] rounded-full text-left bg-[#FFDFD8] flex justify-center items-center">
              <img src={icon3} alt="icon3" />
            </div>
            <h1 className="text-left font-bold text-xl  md:mt-5 lg:mt-8 w-full h-[10%]">
              Set up your wallet
            </h1>
            <span className="text-left flex  my-3 lg:my-8 text-xs font-medium h-[20%]">
              Once you’ve set up your wallet of choice, connect it by clicking
              the wallet icon in the top right corner.
            </span>
            <button className="rounded-md w-[60%] h-[35px] text-white bg-[#6052FF] flex items-center justify-center">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artsec;
