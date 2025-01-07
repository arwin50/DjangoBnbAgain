import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla, MdCabin } from "react-icons/md";
import { BsHouse } from "react-icons/bs";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Beaches")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Beaches" ? "border-gray-800" : "border-white "} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <TbBeach size={25} />
          <span className="text-xs">Beaches</span>
        </div>
        <div
          onClick={() => setCategory("Villas")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Villas" ? "border-gray-800" : "border-white "} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <MdOutlineVilla size={25} />
          <span className="text-xs">Villas</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Cabins" ? "border-gray-800" : "border-white "} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <MdCabin size={25} />
          <span className="text-xs">Cabins</span>
        </div>
        <div
          onClick={() => setCategory("Tiny homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Tiny homes" ? "border-gray-800" : "border-white "} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <BsHouse size={25} />
          <span className="text-xs">Tiny homes</span>
        </div>
      </div>
    </>
  );
};
