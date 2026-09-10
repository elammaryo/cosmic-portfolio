import { BotMessageSquare, X } from "lucide-react";
import { useEffect, useState } from "react";
import { GlazeBot } from "./GlazeBot";
import { cn } from "../lib/utils";

export const FloatingActionButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasTeased, setHasTeased] = useState(false);

  useEffect(() => {
    const reveal = window.setTimeout(() => setHasTeased(true), 1800);
    const reset = window.setTimeout(() => setHasTeased(false), 9200);
    return () => { clearTimeout(reveal); clearTimeout(reset); };
  }, []);

  return <div className="bot-dock premium-bot-dock">
    <div className={cn("bot-panel", isChatOpen && "bot-panel-open")}><GlazeBot setIsChatOpen={setIsChatOpen} /></div>
    <div className="premium-bot-shell glass glass-tint">
      <button
        className={cn("premium-bot-launcher prism-premium", hasTeased && !isChatOpen && "premium-bot-tease prism-active", isChatOpen && "premium-bot-open")}
        onClick={() => setIsChatOpen(open => !open)}
        aria-expanded={isChatOpen}
        aria-label={isChatOpen ? "Close GlazeBot" : "Open GlazeBot"}
      >
        <span className="premium-bot-icon">{isChatOpen ? <X size={20} /> : <BotMessageSquare size={21} />}</span>
        <span className="premium-bot-label">{isChatOpen ? "Close" : "GlazeBot AI"}</span>
        {!isChatOpen && <span className="premium-bot-pulse" />}
      </button>
    </div>
  </div>;
};
