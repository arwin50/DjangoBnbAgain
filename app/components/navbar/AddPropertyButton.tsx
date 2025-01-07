"use client";
import useAddPropertyModal from "@/app/hooks/usePropertyModal";
import { AddPropertyModal } from "../modals/AddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

export const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId,
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 lg:p-4 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
    >
      DjangoBnb your home
    </div>
  );
};
