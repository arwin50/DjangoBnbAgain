"use client";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { MenuLink } from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

export const UserNav = () => {
  const loginModal = useLoginModal();
  const signUpModal = useSignUpModal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={20} />
        <CgProfile size={25} />
      </button>
      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          <MenuLink
            label="Log in"
            onClick={() => {
              console.log("skibidi");
              setIsOpen(false);
              loginModal.open();
            }}
          />
          <MenuLink
            label="Sign up"
            onClick={() => {
              console.log("skibidi");
              setIsOpen(false);
              signUpModal.open();
            }}
          />
        </div>
      )}
    </div>
  );
};
