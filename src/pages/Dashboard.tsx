import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  LogOut, 
  Zap,
  CheckCircle2,
  Lock,
  Cpu,
  Swords,
  Network,
  Plus,
  ChevronRight,
  ArrowRight,
  Target,
  Trophy,
  Activity,
  Flame,
  Play
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  
  // --- STATE (Mocking current progress) ---
  const [completedCoreCount] = useState(2); // 2 out of 41
  const [major, setMajor] = useState<keyof typeof SPECIALIZATIONS | null>(null);
  const [second] = useState<keyof typeof SPECIALIZATIONS | null>(null);

  const coreProgress = (completedCoreCount / 41) * 100;
  const isCoreFinished = coreProgress === 100;
  
  const badge = useMemo(() => {
    if (second) return { label: "Elite", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" };
    if (major) return { label: "Specialist", color: "text-primary bg-primary/10 border-primary/20" };
    return { label: "Novice", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" };
  }, [major, second]);

  return (
    <div className="flex min-h-screen bg-[#0A0E14] text-foreground font-sans overflow-x-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0D121A] sticky top-0 h-screen z-20">
        <div className="p-8">
          <div className="flex items-center gap-4 group">
            <div className="grid place-items-center size-14 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]">
              <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain scale-110" />
            </div>
            <span className="font-bold tracking-tight text-xl">
              IT<span className="text-gradient-gold">Club</span>
            </span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { label: "Dashboard", icon: LayoutDashboard, active: true },
            { label: "Materi", icon: BookOpen, href: "/materi" },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => link.href && navigate(link.href)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                link.active 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(234,179,8,0.05)]" 
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
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={() => navigate("/")}
          >
            <LogOut className="size-5" />
            Keluar
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-[#0A0E14]/80 backdrop-blur-xl sticky top-0 z-10 px-6 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground hidden sm:block">
              Pusat Kendali
            </h2>
          </div>
          
          <div className="flex items-center gap-5 ml-auto">
            <div className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-500", badge.color)}>
              {badge.label}
            </div>
            <div className="flex items-center gap-3 pl-5 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Anggota IT Club</p>
                <p className="text-[10px] text-muted-foreground uppercase font-mono">ITC-2024-001</p>
              </div>
              <Avatar className="size-10 border border-white/10 shadow-xl">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">ITC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-10 space-y-10 max-w-6xl mx-auto w-full">
          {/* Welcome & High Level Progress */}
          <section className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h1 className="text-3xl md:text-5xl font-black tracking-tightest">
                Halo, <span className="text-gradient-gold">Anggota</span>! 👋
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Lanjutkan perjalanan teknismu. CORE baru selesai {Math.round(coreProgress)}%.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/materi")}
                  className="bg-gradient-gold text-primary-foreground font-black uppercase tracking-widest px-8 rounded-2xl shadow-gold hover:scale-[1.02] transition-transform flex gap-3"
                >
                  <Play className="size-5 fill-current" /> Lanjut Belajar
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/materi")}
                  className="border-white/10 bg-white/5 rounded-2xl font-bold uppercase tracking-widest px-8 hover:bg-white/10"
                >
                  Semua Materi
                </Button>
              </div>
            </div>

            {/* Streak / Activity Mini Card */}
            <Card className="bg-white/[0.02] border-white/5 p-6 rounded-3xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                  <Flame className="size-6 fill-current" />
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Learning Streak</span>
              </div>
              <div>
                <p className="text-4xl font-black">12</p>
                <p className="text-sm text-muted-foreground">Hari berturut-turut</p>
              </div>
            </Card>
          </section>

          {/* SECTION 1: STATUS & TRACK PROGRESS */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Mastery */}
            <Card className="bg-[#0D121A] border-white/5 p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Target className="size-6" />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight">Fase CORE</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Mastery Progress</span>
                  <span className="font-mono text-primary font-bold">{Math.round(coreProgress)}%</span>
                </div>
                <Progress value={coreProgress} className="h-2 bg-white/5" />
                <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest leading-relaxed">
                  {completedCoreCount} dari 41 modul dasar selesai
                </p>

              </div>
            </Card>

            {/* Major Path */}
            <Card className="bg-[#0D121A] border-white/5 p-8 rounded-[2rem] space-y-6 relative overflow-hidden group">
              {!isCoreFinished && (
                <div className="absolute inset-0 z-10 bg-[#0D121A]/80 backdrop-blur-sm flex items-center justify-center text-center p-6">
                  <div className="space-y-2">
                    <Lock className="size-6 text-primary mx-auto opacity-50" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Selesaikan CORE</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="size-6" />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight">Major Track</h3>
              </div>
              <div className="space-y-2">
                {major ? (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-white/5 text-primary">
                      {(() => {
                        const Icon = SPECIALIZATIONS[major].icon;
                        return <Icon className="size-6" />;
                      })()}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{SPECIALIZATIONS[major].title}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Active Path</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm italic">Belum memilih jalur...</p>
                )}
              </div>
            </Card>

            {/* Overall Activity */}
            <Card className="bg-[#0D121A] border-white/5 p-8 rounded-[2rem] space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Activity className="size-6" />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight">Statistik</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5">
                  <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest">Tugas</p>
                  <p className="text-2xl font-black">12</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5">
                  <p className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest">Modul</p>
                  <p className="text-2xl font-black">34</p>
                </div>
              </div>
            </Card>
          </section>

          {/* SECTION 2: TRACK CONTROL (Visualization) */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight px-4">Alur Pembelajaran</h2>
            <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0">
              {/* Step 1: CORE */}
              <div className="flex-1 w-full p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center space-y-4">
                <div className={cn("size-14 rounded-2xl flex items-center justify-center transition-all shadow-xl", isCoreFinished ? "bg-emerald-500 text-white" : "bg-primary text-primary-foreground")}>
                  {isCoreFinished ? <CheckCircle2 className="size-8" /> : <Zap className="size-8" />}
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs">Fase CORE</h4>
                  <p className="text-xs text-muted-foreground mt-1">Foundational Basics</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-muted-foreground px-4">
                <ChevronRight className="size-8 opacity-20" />
              </div>

              {/* Step 2: Major */}
              <div className={cn(
                "flex-1 w-full p-8 rounded-3xl border flex flex-col items-center text-center space-y-4 transition-all duration-700",
                major ? "bg-white/[0.03] border-white/5" : "bg-white/[0.01] border-dashed border-white/10 opacity-50"
              )}>
                <div className={cn("size-14 rounded-2xl flex items-center justify-center transition-all", major ? "bg-primary text-primary-foreground shadow-xl" : "bg-white/5 text-muted-foreground")}>
                  <Trophy className="size-8" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs">Major Track</h4>
                  <p className="text-xs text-muted-foreground mt-1">{major ? SPECIALIZATIONS[major].title : "Locked Selection"}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center text-muted-foreground px-4">
                <ChevronRight className="size-8 opacity-20" />
              </div>

              {/* Step 3: Elite */}
              <div className={cn(
                "flex-1 w-full p-8 rounded-3xl border flex flex-col items-center text-center space-y-4 transition-all duration-700",
                second ? "bg-white/[0.03] border-white/5" : "bg-white/[0.01] border-dashed border-white/10 opacity-30"
              )}>
                <div className={cn("size-14 rounded-2xl flex items-center justify-center transition-all", second ? "bg-amber-500 text-white shadow-xl" : "bg-white/5 text-muted-foreground")}>
                  <Plus className="size-8" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs">Elite Multi-Track</h4>
                  <p className="text-xs text-muted-foreground mt-1">{second ? SPECIALIZATIONS[second].title : "Locked Multi-Track"}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                variant="ghost" 
                className="text-primary hover:bg-primary/10 rounded-xl gap-2 font-black uppercase tracking-widest text-xs px-8 h-12"
                onClick={() => navigate("/materi")}
              >
                Atur Spesialisasi & Jalur <ArrowRight className="size-4" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
