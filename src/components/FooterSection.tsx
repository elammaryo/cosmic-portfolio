import { ArrowUp } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-12 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        {" "}
        Thanks for visiting :) I hope you had a{" "}
        <span className="text-primary">✨ stellar ✨</span> experience! 💫
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={30} />
      </a>
    </footer>
  );
};
