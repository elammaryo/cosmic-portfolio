import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const links = [
  { name: "LinkedIn", handle: "Connect professionally", href: "https://linkedin.com/in/omerelammary", icon: Linkedin },
  { name: "GitHub", handle: "See the source", href: "https://github.com/elammaryo", icon: Github },
  { name: "Instagram", handle: "Follow along", href: "https://www.instagram.com/omer.el__", icon: Instagram },
];

export const ContactsSection = () => (
  <section id="contact" className="contact-section py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <p className="section-overline">Across the internet</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>
      <p className="text-center text-muted-foreground contact-lede mx-auto">Want to collaborate, follow the journey, or see what I’m building? Pick a channel.</p>
      <div className="social-links">
        {links.map(({ name, handle, href, icon: Icon }) => <a className="social-link" href={href} target="_blank" rel="noreferrer" key={name}><span className="social-icon"><Icon size={23} /></span><span><strong>{name}</strong><small>{handle}</small></span><ArrowUpRight className="social-arrow" size={18} /></a>)}
      </div>
    </div>
  </section>
);
