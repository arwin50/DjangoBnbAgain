"use client";
import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { apiService } from "../services/apiService";

interface ContactButtonProps {
  userId: string | null;
  landlordId: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  userId,
  landlordId,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const startConversation = async () => {
    if (userId) {
      const conversation = await apiService.get(
        `/api/chat/start/${landlordId}/`
      );

      if (conversation.conversation_id) {
        router.push(`/inbox/${conversation.conversation_id}`);
      }
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={startConversation}
      className="mt-6 cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark transition text-white rounded-xl"
    >
      Contact
    </div>
  );
};
