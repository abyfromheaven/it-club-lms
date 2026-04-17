import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Materi", href: "#materi" },
  { label: "Projek", href: "#projek" },
  { label: "Event", href: "#event" },
  { label: "Tentang Kami", href: "#tentang" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="grid place-items-center size-9 rounded-lg bg-gradient-gold text-primary-foreground shadow-gold">
            <Code2 className="size-5" strokeWidth={2.5} />
          </div>
          <span className="font-bold tracking-tight text-lg">
            IT<span className="text-gradient-gold">Club</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="auth" size="sm">Login Member</Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden size-10 grid place-items-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-base">
                  {l.label}
                </a>
              ))}
              <Button variant="auth" className="w-full mt-2">Login Member</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
