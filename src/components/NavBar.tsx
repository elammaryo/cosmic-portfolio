import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
const navItems = [{ name: "About", href: "#about" }, { name: "Expertise", href: "#skills" }, { name: "Work", href: "#projects" }, { name: "Contact", href: "#contact" }];
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false); const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => { const onScroll = () => setIsScrolled(scrollY > 12); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  return <nav className={cn("site-nav", isScrolled && "site-nav-scrolled")}><div className="nav-inner"><a className="wordmark" href="#hero"><i>O</i><span>OMER<br />ELAMMARY</span></a><div className="desktop-links">{navItems.map(item => <a key={item.name} href={item.href}>{item.name}</a>)}</div><div className="nav-tools"><ThemeToggle /><a href="#contact" className="nav-cta">Let’s talk <span>↗</span></a></div><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle" aria-label="Toggle menu">{isMenuOpen ? <X /> : <Menu />}</button></div><div className={cn("mobile-menu", isMenuOpen && "mobile-menu-open")}>{navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.name}</a>)}</div></nav>;
};
