import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Materi Video" },
  { value: "20", label: "Anggota Aktif" },
];

export const Stats = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4 sm:gap-8 items-center"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="relative flex flex-col items-center text-center">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tightest text-gradient-gold">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
