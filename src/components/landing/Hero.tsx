import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { GridScan } from "@/components/ui/grid-scan";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0E14]">
      {/* Dynamic Background with GridScan */}
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.3}
          lineThickness={1.5}
          linesColor="#1E293B"
          gridScale={0.15}
          scanColor="#FFD700"
          scanOpacity={1.0}
          bloomIntensity={1.0}
          scanGlow={1.0}
          scanSoftness={3.0}
          enablePost={false}
          scanDuration={3}
          scanDelay={0.2}
        />
        {/* Adjusted gradients to let the light shine through more while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
              Enrollment Open - Batch 2024
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tightest leading-[1.1] text-white"
            >
              LEVEL UP YOUR <br />
              <span className="text-gradient-gold">TECH SKILLS</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Platform pembelajaran eksklusif untuk Anggota IT CLUB. 
              Kuasai IoT, Cyber Security, dan Networking dengan kurikulum standar industri.
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 pt-4 pb-20"
          >
            <LoginDialog>
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-2xl bg-gradient-gold text-primary-foreground font-black uppercase tracking-widest text-xs gap-3 shadow-gold hover:scale-[1.02] transition-all group"
              >
                Mulai Belajar <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </LoginDialog>
            
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md font-bold uppercase tracking-widest text-xs gap-3 hover:bg-white/10 transition-all"
            >
              <Play className="size-4 fill-current" /> Lihat Kurikulum
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
