import { motion } from "framer-motion";
import { Cpu, Swords, Network, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Cpu,
    title: "Internet of Things",
    desc: "Sensor, Arduino, & Microcontrollers",
    tag: "IoT",
  },
  {
    icon: Swords,
    title: "Cyber Security",
    desc: "Ethical Hacking & Digital Forensics",
    tag: "CYSEC",
  },
  {
    icon: Network,
    title: "Computer Networking",
    desc: "Routing, Switching, & Infrastructure",
    tag: "COMPNET",
  },
  {
    icon: Cpu,
    title: "Web Development",
    desc: "Frontend, Backend & Cloud",
    tag: "WEB",
  },
];

export const Categories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="spesialisasi" className="py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">// Core Tracks</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest">
              Fokus kurikulum <span className="text-gradient-gold">berbasis spesialisasi</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dari fundamental hingga advanced — pilih jalur dan mulai eksplorasi sesuai passion teknologi kamu.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("left")}
              className="rounded-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("right")}
              className="rounded-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-xl bg-card gold-border gold-border-hover cursor-pointer overflow-hidden min-w-[280px] sm:min-w-[320px] snap-center"
            >
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative flex items-start justify-between">
                <div className="grid place-items-center size-12 rounded-lg bg-primary/10 border border-primary/30 text-primary">
                  <cat.icon className="size-6" strokeWidth={1.75} />
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>

              <div className="relative mt-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">{cat.tag}</span>
                <h3 className="mt-1 text-xl font-bold tracking-tight">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
