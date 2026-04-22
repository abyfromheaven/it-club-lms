import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Materi", href: "/materi" },
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
        <a href="#" className="flex items-center gap-3 group">
          <div className="grid place-items-center size-12 rounded-full overflow-hidden border border-primary/30 bg-primary/5 shadow-gold transition-transform group-hover:scale-110">
            <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain" />
          </div>
          <span className="font-bold tracking-tight text-xl">
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
          <LoginDialog>
            <Button variant="auth" size="sm">Login Anggota</Button>
          </LoginDialog>
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
              <LoginDialog>
                <Button variant="auth" className="w-full mt-2">Login Anggota</Button>
              </LoginDialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
