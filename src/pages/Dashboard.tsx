import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  LogOut, 
  Zap,
  Lock,
  Cpu,
  Swords,
  Network,
  Target,
  Trophy,
  Activity,
  Flame,
  Play
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const SPECIALIZATIONS = {
  IoT: { title: "Internet of Things", icon: Cpu, color: "text-blue-400" },
  CySec: { title: "Cyber Security", icon: Swords, color: "text-red-400" },
  Networking: { title: "Networking", icon: Network, color: "text-emerald-400" }
};

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [completedCoreCount] = useState(2);
  const [major] = useState<keyof typeof SPECIALIZATIONS | null>(null);
  const [second] = useState<keyof typeof SPECIALIZATIONS | null>(null);

  const coreProgress = (completedCoreCount / 41) * 100;
  const isCoreFinished = coreProgress === 100;
  
  const badge = useMemo(() => {
    if (second) return { label: "Elite", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" };
    if (major) return { label: "Specialist", color: "text-primary bg-primary/10 border-primary/20" };
    return { label: "Novice", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" };
  }, [major, second]);

  return (
    <div className="flex min-h-screen bg-[#0A0E14] text-foreground font-sans overflow-x-hidden selection:bg-primary/30 relative">
      {/* Global Atmospheric Glows */}
      <div className="absolute top-[-10%] right-[-10%] size-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] size-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0A0E14]/60 backdrop-blur-xl sticky top-0 h-screen z-20">
        <div className="p-8 text-left">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="grid place-items-center size-12 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-gold transition-all group-hover:border-primary/50">
              <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain scale-110" />
            </div>
            <span className="font-bold tracking-tight text-xl text-white">
              IT<span className="text-gradient-gold">Club</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { label: "Dashboard", icon: LayoutDashboard, active: true },
            { label: "Materi Hub", icon: BookOpen, href: "/materi" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => link.href && navigate(link.href)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                link.active 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-gold" 
                  : "text-muted-foreground hover:bg-white/5"
              )}
            >
              <link.icon className="size-5" />
              <span className="font-medium">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-white/5">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl"
            onClick={() => navigate("/")}
          >
            <LogOut className="size-5" />
            Keluar
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10">
        <header className="h-20 border-b border-white/5 bg-[#0A0E14]/40 backdrop-blur-xl sticky top-0 z-30 px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary/60 hidden sm:block">
              // Control Center
            </h2>
          </div>
          
          <div className="flex items-center gap-5 ml-auto">
            <div className={cn("px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-md transition-all duration-500", badge.color)}>
              {badge.label}
            </div>
            <div className="flex items-center gap-3 pl-5 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-white uppercase tracking-tight">Anggota IT Club</p>
                <p className="text-[9px] text-muted-foreground uppercase font-mono">ITC-2024-001</p>
              </div>
              <Avatar className="size-10 border border-white/10 shadow-gold">
                <AvatarFallback className="bg-primary/10 text-primary font-black text-xs text-center leading-[40px]">ITC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-12 max-w-6xl mx-auto w-full">
          <section className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-left">
              <h1 className="text-4xl md:text-6xl font-black tracking-tightest leading-tight text-white uppercase">
                HALO, <br />
                <span className="text-gradient-gold">ANGGOTA</span>! 👋
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Lanjutkan perjalanan teknismu. CORE baru selesai {Math.round(coreProgress)}%.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/materi")}
                  className="bg-gradient-gold text-primary-foreground font-black uppercase tracking-widest text-xs px-10 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform flex gap-3 h-14"
                >
                  <Play className="size-4 fill-current" /> Lanjut Belajar
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/materi")}
                  className="border-white/10 bg-white/5 backdrop-blur-md rounded-2xl font-bold uppercase tracking-widest text-xs px-10 hover:bg-white/10 h-14"
                >
                  Semua Materi
                </Button>
              </div>
            </div>

            <Card className="bg-white/[0.03] border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between backdrop-blur-sm hover:border-primary/30 transition-all duration-500 text-left">
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-lg">
                  <Flame className="size-7 fill-current" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-60">Learning Streak</span>
              </div>
              <div className="mt-8">
                <p className="text-5xl font-black tracking-tighter text-white">12</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest mt-1">Hari berturut-turut</p>
              </div>
            </Card>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/[0.03] border-white/5 p-8 rounded-[2.5rem] space-y-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 text-left">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                  <Target className="size-6" />
                </div>
                <h3 className="font-black text-lg uppercase tracking-widest text-white">Fase CORE</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest">
                  <span className="text-muted-foreground font-bold">Mastery Progress</span>
                  <span className="text-primary font-black">{Math.round(coreProgress)}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-primary shadow-gold transition-all duration-1000" style={{ width: `${coreProgress}%` }} />
                </div>
                <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest leading-relaxed opacity-60">
                  {completedCoreCount} / 41 Modul Dasar
                </p>
              </div>
            </Card>

            <Card className="bg-white/[0.03] border-white/5 p-8 rounded-[2.5rem] space-y-8 relative overflow-hidden group backdrop-blur-sm hover:border-primary/30 transition-all duration-500 text-left">
              {!isCoreFinished && (
                <div className="absolute inset-0 z-10 bg-[#0A0E14]/80 backdrop-blur-md flex items-center justify-center text-center p-6">
                  <div className="space-y-4">
                    <div className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto shadow-inner">
                       <Lock className="size-5 text-primary/40" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">CORE Locked</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Trophy className="size-6" />
                </div>
                <h3 className="font-black text-lg uppercase tracking-widest text-white">Major Track</h3>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider italic">Pilih Jalur Spesialisasi...</p>
              </div>
            </Card>

            <Card className="bg-white/[0.03] border-white/5 p-8 rounded-[2.5rem] space-y-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 text-left">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <Activity className="size-6" />
                </div>
                <h3 className="font-black text-lg uppercase tracking-widest text-white">Statistik</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                  <p className="text-[9px] text-muted-foreground uppercase font-mono tracking-widest mb-2 font-bold">Tugas</p>
                  <p className="text-3xl font-black text-white leading-none">12</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                  <p className="text-[9px] text-muted-foreground uppercase font-mono tracking-widest mb-2 font-bold">Modul</p>
                  <p className="text-3xl font-black text-white leading-none">34</p>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
