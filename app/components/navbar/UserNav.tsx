"use client";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { MenuLink } from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import { LogoutButton } from "../LogoutButton";
import { useRouter } from "next/navigation";

interface UserNavProps {
  userId?: string | null;
}

export const UserNav: React.FC<UserNavProps> = ({ userId }) => {
  const router = useRouter();
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
          {userId ? (
            <>
              <MenuLink
                label="My properties"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myproperties");
                }}
              />
              <MenuLink
                label="My reservations"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myreservations");
                }}
              />
              <MenuLink
                label="My favorites"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myfavorites");
                }}
              />
              <LogoutButton />
            </>
          ) : (
            <>
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
              />{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
};
