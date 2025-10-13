export async function getChatResponse(messages: any) {
  const url = "https://ai-chatbot-kcyl.onrender.com/chatbot/aiChatResponse";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messages),
  });

  const data = await response.json();

  return data.content;
}
