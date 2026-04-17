import { motion } from "framer-motion";
import { LogIn, PlayCircle, Github } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: LogIn,
    title: "Auth",
    desc: "Login menggunakan kredensial member IT Club untuk mengakses platform.",
  },
  {
    n: "02",
    icon: PlayCircle,
    title: "Stream",
    desc: "Akses materi pembelajaran video berkualitas tinggi yang ter-embed dari YouTube.",
  },
  {
    n: "03",
    icon: Github,
    title: "Submit",
    desc: "Upload link projek GitHub kamu untuk direview dan dipajang di showcase.",
  },
];

export const HowWeLearn = () => {
  return (
    <section id="event" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 text-center mx-auto"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">// How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest">
            Tiga langkah, <span className="text-gradient-gold">level up</span>
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-4">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="grid place-items-center size-24 rounded-2xl bg-card border border-primary/30 shadow-card">
                  <s.icon className="size-9 text-primary" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-2 -right-2 grid place-items-center size-8 rounded-full bg-gradient-gold text-primary-foreground font-mono text-xs font-bold">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
