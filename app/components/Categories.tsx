"use client";
import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { MdCabin } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";
import { useState } from "react";

export const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == "" ? "border-black" : "border-white"} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <TbBeach size={25} />
        <span className="text-xs">All</span>
      </div>

      <div
        onClick={() => _setCategory("Beaches")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == "Beaches" ? "border-black" : "border-white"} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <TbBeach size={25} />
        <span className="text-xs">Beaches</span>
      </div>

      <div
        onClick={() => _setCategory("Villas")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == "Villas" ? "border-black" : "border-white"} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <MdOutlineVilla size={25} />
        <span className="text-xs">Villas</span>
      </div>
      <div
        onClick={() => _setCategory("Cabins")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == "Cabins" ? "border-black" : "border-white"} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <MdCabin size={25} />
        <span className="text-xs">Cabins</span>
      </div>
      <div
        onClick={() => _setCategory("Tiny homes")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == "Tiny homes" ? "border-black" : "border-white"} opacity-60 hover:opacity-100 hover:border-gray-200`}
      >
        <BsHouse size={25} />
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};
