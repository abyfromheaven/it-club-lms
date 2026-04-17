import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Play, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary">SMKS 1 Triple J</span>
            <span className="text-muted-foreground">— Learning Management System</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tightest leading-[1.05]">
            Dari Newbie Jadi Pro,
            <br />
            Belajar Bareng di{" "}
            <span className="text-gradient-gold">IT Club</span>
            <br />
            SMKS 1 Triple J
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Platform arsip pembelajaran terpadu. Pelajari{" "}
            <span className="text-foreground font-medium">IoT</span>,{" "}
            <span className="text-foreground font-medium">Cyber Security</span>, dan{" "}
            <span className="text-foreground font-medium">Networking</span> melalui modul video terkurasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="gold" size="lg" className="group">
              Mulai Belajar
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outlineGold" size="lg">
              <BookOpen className="size-4" />
              Lihat Katalog
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-auth opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-xl border border-border bg-card shadow-card overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex items-center gap-1.5">
                <Circle className="size-3 fill-destructive text-destructive" />
                <Circle className="size-3 fill-primary text-primary" />
                <Circle className="size-3 fill-emerald-500 text-emerald-500" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">~/itclub/dashboard.tsx</span>
              <span className="size-3" />
            </div>

            {/* Code */}
            <pre className="p-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="block">
                <span className="text-muted-foreground">// Welcome, member 👋</span>{"\n"}
                <span className="text-accent-2">const</span>{" "}
                <span className="text-primary">member</span> = {"{"}
                {"\n  "}name: <span className="text-emerald-400">"Anggota IT Club"</span>,
                {"\n  "}level: <span className="text-emerald-400">"Junior Dev"</span>,
                {"\n  "}tracks: [
                {"\n    "}<span className="text-emerald-400">"IoT"</span>,
                {"\n    "}<span className="text-emerald-400">"CyberSec"</span>,
                {"\n    "}<span className="text-emerald-400">"Networking"</span>
                {"\n  "}],
                {"\n  "}progress: <span className="text-primary">87</span>
                {"\n"}{"}"};{"\n\n"}
                <span className="text-accent-2">await</span>{" "}
                <span className="text-primary">lms</span>.<span className="text-foreground">stream</span>(member);
              </code>
            </pre>

            {/* Stat strip */}
            <div className="border-t border-border px-5 py-4 flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2 text-xs">
                <div className="grid place-items-center size-8 rounded-md bg-primary/10 border border-primary/30">
                  <Play className="size-3.5 text-primary fill-primary" />
                </div>
                <div>
                  <div className="font-semibold">Modul 12: Network Layer</div>
                  <div className="text-muted-foreground font-mono">14:32 / 22:18</div>
                </div>
              </div>
              <div className="font-mono text-xs text-primary">87%</div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6 px-4 py-2.5 rounded-xl bg-card border border-primary/30 shadow-gold"
          >
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono">Live Session</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
