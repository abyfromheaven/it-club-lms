import { motion } from "framer-motion";
import { Cpu, Swords, Network, ArrowUpRight } from "lucide-react";

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
];

export const Categories = () => {
  return (
    <section id="spesialisasi" className="py-24 overflow-hidden bg-transparent">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">// Core Tracks</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tightest leading-tight">
              Fokus kurikulum <br />
              <span className="text-gradient-gold">berbasis spesialisasi</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Dari fundamental hingga advanced — pilih jalur dan mulai eksplorasi sesuai passion teknologi kamu.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md"
            >
              {/* Decorative Glow inside card */}
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-primary/5 blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />

              <div className="relative flex items-start justify-between">
                <div className="grid place-items-center size-16 rounded-[1.5rem] bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground shadow-lg transition-all duration-500">
                  <cat.icon className="size-8" strokeWidth={1.5} />
                </div>
                <div className="size-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all">
                  <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              <div className="relative mt-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80 font-black px-2 py-1 rounded bg-primary/5 border border-primary/10">{cat.tag}</span>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{cat.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
