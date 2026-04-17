import { motion } from "framer-motion";
import { Lock, Play, Clock, Eye } from "lucide-react";

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
];

export const MaterialPreview = () => {
  return (
    <section id="materi" className="py-24 bg-muted/10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">// Curriculum Preview</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tightest">
              Intip modul <span className="text-gradient-gold">pembelajaran internal</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Akses eksklusif ke ratusan jam materi video dan laboratorium simulasi yang dirancang khusus untuk kurikulum industri.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
            <Lock className="size-3.5" />
            Eksklusif Member Aktif
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previews.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden opacity-80 grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
            >
              {/* Image with Lock Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 blur-[2px]"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="size-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
                    <Lock className="size-6 text-primary" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/50 backdrop-blur-md text-[10px] font-mono text-white tracking-widest uppercase">
                  {item.track}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-mono mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="size-3" /> {item.views} Views
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-muted-foreground/80">
                  {item.title}
                </h3>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary/30 w-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Tertarik untuk mengakses seluruh modul di atas dan puluhan materi lainnya?
          </p>
          <span className="font-bold text-primary tracking-tight">
            Hubungi pengurus IT CLUB SMK 1 TRIPLE "J" untuk aktivasi akun.
          </span>
        </div>
      </div>
    </section>
  );
};
