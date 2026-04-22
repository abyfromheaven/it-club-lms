import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  { title: "Smart Home IoT Dashboard", author: "@rizky", track: "IoT", hue: 220 },
  { title: "Pentest Lab Setup", author: "@aldi", track: "Cyber Security", hue: 0 },
  { title: "Campus Network Topology", author: "@nadia", track: "Networking", hue: 160 },
  { title: "ESP32 Plant Monitor", author: "@bagas", track: "IoT", hue: 140 },
  { title: "OWASP Top 10 Scanner", author: "@dewi", track: "Cyber Security", hue: 280 },
  { title: "VLAN Simulator", author: "@hadi", track: "Networking", hue: 200 },
];

export const Showcase = () => {
  return (
    <section id="projek" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div className="max-w-xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">// Wall of Fame</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest">
              Projek <span className="text-gradient-gold">anggota</span> kami
            </h2>
          </div>
            <p className="text-sm text-muted-foreground sm:max-w-xs">
            Karya nyata dari Anggota IT Club — dari prototype hingga production-ready.
            </p>
            </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl bg-card gold-border gold-border-hover overflow-hidden"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(${p.hue} 60% 20%) 0%, hsl(${(p.hue + 40) % 360} 50% 12%) 100%)`,
                }}
              >
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-mono text-3xl font-bold text-primary/60 group-hover:scale-110 transition-transform">
                    {p.track.split(" ").map((w) => w[0]).join("")}
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-background/60 backdrop-blur border border-border text-[10px] font-mono uppercase">
                  {p.track}
                </div>
              </div>

              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground font-mono">{p.author}</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Github className="size-4 hover:text-primary transition-colors cursor-pointer" />
                  <ExternalLink className="size-4 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
