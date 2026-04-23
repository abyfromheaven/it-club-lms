import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const materials = [
  {
    title: "ESP32 & IoT Fundamental",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Cyber Security: SQL Injection",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Cisco Routing & Switching",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Linux Server Hardening",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Digital Forensics Basic",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Python for Ethical Hacking",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Advanced Wireshark Labs",
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Arduino Sensor Integration",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=400",
  },
];

const firstRow = materials.slice(0, materials.length / 2);
const secondRow = materials.slice(materials.length / 2);
const thirdRow = materials.slice(0, materials.length / 2);
const fourthRow = materials.slice(materials.length / 2);

const MaterialCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-default overflow-hidden rounded-[2rem] border p-0",
        "border-white/5 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:border-primary/30"
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full grayscale-[0.5] opacity-60" />
        <div className="absolute inset-0 bg-[#0A0E14]/40 flex items-center justify-center">
           <Lock className="size-6 text-primary/40" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-black text-white/80 uppercase tracking-widest line-clamp-1">
          {title}
        </p>
      </div>
    </figure>
  );
};

export const MaterialPreview = () => {
  return (
    <section id="materi" className="py-24 bg-transparent overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">// Curriculum Preview</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tightest leading-tight text-white">
            Intip modul <br />
            <span className="text-gradient-gold">pembelajaran internal</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Eksplorasi visual ratusan jam materi video dan laboratorium simulasi yang dirancang khusus untuk anggota aktif IT Club.
          </p>
        </div>

        <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:1200px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-50px) translateY(0px) translateZ(-100px) rotateX(15deg) rotateY(-10deg) rotateZ(10deg)",
            }}
          >
            <Marquee pauseOnHover vertical className="[--duration:25s]">
              {firstRow.map((m, i) => (
                <MaterialCard key={i} {...m} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]" vertical>
              {secondRow.map((m, i) => (
                <MaterialCard key={i} {...m} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
              {thirdRow.map((m, i) => (
                <MaterialCard key={i} {...m} />
              ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:30s]" vertical>
              {fourthRow.map((m, i) => (
                <MaterialCard key={i} {...m} />
              ))}
            </Marquee>
          </div>

          {/* Overlays to make it blend */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0A0E14] to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0E14] to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0A0E14] to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0A0E14] to-transparent z-20"></div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-[0.3em] opacity-40">
                // Locked Content - Active Members Only
            </p>
        </div>
      </div>
    </section>
  );
};
