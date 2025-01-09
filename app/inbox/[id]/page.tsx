import { getUserId } from "@/app/lib/actions";
import { useState, useEffect } from "react";
import { apiService } from "@/app/services/apiService";
import { ConversationDetail } from "@/app/components/inbox/ConversationDetail";
import { UserType } from "../page";
import { getAccessToken } from "@/app/lib/actions";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

export default async function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const userId = await getUserId();
  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="max-w-[1500px] mx-auto px-6 py-12">
        <p>You are not skibidi...</p>
      </main>
    );
  }

  const conversation = await apiService.get(`/api/chat/${params.id}/`);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <ConversationDetail
        conversation={conversation.conversation}
        userId={userId}
        token={token}
      />
    </main>
  );
}
