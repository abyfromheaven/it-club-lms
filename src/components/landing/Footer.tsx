import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Materi Hub", href: "/materi" },
    { name: "IoT Track", href: "#" },
    { name: "Cyber Security", href: "#" },
    { name: "Networking", href: "#" },
  ];

  const socialIcons = [
    {
      name: "X",
      href: "#",
      svg: (
        <svg
          className="size-5 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "#",
      svg: (
        <svg
          className="size-5 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.27 4.58c-1.3-.6-2.69-1.04-4.14-1.28a.05.05 0 0 0-.05.02c-.18.33-.39.75-.53 1.09a15.8 15.8 0 0 0-4.7 0c-.14-.34-.36-.76-.54-1.09a.05.05 0 0 0-.05-.02c-1.45.24-2.84.68-4.14 1.28a.05.05 0 0 0-.02.02c-2.73 4.07-3.48 8.04-3.11 11.94a.05.05 0 0 0 .02.03c1.8 1.32 3.54 2.12 5.25 2.65a.05.05 0 0 0 .05-.01c.41-.56.77-1.16 1.07-1.79a.05.05 0 0 0-.03-.07a10.95 10.95 0 0 1-1.63-.78a.05.05 0 0 1-.01-.08c.14-.1.27-.21.4-.32a.05.05 0 0 1 .05-.01c3.43 1.57 7.14 1.57 10.53 0a.05.05 0 0 1 .05.01c.13.11.26.22.4.32a.05.05 0 0 1-.01.08c-.5.3-1.04.56-1.61.78a.05.05 0 0 0-.03.07a12 12 0 0 0 1.07 1.79a.05.05 0 0 0 .05.01c1.72-.53 3.46-1.33 5.26-2.65a.05.05 0 0 0 .02-.03c.44-4.53-.73-8.46-3.12-11.96a.05.05 0 0 0-.02-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.1c0-1.15.84-2.1 1.89-2.1c1.06 0 1.9.96 1.89 2.1c0 1.15-.84 2.1-1.89 2.1Zm6.97 0c-1.03 0-1.89-.95-1.89-2.1c0-1.15.84-2.1 1.89-2.1c1.06 0 1.9.96 1.89 2.1c0 1.15-.84 2.1-1.89 2.1Z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      svg: (
        <svg
          className="size-5 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0E14]">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="size-12 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-gold p-1">
            <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain" />
          </div>
          <span className="text-foreground text-2xl font-black tracking-tightest">
            IT<span className="text-gradient-gold">CLUB</span>
          </span>
        </div>

        <nav className="mb-8 w-full">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 w-full flex flex-col items-center gap-4">
          <p className="text-center text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} IT CLUB SMK 1 TRIPLE "J". All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/50">
             <span>Platform v1.0.0</span>
             <span className="size-1 rounded-full bg-primary/30" />
             <span>Made with Gold and Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
