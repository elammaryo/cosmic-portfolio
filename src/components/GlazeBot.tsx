import { ArrowUp, BotMessageSquare, RotateCcw, Send, Sparkles, UserIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { cn } from "../lib/utils";
import { getChatResponse } from "../lib/api";

type Message = { content: string; role: "assistant" | "user"; id: string };
type Props = { setIsChatOpen: (isOpen: boolean) => void };
const welcome: Message = { id: "welcome", role: "assistant", content: "Hey — I’m GlazeBot. Ask me about Omer’s work, his stack, or what he’s building next." };

export function GlazeBot({ setIsChatOpen }: Props) {
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: "smooth" }); }, [messages, isLoading]);
  useEffect(() => { const closeOnEscape = (event: globalThis.KeyboardEvent) => event.key === "Escape" && setIsChatOpen(false); window.addEventListener("keydown", closeOnEscape); inputRef.current?.focus(); return () => window.removeEventListener("keydown", closeOnEscape); }, [setIsChatOpen]);

  const sendMessage = async () => {
    const content = input.trim();
    if (!content || isLoading) return;
    const nextMessages = [...messages, { content, role: "user" as const, id: crypto.randomUUID() }];
    setMessages(nextMessages); setInput(""); setIsLoading(true);
    const response = await getChatResponse(nextMessages);
    setMessages(current => [...current, { content: response, role: "assistant", id: crypto.randomUUID() }]); setIsLoading(false);
  };
  const onSubmit = (event: FormEvent) => { event.preventDefault(); void sendMessage(); };

  return <div className="glazebot" role="dialog" aria-label="Chat with GlazeBot">
    <header className="glazebot-head"><div className="bot-mark"><BotMessageSquare size={18} /></div><div><strong>GlazeBot</strong><span><i /> Omer’s digital guide</span></div><button className="bot-close" onClick={() => setIsChatOpen(false)} aria-label="Close chat"><X size={18} /></button></header>
    <div className="bot-intro"><Sparkles size={13} /> Ask anything about Omer’s work</div>
    <div className="bot-feed" ref={feedRef} aria-live="polite">
      {messages.map(message => <div className={cn("bot-row", message.role === "user" && "bot-row-user")} key={message.id}><div className="bot-avatar">{message.role === "user" ? <UserIcon size={14} /> : <BotMessageSquare size={14} />}</div><p className={cn("bot-bubble", message.role === "user" && "bot-bubble-user")}>{message.content}</p></div>)}
      {isLoading && <div className="bot-row"><div className="bot-avatar"><BotMessageSquare size={14} /></div><div className="bot-typing"><i /><i /><i /></div></div>}
    </div>
    <div className="bot-suggestions"><button onClick={() => setInput("What kind of work does Omer do?")}>What does Omer build?</button><button onClick={() => setInput("Tell me about SuperOver")}>About SuperOver</button></div>
    <form className="bot-input" onSubmit={onSubmit}><input ref={inputRef} value={input} onChange={event => setInput(event.target.value)} placeholder="Message GlazeBot…" aria-label="Message GlazeBot" /><button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">{isLoading ? <RotateCcw className="bot-spin" size={17} /> : <Send size={17} />}</button></form>
    <footer>Press <kbd>Esc</kbd> to close <ArrowUp size={12} /></footer>
  </div>;
}
