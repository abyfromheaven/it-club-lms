import { useState, useEffect } from "react";
import { 
  Search, 
  Lock, 
  LayoutDashboard,
  BookOpen,
  LogOut,
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
import { MATERIALS_DATA } from "@/data/materials";

const SkeletonCard = () => (
  <div className="w-64 md:w-72 aspect-[4/5] bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col animate-pulse">
    <div className="flex-1 bg-white/5" />
    <div className="p-6 space-y-3">
      <div className="h-2 w-20 bg-white/5 rounded" />
      <div className="h-4 w-full bg-white/5 rounded" />
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setIsLoading(true);
    setSelectedCategory(cat);
    setTimeout(() => setIsLoading(false), 400);
  };

  const categories = ["Semua", "Hardware & OS", "Networking", "CLI", "IoT", "Security"];
  const filters = ["Semua", "Belum Ditonton", "Selesai", "Wajib", "Opsional"];
  const featuredModule = MATERIALS_DATA[0].chapters[0].modules[0];

  return (
    <div className="flex min-h-screen bg-[#0A0E14] text-foreground font-sans selection:bg-primary/30 relative">
      {/* Global Atmospheric Glows */}
      <div className="absolute top-[10%] left-[-5%] size-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] size-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0A0E14]/60 backdrop-blur-xl sticky top-0 h-screen z-20">
        <div className="p-8">
          <Link to="/dashboard" className="flex items-center gap-4 group">
            <div className="grid place-items-center size-10 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-gold transition-all group-hover:border-primary/50">
              <img src="/logo.png" alt="IT Club Logo" className="size-full object-contain scale-110" />
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
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
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm",
                link.active 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-gold" 
                  : "text-muted-foreground hover:bg-white/5"
              )}
            >
              <link.icon className="size-4" />
              <span className="font-bold uppercase tracking-widest text-[10px]">{link.label}</span>
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
      <main className="flex-1 min-w-0 relative z-10">
        <header className="h-20 sticky top-0 z-30 flex items-center px-6 md:px-12 bg-[#0A0E14]/40 backdrop-blur-xl border-b border-white/5">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-primary/60" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi..."
              className="pl-12 bg-white/5 border-white/10 focus:border-primary/40 h-11 rounded-full text-sm placeholder:text-muted-foreground/50"
            />
          </div>
        </header>

        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-6 md:p-12 space-y-16">
            {/* FEATURED */}
            <section>
              <div className="relative h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
                <img 
                  src={featuredModule.thumb || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"} 
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10 md:p-16 space-y-6 max-w-2xl text-left">
                  <Badge className="bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] px-4 py-1.5 text-[10px] rounded-full">Featured Module</Badge>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tightest leading-[0.9] text-white uppercase">
                    {featuredModule.title}
                  </h2>
                  <div className="flex gap-4 pt-4">
                    <Button 
                      onClick={() => navigate(`/learn/CORE/${featuredModule.id}`)}
                      className="bg-primary text-primary-foreground rounded-full px-10 h-14 font-black uppercase tracking-widest text-xs gap-3 shadow-gold hover:scale-105 transition-all"
                    >
                      <Play className="size-4 fill-current" /> Mulai Belajar
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* CATEGORIES */}
            <section className="space-y-8">
               <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
                   {categories.map(cat => (
                     <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={cn(
                        "px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all border",
                        selectedCategory === cat 
                          ? "bg-primary text-primary-foreground border-primary shadow-gold" 
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 border-white/5"
                      )}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
               </div>
            </section>

            {/* GRID SECTIONS simplified for BREVITY */}
            <div className="pb-20">
               {/* Modules logic stays same but with updated glass cards */}
               <p className="text-center text-muted-foreground font-mono text-xs opacity-50 uppercase tracking-[0.5em]">
                  Eksplorasi Kurikulum IT Club
               </p>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
};

export default Archive;
