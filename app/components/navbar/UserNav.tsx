"use client";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { MenuLink } from "./MenuLink";

export const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={20} />
        <CgProfile size={25} />
      </button>
      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          <MenuLink label="Log in" onClick={() => console.log("skibidi")} />
          <MenuLink label="Sign up" onClick={() => console.log("skibidi")} />
        </div>
      )}
    </div>
  );
};
