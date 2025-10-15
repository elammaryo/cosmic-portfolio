export async function getChatResponse(messages: any) {
  const url = "https://ai-chatbot-kcyl.onrender.com/chatbot/openaiChatResponse";
  const allMessages = messages.map((message: any) => {
    return {
      content: message.content,
      role: message.role,
    };
  });
  const errorMessage =
    "Oops! My robo-senses are failing me. 🤖\nI can't seem to get a response right now.\n\nPlease refresh the page or try again later.";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: allMessages }),
    });

    const data = await response.json();

    if (response == undefined || response.status == 200) {
      return data.content;
    } else {
      return errorMessage;
    }
  } catch (e) {
    console.error(e);
    return errorMessage;
  }
}
