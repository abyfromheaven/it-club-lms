import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Network, ArrowUpRight } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "Internet of Things",
    desc: "Sensor, Arduino, & Microcontrollers",
    tag: "IoT",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Ethical Hacking & Network Defense",
    tag: "Security",
  },
  {
    icon: Network,
    title: "Computer Networking",
    desc: "Routing, Switching, & Infrastructure",
    tag: "Network",
  },
];

export const Categories = () => {
  return (
    <section id="materi" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">// Core Tracks</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest">
            Tiga jalur pembelajaran <span className="text-gradient-gold">terkurasi</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dari fundamental hingga advanced — pilih jalur dan mulai eksplorasi sesuai passion teknologi kamu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-xl bg-card gold-border gold-border-hover cursor-pointer overflow-hidden"
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
