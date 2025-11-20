import { BotMessageSquare, UserIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { SyncLoader } from "react-spinners";
import { getChatResponse } from "../lib/api";
import { useTheme } from "../ThemeContext";

export function GlazeBot({ setIsChatOpen }: any) {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      content:
        "Hello, weary explorer, I'm GlazeBot! 😁\nHere to tell you everything wonderous and magnificent about Omer.\n\nOr we can just chat and play a game or two.\n\nHeads up: my first reply might take a sec while I shuffle my ever-growing Omer dossier!",
      role: "assistant",
      id: crypto.randomUUID(),
    },
  ]);

  function ChatWindow() {
    const chatWindow = useRef(null);

    useEffect(() => {
      const containerElem: any = chatWindow.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, [chatMessages]);

    return (
      <div className="flex flex-col w-full">
        <div className="flex justify-end px-5">
          <button
            className="h-10 cursor-pointer"
            onClick={() => setIsChatOpen(false)}
          >
            <X />
          </button>
        </div>
        <div
          className="flex flex-col h-[calc(100dvh-350px)] gap-5 overflow-auto scroll-smooth [scrollbar-width:none] pb-5 px-5"
          ref={chatWindow}
        >
          {chatMessages.map((chat) => {
            return (
              <div
                key={chat.id}
                className={cn(chat.role == "user" && "flex justify-end")}
              >
                <ChatMessage
                  message={chat.content}
                  role={chat.role}
                  key={chat.id}
                  loading={false}
                />
              </div>
            );
          })}
          {isLoading && (
            <ChatMessage
              message=""
              role="assistant"
              key={crypto.randomUUID()}
              loading={isLoading}
            />
          )}
        </div>
      </div>
    );
  }

  function ChatMessage({ message, role, loading }: any) {
    function ChatBubble() {
      return (
        <div
          className={cn(
            "whitespace-pre-line text-left max-w-90 p-4 flex items-center rounded-3xl !shadow-md",
            role === "user" ? "backdrop-blur bg-primary text-white" : "glass"
          )}
        >
          {loading ? (
            <SyncLoader
              size={7}
              color={isDark ? "white" : "black"}
              speedMultiplier={0.6}
            />
          ) : (
            message
          )}
        </div>
      );
    }

    return (
      <div>
        {role === "user" ? (
          <div className="flex gap-3">
            <ChatBubble />
            <div className="flex translate-y-1 rounded-full items-center justify-center glass glass-tint h-12 w-12 p-3 !shadow-sm">
              <UserIcon />
            </div>
          </div>
        ) : (
          <div className="flex gap-3 ">
            <div className="flex translate-y-1 rounded-full items-center justify-center glass glass-tint h-12 w-12 p-3 !shadow-sm">
              <BotMessageSquare />
            </div>
            <ChatBubble />
          </div>
        )}
      </div>
    );
  }

  function ChatInput() {
    const [inputText, setInputText] = useState("");
    let newChatMessages = chatMessages;

    function saveInput(event: any) {
      setInputText(event.target.value);
    }

    async function sendMessage() {
      newChatMessages = [
        ...chatMessages,
        {
          content: inputText,
          role: "user",
          id: crypto.randomUUID(),
        },
      ];

      setChatMessages(newChatMessages);

      setIsLoading(true);
      const aiResponse = await getChatResponse(newChatMessages);
      setIsLoading(false);
      setChatMessages([
        ...newChatMessages,
        {
          content: aiResponse,
          role: "assistant",
          id: crypto.randomUUID(),
        },
      ]);

      setInputText("");
    }

    return (
      <div className="flex w-full gap-3 items-center justify-between px-5">
        <input
          className="w-full h-8 px-3 py-5 bg-primary/20 rounded-md"
          placeholder="Send a message..."
          onChange={saveInput}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          className="cosmic-button rounded-md px-3 py-2 bg-primary"
          onClick={() => {
            if (inputText != "") {
              sendMessage();
            }
          }}
        >
          Send
        </button>
      </div>
    );
  }

  return (
    <div className="glass glass-tint transform max-h-[calc(100dvh-100px)] pb-5 pt-3 flex flex-col items-center gap-5 z-50">
      <ChatWindow />
      <ChatInput />
    </div>
  );
}
