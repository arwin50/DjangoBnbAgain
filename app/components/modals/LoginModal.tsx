"use client";
import { CustomButton } from "../forms/CustomButton";
import { Modal } from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";

export const LoginModal = () => {
  const LoginModal = useLoginModal();
  const content = (
    <>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your e-mail address"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          type="password"
          placeholder="Your password"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80 ">
          error
        </div>

        <CustomButton
          label="Submit"
          onClick={() => console.log("skibidisigma")}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      label="Log in"
      content={content}
    />
  );
};
