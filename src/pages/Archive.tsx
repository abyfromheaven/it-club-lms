import { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  Lock, 
  ChevronRight, 
  LayoutDashboard,
  BookOpen,
  LogOut,
  Zap,
  Play,
  Clock,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useNavigate, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MATERIALS_DATA, Track, Module } from "@/data/materials";

const SkeletonCard = () => (
  <div className="w-64 md:w-72 aspect-[4/5] bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col animate-pulse">
    <div className="flex-1 bg-white/5" />
    <div className="p-6 space-y-3">
      <div className="h-2 w-20 bg-white/5 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
      <div className="h-4 w-2/3 bg-white/5 rounded" />
      <div className="pt-2 h-1.5 w-full bg-white/5 rounded-full" />
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const Archive = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Simulate loading on filter change
  const handleCategoryChange = (cat: string) => {
    setIsLoading(true);
    setSelectedCategory(cat);
    setTimeout(() => setIsLoading(false), 400);
  };

  // Simulation: CORE is 75% finished, so Specialization is "Locked"
  const isCoreFinished = false; 

  const categories = ["Semua", "Hardware & OS", "Networking", "CLI", "Web", "IoT", "Security"];
  const filters = ["Semua", "Belum Ditonton", "Selesai", "Wajib", "Opsional"];

  // Mock progress data for demo purposes
  const mockProgress: Record<string, number> = {
    "core-1": 100,
    "core-6": 45,
    "core-15": 10,
  };

  const featuredModule = MATERIALS_DATA[0].chapters[0].modules[0];

  return (
    <div className="flex min-h-screen bg-[#0A0E14] text-foreground font-sans">
      {/* Sidebar - Spotify Style Left Rail */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0D121A] sticky top-0 h-screen z-20">
        <div className="p-8">
          <Link to="/dashboard" className="flex items-center gap-3 group">
            <div className="grid place-items-center size-10 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain scale-110" />
            </div>
            <span className="font-bold tracking-tight text-xl">
              IT<span className="text-gradient-gold">Club</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {[
            { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
            { label: "Materi Hub", icon: BookOpen, active: true },
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

        <div className="px-6 py-4">
           <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
              <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">Your Progress</p>
              <p className="text-sm font-bold">75% CORE Mastered</p>
              <div className="h-1.5 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-primary w-[75%]" />
              </div>
           </div>
        </div>

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

      {/* Main Content Hub */}
      <main className="flex-1 min-w-0 bg-gradient-to-b from-[#1A1F26] to-[#0A0E14]">
        {/* Sticky Search Header */}
        <header className="h-20 sticky top-0 z-10 flex items-center px-6 md:px-12 bg-[#0A0E14]/40 backdrop-blur-md border-b border-white/5">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Apa yang ingin kamu pelajari hari ini?"
              className="pl-12 bg-white/5 border-white/10 focus:border-primary/40 h-11 rounded-full text-sm"
            />
          </div>
        </header>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-6 md:p-12 space-y-12">
            
            {/* FEATURED / CONTINUE LEARNING */}
            <section>
              <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl">
                <img 
                  src={featuredModule.thumb || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"} 
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-4 max-w-2xl">
                  <Badge className="bg-primary text-primary-foreground font-mono uppercase tracking-[0.2em] px-3 py-1 text-[10px]">Featured Module</Badge>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tightest leading-none">
                    {featuredModule.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                    Pelajari dasar-dasar komponen fisik yang membentuk sebuah sistem komputer modern. Wajib bagi setiap pemula.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <Button 
                      onClick={() => navigate(`/learn/CORE/${featuredModule.id}`)}
                      className="bg-primary text-primary-foreground rounded-full px-8 h-12 font-black uppercase tracking-widest text-xs gap-3 shadow-gold hover:scale-105 transition-all"
                    >
                      <Play className="size-4 fill-current" /> Mulai Belajar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 px-6 h-12"
                    >
                      Detail Modul
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* CATEGORY & FILTER CHIPS */}
            <section className="space-y-6">
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                   {categories.map(cat => (
                     <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={cn(
                        "px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                        selectedCategory === cat 
                          ? "bg-primary text-primary-foreground shadow-gold" 
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
                      )}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
                 
                 <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                   <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                      <Filter className="size-3 text-primary" />
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Filter:</span>
                   </div>
                   {filters.map(f => (
                     <button
                      key={f}
                      onClick={() => {
                        setIsLoading(true);
                        setActiveFilter(f);
                        setTimeout(() => setIsLoading(false), 400);
                      }}
                      className={cn(
                        "px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
                        activeFilter === f 
                          ? "bg-white/10 text-white border-white/20" 
                          : "bg-transparent text-muted-foreground hover:text-white border-transparent"
                      )}
                     >
                       {f}
                     </button>
                   ))}
                 </div>
               </div>
            </section>

            {/* MAIN HUB SECTIONS */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                <div className="space-y-12">
                   {[1, 2].map(i => (
                     <div key={i} className="space-y-4">
                        <div className="h-6 w-48 bg-white/5 rounded-md animate-pulse ml-2" />
                        <div className="flex gap-6 overflow-hidden ml-2">
                           {[1, 2, 3, 4].map(j => <SkeletonCard key={j} />)}
                        </div>
                     </div>
                   ))}
                </div>
              ) : (
                <motion.div
                  key="content"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-12"
                >
                  {MATERIALS_DATA.map((track) => {
                    const isTrackMatch = track.chapters.some(ch => 
                      ch.modules.some(m => 
                        (selectedCategory === "Semua" || m.category === selectedCategory) &&
                        (searchQuery === "" || m.title.toLowerCase().includes(searchQuery.toLowerCase()))
                      )
                    );

                    if (!isTrackMatch) return null;

                    return (
                      <section key={track.id} className={cn("space-y-8", track.isLocked && !isCoreFinished && "opacity-50")}>
                        <div className="flex items-end justify-between px-2">
                          <div className="space-y-1">
                            <h3 className="text-2xl font-black tracking-tightest flex items-center gap-3">
                              {track.title}
                              {track.isLocked && !isCoreFinished && <Lock className="size-5 text-muted-foreground" />}
                            </h3>
                            <p className="text-sm text-muted-foreground">{track.description}</p>
                          </div>
                        </div>

                        <div className="space-y-12">
                          {track.chapters.map((chapter) => (
                            <div key={chapter.id} className="space-y-4">
                              <h4 className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-[0.3em] px-2 flex items-center gap-3">
                                <span className="h-px flex-1 bg-white/5" />
                                {chapter.title}
                                <span className="h-px flex-1 bg-white/5" />
                              </h4>

                              <ScrollArea className="w-full whitespace-nowrap">
                                <div className="flex gap-6 pb-6 px-2">
                                  {chapter.modules
                                    .filter(module => {
                                      const matchesCategory = selectedCategory === "Semua" || module.category === selectedCategory;
                                      const matchesSearch = searchQuery === "" || module.title.toLowerCase().includes(searchQuery.toLowerCase());
                                      
                                      // Status filter logic
                                      let matchesStatus = true;
                                      if (activeFilter === "Selesai") matchesStatus = mockProgress[module.id] === 100;
                                      if (activeFilter === "Belum Ditonton") matchesStatus = !mockProgress[module.id];
                                      if (activeFilter === "Wajib") matchesStatus = !!module.isWajib;
                                      if (activeFilter === "Opsional") matchesStatus = !!module.isOptional;

                                      return matchesCategory && matchesSearch && matchesStatus;
                                    })
                                    .map((module) => (
                                      <motion.div
                                      key={module.id}
                                      variants={itemVariants}
                                      whileHover={{ 
                                        y: -12,
                                        boxShadow: "0 20px 40px -15px rgba(212,175,55,0.15)",
                                        borderColor: "rgba(212,175,55,0.4)"
                                      }}
                                      onClick={() => {
                                        if (!track.isLocked || isCoreFinished) {
                                          navigate(`/learn/${track.id}/${module.id}`);
                                        }
                                      }}
                                      className={cn(
                                        "group relative w-64 md:w-72 aspect-[4/5] bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col cursor-pointer transition-colors duration-300",
                                        track.isLocked && !isCoreFinished ? "grayscale cursor-not-allowed" : "hover:bg-white/[0.06]"
                                      )}
                                    >
                                      {/* Thumbnail Area */}
                                      <div className="relative flex-1 overflow-hidden">
                                        <img 
                                          src={module.thumb || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"} 
                                          className="size-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D121A] to-transparent opacity-80" />
                                        
                                        {track.isLocked && !isCoreFinished ? (
                                          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="size-12 rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                                              <Lock className="size-5 text-white" />
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="absolute bottom-4 left-4 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <Play className="size-5 fill-current" />
                                          </div>
                                        )}

                                        <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-white flex items-center gap-1.5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                          <Clock className="size-3 text-primary" />
                                          {module.duration}
                                        </div>

                                        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                                          {module.isWajib && <Badge className="bg-primary/20 text-primary border-primary/30 text-[8px] font-mono uppercase">Wajib</Badge>}
                                          {module.isPraktik && <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 text-[8px] font-mono uppercase">Praktik</Badge>}
                                        </div>
                                      </div>

                                      {/* Content Area */}
                                      <div className="p-6 space-y-3">
                                        <div className="flex items-center gap-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                                          <span>{module.category}</span>
                                        </div>
                                        <h5 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 whitespace-normal">
                                          {module.title}
                                        </h5>
                                        
                                        <div className="pt-2">
                                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                              <div 
                                                className={cn(
                                                  "h-full transition-all duration-1000",
                                                  (mockProgress[module.id] || 0) === 100 ? "bg-emerald-500" : "bg-primary"
                                                )} 
                                                style={{ width: `${mockProgress[module.id] || 0}%` }}
                                              />
                                           </div>
                                           {mockProgress[module.id] && (
                                             <div className="flex justify-between mt-1.5">
                                                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                                                  {mockProgress[module.id] === 100 ? "Selesai" : "Lanjut Menonton"}
                                                </span>
                                                <span className="text-[9px] font-mono text-primary">{mockProgress[module.id]}%</span>
                                             </div>
                                           )}
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                                <ScrollBar orientation="horizontal" className="h-2" />
                              </ScrollArea>
                            </div>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Archive;
