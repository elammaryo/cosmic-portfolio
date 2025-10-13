import { BotMessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { GlazeBot } from "./GlazeBot";
import { cn } from "../lib/utils";

export const FloatingActionButton = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  useEffect(() => {
    const button = document.getElementById("chat-button");
    if (!button) {
      return;
    }

    const delayMs = 8000;
    const prismMs = 8000;

    const show = setTimeout(() => {
      button.classList.add("reveal-active", "prism-active");
    }, delayMs);

    const hide = setTimeout(() => {
      button.classList.remove("reveal-active");
    }, delayMs + prismMs + 200);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed justify-center w-auto right-8 bottom-10 md:right-12 md:bottom-12">
      <div
        className={cn(
          isChatOpen
            ? "fixed md:max-w-120 inset-x-8 md:inset:none bottom-26 md:bottom-28 z-100 md:translate-x-[calc(100vw-560px)]"
            : "hidden"
        )}
      >
        <GlazeBot setIsChatOpen={setIsChatOpen} />
      </div>
      <button
        id="chat-button"
        aria-label="open chat"
        onClick={() => {
          setIsChatOpen(!isChatOpen);
        }}
        className="group inline-flex rounded-md px-4 py-4 items-center justify-center hover:shadow-lg duration-300 glass glass-tint !bg-transparent prism-premium cursor-auto"
      >
        <div className="flex z-10 group-hover:gap-2 group-[.reveal-active]:gap-2">
          <BotMessageSquare />
          <span className="reveal-label font-bold italic overflow-hidden whitespace-nowrap max-w-0 opacity-0 transition-[max-width, opacity] duration-800 ease-out group-hover:max-w-[140px] group-hover:opacity-100 group-focus-visible:max-w-[140px] group-focus-visible:opacity-100">
            GlazeBot AI
          </span>
        </div>
      </button>
    </div>
  );
};
