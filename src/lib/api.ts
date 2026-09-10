type ChatMessage = { content: string; role: "assistant" | "user" };

export async function getChatResponse(messages: ChatMessage[]) {
  const url = "https://ai-chatbot-kcyl.onrender.com/chatbot/openaiChatResponse";
  const errorMessage = "I’m having trouble reaching my mission control right now. Please try again in a moment.";
  try {
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: messages.map(({ content, role }) => ({ content, role })) }) });
    if (!response.ok) return errorMessage;
    const data: { content?: string } = await response.json();
    return data.content?.trim() || errorMessage;
  } catch (error) { console.error(error); return errorMessage; }
}
