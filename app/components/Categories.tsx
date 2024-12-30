import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { MdCabin } from "react-icons/md";
import { BsHouse } from "react-icons/bs";

export const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <TbBeach size={25} />
        <span className="text-xs">Beaches</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <MdOutlineVilla size={25} />
        <span className="text-xs">Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <MdCabin size={25} />
        <span className="text-xs">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <BsHouse size={25} />
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};
