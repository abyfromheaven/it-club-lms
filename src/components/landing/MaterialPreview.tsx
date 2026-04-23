import { motion } from "framer-motion";
import { Lock, Clock, Eye, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const previews = [
  {
    title: "ESP32 & MQTT Protocol",
    track: "IoT",
    duration: "45:12",
    views: "120",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SQL Injection Mastery",
    track: "CYSEC",
    duration: "1:12:05",
    views: "85",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "BGP Routing Protocol",
    track: "COMPNET",
    duration: "58:30",
    views: "92",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "React Fundamental for IoT",
    track: "WEB",
    duration: "32:15",
    views: "150",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Linux Server Hardening",
    track: "CYSEC",
    duration: "55:40",
    views: "64",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
  },
];

export const MaterialPreview = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="materi" className="py-24 bg-transparent overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">// Curriculum Preview</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tightest">
              Intip modul <span className="text-gradient-gold">pembelajaran internal</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Akses penuh ke ratusan jam materi video dan laboratorium simulasi yang dirancang khusus untuk kurikulum industri.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <Lock className="size-3.5" />
              Khusus Anggota Aktif
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {previews.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col min-w-[280px] sm:min-w-[380px] max-w-[380px] rounded-[2rem] border border-white/5 bg-white/[0.03] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-primary/30"
            >
              {/* Image with Lock Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#0A0E14]/60 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="size-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm text-primary">
                    <Lock className="size-6" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-[10px] font-mono text-white tracking-widest uppercase border border-white/10">
                  {item.track}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-mono mb-4">
                  <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-widest font-bold">
                    <Clock className="size-3 text-primary" /> {item.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-6 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <div className="h-full bg-gradient-gold w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* View More Card */}
          <Link to="/materi" className="group/more flex flex-col min-w-[280px] sm:min-w-[380px] max-w-[380px] rounded-2xl border border-dashed border-primary/30 bg-primary/5 overflow-hidden snap-center transition-all duration-500 hover:bg-primary/10 hover:border-primary/50 items-center justify-center text-center p-8">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover/more:scale-110 transition-transform">
              <ArrowRight className="size-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lihat Semua Modul</h3>
            <p className="text-sm text-muted-foreground">Eksplorasi puluhan materi pembelajaran lainnya di kurikulum IT Club.</p>
          </Link>
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative">
            <p className="text-sm text-muted-foreground mb-4">
              Tertarik untuk mengakses seluruh modul di atas dan puluhan materi lainnya?
            </p>
            <span className="font-bold text-primary tracking-tight text-lg">
              Hubungi pengurus IT CLUB SMK 1 TRIPLE "J" untuk aktivasi akun.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
