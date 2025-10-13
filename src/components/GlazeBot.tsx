import { BotMessageSquare, UserIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { SyncLoader } from "react-spinners";
import { getChatResponse } from "../lib/api";

export function GlazeBot({ setIsChatOpen }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      content:
        "Hello weary explorer, I'm GlazeBot! 😁\nHere to tell you everything wonderous and magnificent about Omer!\n\nOr we can just chat and play a game or two.\n\nMy first response may take a few seconds while I prepare my ever-growing list of magnificent things about Omer to share with you!",
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
          className="flex flex-col h-100 gap-5 overflow-auto scroll-smooth [scrollbar-width:none] pb-5 px-5"
          ref={chatWindow}
        >
          {chatMessages.map((chat) => {
            return (
              <div className={cn(chat.role == "user" && "flex justify-end")}>
                <ChatMessage message={chat.content} role={chat.role} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function ChatMessage({ message, role }: any) {
    function ChatBubble() {
      return (
        <div
          className={cn(
            "whitespace-pre-line text-left max-w-60 p-4 rounded-3xl !shadow-md",
            role === "user"
              ? "backdrop-blur bg-primary/80 text-white"
              : "glass glass-tint"
          )}
        >
          {isLoading ? (
            <SyncLoader size={8} color="#ffffff" speedMultiplier={0.6} />
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
            <div className="flex translate-y-1 rounded-full items-center justify-center glass glass-tint h-12 w-12 !shadow-sm">
              <UserIcon />
            </div>
          </div>
        ) : (
          <div className="flex gap-3 ">
            <div className="flex translate-y-1 rounded-full items-center justify-center glass glass-tint h-12 w-12 !shadow-sm">
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

    function saveInput(event: any) {
      setInputText(event.target.value);
    }

    function sendMessage() {
      setChatMessages([
        ...chatMessages,
        {
          content: inputText,
          role: "user",
          id: crypto.randomUUID(),
        },
      ]);

      setIsLoading(true);
      getChatResponse(chatMessages);
      setIsLoading(false);

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
    <div className="glass glass-tint max-w-100 max-h-150 pb-5 pt-3 flex flex-col items-center gap-5 z-50">
      <ChatWindow />
      <ChatInput />
    </div>
  );
}
