import { FiPlus } from "react-icons/fi";
const Homefooter = () => {
  return (
    <div className="h-[127px] md:h-[200px] bg-designColor flex items-center justify-center border-x-4 border-black border-dashed">
      <div className="w-full h-full flex items-center justify-around text-white font-text lg:text-[80px] md:text-5xl text-3xl font-semibold">
        <h1>Collect your eco NTSs</h1>
        <h1></h1>
        <FiPlus size={80} color="white" />
        <h1>Collect your</h1>
      </div>
    </div>
  );
};

export default Homefooter;
