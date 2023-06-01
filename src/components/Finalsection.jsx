import figure from "../assets/figure.png";
import figure2 from "../assets/figure2.png";
import figure3 from "../assets/figure3.png";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
const Finalsection = () => {
  return (
    <div className="font-text ">
      {/* ------------------1------------------ */}
      <div className="w-full h-[1161px] border-black border-4 border-dashed flex items-center justify-center">
        <div className="md:w-[75%] w-full md:ml-28 h-[892px] bg-finalsecbg bg-cover relative rounded-[60px] flex flex-col md:mb-14 items-end ">
          <div className="md:w-[504px] w-full h-[250px] z-30 md:absolute rounded-t-[60px] -left-[9%] bg-white top-[10%] flex flex-col ">
            <div className="w-full h-[10% ] flex items-start mb-5">
              <span className="w-[59px] h-[32px] rounded-lg bg-[#EFE4FC] flex  justify-center items-center">
                NFT
              </span>
            </div>
            <div className="w-full h-[38%] flex justify-start items-end">
              <div className="w-[8px] h-[80%] bg-[#6052FF] rounded-t-lg"></div>
              <h1 className="font-semibold md:text-7xl text-3xl ml-5">
                PFP NFT{" "}
              </h1>
              <div className="w-[39px]  h-[39px] rounded-full  bg-gradient-to-l from-[#DECAFF] to-[#691EE2] ml-20 mb-10"></div>
            </div>
            <div className="w-full h-[38%] flex justify-start items-start">
              <div className="w-[8px] h-[60%] bg-[#6052FF] rounded-b-lg"></div>
              <h1 className="font-semibold md:text-7xl text-3xl text-[#6052FF] ml-5">
                Marketplace
              </h1>
            </div>
          </div>
          <div className="md:w-[85%] w-full md:h-[70%] h-[50%] bg-finalsecbg2 bg-cover bg-top md:absolute -bottom-16 -left-[10%] z-30"></div>
          <div className="md:w-[45%] w-full h-[25%] rounded-[60px] bg-white md:mr-[10%] md:top-0 bottom-0 flex flex-col z-30 justify-center items-start">
            <span className="font-medium md:text-lg text-sm text-left ml-7 ">
              We regulated NFT marketplace and payable in Cryptocurrencies and
              FIAT. You don’t have to be a computer geek to buy NFTs.
            </span>
            <button className="rounded-md w-[182px] h-[52px] ml-7 mt-2 text-white bg-[#6052FF] ">
              Discover now
            </button>
          </div>
          <div className="w-[79px] h-[79px] rounded-full mt-[30%] mr-[15%] bg-gradient-to-l from-[#FFC56F] to-[#FF7051]"></div>
        </div>
      </div>
      {/* ------------------2------------------ */}
      <div className="w-full md:h-[1100px] lg:h-[920px] h-[1800px] flex md:grid grid-cols-4 grid-rows-3 flex-col  border-black border-x-4 border-dashed">
        <div className="col-span-3 flex md:justify-center justify-start items-end max-md:h-[15%]">
          <div className="relative flex flex-row w-[50%]">
            <div className="w-[201px] h-[187px] rounded-3xl bg-[#E6F5D0] flex justify-center items-center">
              <span className="font-semibold text-2xl">Gees</span>
            </div>
            <div className="w-[237px] h-[85px]  rounded-[32px] shadow-black drop-shadow-2xl lg:m-5 m-0 bg-[#FFFFFF] flex items-center justify-center absolute gap-3 top-[10%] md:left-[30%] left-[70%] z-30">
              <div className="w-[50px] h-[50px] rounded-full bg-people bg-center bg-cover"></div>
              <div className="w-[108px] h-[50px] text-left ">
                <h1 className="text-[#342E2E] font-text font-semibold text-base">
                  Anna May
                </h1>
                <span className="text-[#342E2E] font-text font-normal text-base">
                  Donated $100
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 w-full flex flex-col justify-start items-center max-md:h-[35%]">
          <div className=" w-full flex flex-col  md:m-16  mx-0 md:gap-10 ">
            <h1 className="w-[72px] h-[35px] text-3xl font-semibold "> Syne</h1>
            <div className="w-full relative">
              <div className="md:w-[90%] w-[300px] h-[302px] rounded-[28px] bg-finalsecbg3 bg-cover bg-center"></div>
              <div className="md:w-[70%] w-[244px] h-[302px] p-5 md:gap-6 items-start absolute bg-[#EFE4FC] rounded-[18px] top-[80%]  md:left-[9%] left-[6%] flex flex-col">
                <div className=" w-full flex flex-row justify-end">
                  <span className="font-medium text-base">86%</span>
                </div>
                <span className="font-medium text-base">$350,000 USD</span>
                <div className="w-[156px] h-[6px] bg-[#485BFF] flex justify-end">
                  <div className="w-[30%] bg-white h-full"></div>
                </div>
                <span className="font-medium text-base">of 500,000</span>
                <span className="font-regular text-xs text-left">
                  Expanding internet connectivity with stratospheric balloons
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-center justify-start row-span-2 max-md:h-[25%]">
          <div className="w-[244px] h-[350px]">
            <div className="w-full h-full  relative flex flex-col justify-between items-center">
              <h1 className="font-semibold text-2xl flex w-full items-start ml-1">
                Luna
              </h1>
              <div className="w-full h-[288px] rounded-[28px] bg-finalsecbg4 bg-cover"></div>
              <div className="w-[237px] h-[85px] rounded-[32px] shadow-black drop-shadow-2xl lg:m-5 m-0 bg-[#FFFFFF] flex items-center justify-center gap-3 absolute z-30 bottom-[16%] left-[80%]">
                <div className="md:w-[50px] w-[30px] h-[50px]  rounded-full bg-people2 bg-center bg-cover"></div>
                <div className="w-[108px] h-[50px] text-left ">
                  <h1 className="text-[#342E2E] font-text font-semibold text-base ">
                    Jane Holand
                  </h1>
                  <span className="text-[#342E2E] font-text font-normal text-base">
                    Donated $500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2  flex flex-col bg-finalsecbg5 bg-cover bg-top max-md:h-[35%]">
          <div className="flex flex-col gap-16 items-center">
            <h1 className="font-semibold md:text-7xl text-2xl">
              We are ecofriendly and a{" "}
              <span className="text-[#FF7051]"> reliable</span>
            </h1>
            <span className="font-regular text-sm">
              As an ambitious community-driven project, we've placed a strong
              emphasis on setting the standard for unique NFT collector
              experiences.{" "}
            </span>
            <div>
              <button className="rounded-md w-[180px] h-[52px] text-white bg-[#6052FF] flex items-center justify-center">
                Mint purpose
              </button>
            </div>
          </div>
          <div className="flex md:justify-end justify-center max-md:ml-20 max-md:mt-20">
            <div className="w-[230px]  h-[187px] rounded-3xl bg-[#E7EEFA] flex justify-center items-center mr-[20%] md:mr-0">
              <span className="font-semibold text-2xl">Sunport</span>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------3------------------- */}
      <div className="w-full h-[920px]  border-black border-x-4 border-b-4 pt-24 border-dashed ">
        <div className="w-full h-[32px] flex justify-center items-center  ">
          <span className="w-[128px] flex justify-center items-center h-full font-semibold text-[14px] rounded-[7px] uppercase bg-[#E7EEFA] ">
            transform
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[1440px] bg-finalsecbg6 bg-cover bg-no-repeat bg-center rounded-[70px]  h-[600px] flex flex-col justify-between">
            <div className="md:w-[70%] w-full h-[29%] bg-white rounded-ee-[70px] flex flex-row md:justify-between justify-around mt-2">
              <div className="w-[16%] bg-no-repeat h-full  bg-finalsecbg7 hidden lg:flex">
                {" "}
              </div>
              <div className="lg:w-[113px] w-[50px] lg:h-[113px]  h-[50px] bg-black relative overflow-hidden ">
                <div className="lg:w-[113px] w-[50px] lg:h-[113px]  h-[50px] bg-white opacity-100 rounded-full absolute lg:left-14 lg:top-14 left-7 top-7"></div>
                <div className="lg:w-[113px] w-[50px] lg:h-[113px]  h-[50px] bg-white opacity-100 rounded-full absolute lg:right-14 lg:-top-14 right-7 -top-7"></div>
                <div className="lg:w-[113px] w-[50px] lg:h-[113px]  h-[50px] bg-white opacity-100 rounded-full absolute lg:top-14 lg:right-14 top-7 right-7"></div>
                <div className="lg:w-[113px] w-[50px] lg:h-[113px]  h-[50px] bg-white opacity-100 rounded-full absolute lg:-top-14 lg:-right-14 -top-7 -right-7"></div>
              </div>
              <div>
                <h1 className="font-semibold lg:text-6xl text-3xl">
                  Authenticaly secure,
                  <h1 className="text-[#4A3AFF]">sustainable</h1>
                </h1>
              </div>
            </div>
            <div className="w-full h-[25%] flex justify-end">
              <span className="font-regular text-lg lg:w-[22%] w-full md:mr-5 text-left max-lg:bg-white  h-full">
                Smaller currencies may often appear to have a lower carbon
                footprint, but that may simply be because there are fewer
                transactions.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end pr-20">
          <div className="w-[96px] h-[96px] rounded-full  bg-gradient-to-l from-[#FFC56F] to-[#FF7051]"></div>
        </div>
      </div>

      {/* ------------------4------------------ */}
      <div className="h-[700px] flex justify-center items-center relative  border-black border-x-4 border-dashed">
        <div
          className="w-[1390px] md:h-[552px] h-[600px]  bg-finalsecbg8 bg-cover bg-center flex 
               justify-center items-center"
        >
          <div className="w-[70%] gap-5 flex flex-col items-center z-40 ">
            <h1 className="font-semibold text-white text-7xl">
              Join Us to make The world a better place
            </h1>
            <span className="font-medium text-[18px] text-white w-[70%]">
              Smaller currencies may often appear to have a lower carbon
              footprint, but that may simply be because there are fewer
              transactions.
            </span>
            <button className="w-[163px] h-[52px] bg-white text-xl rounded-lg font-semibold text-designColor">
              {" "}
              Contact Us
            </button>
          </div>
        </div>
        <img
          src={figure}
          alt="figure"
          className="absolute bottom-0 md:right-[30%] right-0 z-30"
        />
        <img
          src={figure2}
          alt="figure"
          className="absolute bottom-[15%] md:right-[14%] right-0 z-30"
        />
        <img
          src={figure3}
          alt="figure"
          className="absolute bottom-[30%] md:right-[8%] right-0 z-30"
        />
        <div className="w-full h-[30%] absolute  flex justify-between z-10">
          <div className=" md:w-[20%] w-[30%] flex justify-around">
            <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-l from-[#EECAFF] to-[#691EE2] "></div>
            <div className="w-[130px] h-[130px] rounded-full bg-gradient-to-l from-[#EECAFF] to-[#691EE2] mt-10"></div>
          </div>
          <div className="w-[192px] h-[192px] rounded-full bg-gradient-to-l from-[#EECAFF] to-[#691EE2] "></div>
        </div>
      </div>
      {/* ------------------FOOTER------------------ */}
      <div className="h-[700px] border-black border-x-4 border-b-4 border-dashed flex justify-center items-center">
        <div className="w-[1369px] md:h-[532px] h-[720px] lg:bg-finalsecbg9 max-lg:bg-[#EFE4FC] flex flex-col justify-between ">
          <div className="w-full h-[84%] flex md:flex-row flex-col  ">
            <div className="md:w-[12%] w-full  md:h-full h-[20%] flex md:flex-col flex-row items-center justify-between">
              <div className="w-[80px] h-[96px] md:mt-10">
                <img src={logo} alt="logo" className="w-full h-full" />
              </div>
              <div className="h-[80%] flex md:flex-col flex-row justify-end gap-10 items-start w-full px-10">
                <FaTelegramPlane size={30} />
                <BsDiscord size={30} />
                <TiSocialTwitter size={30} />
              </div>
            </div>
            <div className="md:w-[88%] w-full md:h-full max-md:gap-5 flex md:flex-row flex-col md:items-start items-center md:mt-20 text-left justify-around">
              <div className="flex flex-col">
                <h1 className="font-medium text-[24px]">Projects</h1>
                <h1 className="font-medium text-[24px]">Marketplace</h1>
                <h1 className="font-medium text-[24px]">Governance</h1>
                <h1 className="font-medium text-[24px]">Discord</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-medium text-[24px]">Newsletter</h1>
                <h1 className="font-medium text-[24px]">LinkedIn</h1>
                <h1 className="font-medium text-[24px]">Youtube </h1>
                <h1 className="font-medium text-[24px]">Instagram</h1>
                <h1 className="font-medium text-[24px]">Twitter</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-medium text-[24px]">Contract</h1>
                <h1 className="font-medium text-[24px]">Story Archive</h1>
                <h1 className="font-medium text-[24px]">Google</h1>
                <h1 className="font-medium text-[24px]">Alphabet</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[10%] flex justify-center">
            <span className="font-medium text-[22px] ">
              All Rights Reserved 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finalsection;
