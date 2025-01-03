"use client";
import { CustomButton } from "../forms/CustomButton";
import { Modal } from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

export const SignUpModal = () => {
  const SignUpModal = useSignUpModal();
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
        <input
          type="password"
          placeholder="Repeat password"
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
      isOpen={SignUpModal.isOpen}
      close={SignUpModal.close}
      label="Sign Up"
      content={content}
    />
  );
};
