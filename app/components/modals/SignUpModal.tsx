"use client";
import { useState } from "react";
import { CustomButton } from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import { apiService } from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

export const SignUpModal = () => {
  const router = useRouter();
  const SignUpModal = useSignUpModal();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.postWithoutToken(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      SignUpModal.close();

      router.push("/");
    } else {
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <form action={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your e-mail address"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          placeholder="Your password"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Repeat password"
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80 "
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitSignup} />
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
