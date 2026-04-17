import { Code2, Github, MessageCircle, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="tentang" className="border-t border-border bg-card/30 mt-12">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <a href="#" className="flex items-center gap-2">
            <div className="grid place-items-center size-9 rounded-lg bg-gradient-gold text-primary-foreground">
              <Code2 className="size-5" strokeWidth={2.5} />
            </div>
            <span className="font-bold tracking-tight text-lg">
              IT<span className="text-gradient-gold">Club</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground max-w-xs">
            Platform pembelajaran terpadu untuk member IT Club SMKS 1 Triple J.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#materi" className="hover:text-primary transition-colors">Materi</a></li>
            <li><a href="#projek" className="hover:text-primary transition-colors">Projek</a></li>
            <li><a href="#event" className="hover:text-primary transition-colors">Event</a></li>
            <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Tracks</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>Internet of Things</li>
            <li>Cyber Security</li>
            <li>Networking</li>
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
          <p>© {new Date().getFullYear()} IT Club SMKS 1 Triple J. All rights reserved.</p>
          <p className="font-mono">
            Made with <span className="text-primary">♦</span> by IT Club
          </p>
        </div>
      </div>
    </footer>
  );
};
