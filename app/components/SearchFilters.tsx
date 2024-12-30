import { CiSearch } from "react-icons/ci";

export const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where?</p>
            <p className="text-sm ">Wanted location</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm ">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm ">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm ">Add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2   ">
        <div className="p-2 lg:p-3 bg-airbnb hover:bg-airbnb-dark transition cursor-pointer rounded-full text-white ">
          <CiSearch size={20} />
        </div>
      </div>
    </div>
  );
};
