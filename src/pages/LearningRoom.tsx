import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  PlayCircle, 
  CheckCircle2, 
  FileText, 
  Download,
  ExternalLink,
  Menu,
  X,
  Zap,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MATERIALS_DATA } from "@/data/materials";

const LearningRoom = () => {
  const { track: trackId = "CORE", moduleId = "core-1" } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Find the current track and module from central data
  const currentTrack = MATERIALS_DATA.find(t => t.id === trackId) || MATERIALS_DATA[0];
  
  // Flatten all modules in the track to find the current one and the playlist
  const allModulesInTrack = currentTrack.chapters.flatMap(ch => ch.modules);
  const currentModule = allModulesInTrack.find(m => m.id === moduleId) || allModulesInTrack[0];
  
  const currentIndex = allModulesInTrack.findIndex(m => m.id === moduleId);

  const handleComplete = () => {
    setIsCompleted(true);
    toast({
      title: "Modul Selesai!",
      description: `Selamat! Kamu telah menyelesaikan ${currentModule.title}.`,
      variant: "default",
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#0A0E14] text-foreground overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-white/5 bg-[#0D121A]/80 backdrop-blur-md flex items-center px-4 lg:px-8 justify-between shrink-0 z-20">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link 
            to="/materi" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group"
          >
            <div className="size-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
              <ChevronLeft className="size-5" />
            </div>
            <span className="hidden md:inline text-sm font-bold uppercase tracking-widest">Materi Hub</span>
          </Link>
          
          <div className="h-6 w-px bg-white/10 hidden md:block" />
          
          <h1 className="text-sm md:text-lg font-black text-[#D4AF37] uppercase tracking-tighter truncate max-w-[200px] md:max-w-none">
            {currentModule.title}
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleComplete}
            disabled={isCompleted}
            className={cn(
              "h-10 px-6 rounded-full font-bold text-xs uppercase tracking-widest gap-2 transition-all duration-500",
              isCompleted 
                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" 
                : "bg-gradient-gold text-primary-foreground shadow-gold animate-pulse-glow"
            )}
          >
            {isCompleted ? <CheckCircle2 className="size-4" /> : <Zap className="size-4 fill-current" />}
            {isCompleted ? "Completed" : "Mark as Complete"}
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Main Content (Left Column) */}
        <ScrollArea className="flex-1">
          <div className="max-w-5xl mx-auto p-4 lg:p-10 space-y-8 pb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={moduleId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Video Player */}
                <div className="relative aspect-video rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-black border border-white/5 shadow-2xl group ring-1 ring-white/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentModule.videoId || "dQw4w9WgXcQ"}?rel=0&modestbranding=1&autoplay=0`}
                    title={currentModule.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Description & Resources */}
                <div className="mt-10 grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-black tracking-tightest flex items-center gap-3 text-white">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        Deskripsi Materi
                      </h2>
                      <div className="prose prose-invert prose-primary max-w-none bg-[#0D121A] border border-white/5 p-6 md:p-10 rounded-[2rem] shadow-inner">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {`# ${currentModule.title}\n\nSelamat datang di modul ini! Kita akan membahas secara mendalam tentang ${currentModule.title.toLowerCase()}.\n\n### Persiapan:\n1. Pastikan koneksi internet stabil.\n2. Siapkan catatan untuk poin-poin penting.\n3. Jangan ragu untuk mengulang bagian yang sulit.`}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-6">
                    <h2 className="text-xl font-black tracking-tightest flex items-center gap-3 text-white">
                      <Download className="size-5 text-primary" />
                      Resources
                    </h2>
                    <div className="space-y-3">
                      <div className="p-8 rounded-2xl border border-dashed border-white/10 text-center">
                        <p className="text-sm text-muted-foreground font-mono">No resources available for this lesson.</p>
                      </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap className="size-16" />
                      </div>
                      <h3 className="font-black text-lg mb-2">Butuh Bantuan?</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                        Tanyakan langsung di forum diskusi anggota IT CLUB SMK 1 TRIPLE "J" via Discord.
                      </p>
                      <Button className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 rounded-xl font-bold uppercase tracking-widest text-xs h-12 transition-all">
                        Buka Discord
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollArea>

        {/* Sidebar Playlist (Right Column) */}
        <aside className={cn(
          "fixed inset-y-0 right-0 z-10 w-80 bg-[#0D121A] border-l border-white/5 transition-transform duration-300 transform lg:relative lg:translate-x-0 flex flex-col pt-16 lg:pt-0",
          sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}>
          <div className="p-6 border-b border-white/5">
            <h2 className="text-[10px] font-mono text-primary uppercase tracking-widest mb-1">// Track Playlist</h2>
            <h3 className="text-lg font-black tracking-tightest">{currentTrack.title}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${((currentIndex + 1) / allModulesInTrack.length) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">{currentIndex + 1}/{allModulesInTrack.length}</span>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-3 space-y-2">
              {allModulesInTrack.map((m, idx) => {
                const isActive = m.id === moduleId;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      navigate(`/learn/${trackId}/${m.id}`);
                      setSidebarOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group relative overflow-hidden",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-pill"
                        className="absolute inset-0 border border-primary/30 rounded-2xl shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]"
                      />
                    )}
                    
                    <div className={cn(
                      "size-10 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-500",
                      isActive 
                        ? "bg-primary text-primary-foreground scale-110 shadow-gold" 
                        : "bg-white/5 group-hover:bg-white/10"
                    )}>
                      {isActive ? <Play className="size-4 fill-current" /> : idx + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0 z-10">
                      <p className={cn(
                        "text-sm font-bold truncate leading-tight transition-colors",
                        isActive ? "text-primary" : "group-hover:text-white"
                      )}>
                        {m.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <PlayCircle className="size-3 opacity-50" />
                        <span className="text-[10px] font-mono uppercase opacity-50">{m.duration}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </aside>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[5] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default LearningRoom;
