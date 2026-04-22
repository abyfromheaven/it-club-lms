import { Code2, Github, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="tentang" className="border-t border-border bg-card/30 mt-12">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="grid place-items-center size-14 rounded-full overflow-hidden border border-white/10 bg-white/5 transition-all group-hover:border-primary/50 shadow-lg">
              <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain scale-110" />
            </div>
            <span className="font-bold tracking-tight text-xl">
              IT<span className="text-gradient-gold">Club</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground max-w-xs">
            Platform pembelajaran terpadu untuk Anggota IT CLUB SMK 1 TRIPLE "J".
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            <li><Link to="/materi" className="hover:text-primary transition-colors">Materi</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Tracks</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>Internet of Things (IoT)</li>
            <li>Cyber Security (CYSEC)</li>
            <li>Computer Networking (COMPNET)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <div className="flex items-center gap-2">
            {[Github, MessageCircle, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center size-10 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} IT CLUB SMK 1 TRIPLE "J". All rights reserved.</p>
          <p className="font-mono">
            Made with <span className="text-primary">♦</span> by IT Club
          </p>
        </div>
      </div>
    </footer>
  );
};
