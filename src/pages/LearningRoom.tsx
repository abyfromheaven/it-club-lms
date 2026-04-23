import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  PlayCircle, 
  CheckCircle2, 
  Download,
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

  const currentTrack = MATERIALS_DATA.find(t => t.id === trackId) || MATERIALS_DATA[0];
  const allModulesInTrack = currentTrack.chapters.flatMap(ch => ch.modules);
  const currentModule = allModulesInTrack.find(m => m.id === moduleId) || allModulesInTrack[0];
  const currentIndex = allModulesInTrack.findIndex(m => m.id === moduleId);

  const handleComplete = () => {
    setIsCompleted(true);
    toast({
      title: "Modul Selesai!",
      description: `Selamat! Kamu telah menyelesaikan ${currentModule.title}.`,
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#0A0E14] text-foreground overflow-hidden selection:bg-primary/30 relative font-sans text-left">
      <div className="absolute top-[-5%] left-[-5%] size-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <header className="h-16 border-b border-white/5 bg-[#0A0E14]/40 backdrop-blur-xl flex items-center px-4 lg:px-8 justify-between shrink-0 z-30">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/materi" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group">
            <div className="size-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-gold">
              <ChevronLeft className="size-4" />
            </div>
            <span className="hidden md:inline text-[10px] font-black uppercase tracking-widest">Materi Hub</span>
          </Link>
          <div className="h-6 w-px bg-white/10 hidden md:block" />
          <h1 className="text-xs md:text-sm font-black text-white uppercase tracking-widest truncate max-w-[200px] md:max-w-none text-left">
            {currentModule.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleComplete}
            disabled={isCompleted}
            className={cn(
              "h-10 px-8 rounded-full font-black text-[10px] uppercase tracking-widest gap-2 transition-all duration-500",
              isCompleted ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-gradient-gold text-primary-foreground shadow-gold"
            )}
          >
            {isCompleted ? <CheckCircle2 className="size-3.5" /> : <Zap className="size-3.5 fill-current" />}
            {isCompleted ? "Modul Selesai" : "Tandai Selesai"}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative z-10">
        <ScrollArea className="flex-1">
          <div className="max-w-5xl mx-auto p-4 lg:p-10 space-y-12 pb-20">
            <AnimatePresence mode="wait">
              <motion.div key={moduleId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black border border-white/5 shadow-2xl group ring-1 ring-white/10">
                  <iframe src={`https://www.youtube.com/embed/${currentModule.videoId || "dQw4w9WgXcQ"}?rel=0&modestbranding=1&autoplay=0`} title={currentModule.title} className="absolute inset-0 w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" allowFullScreen></iframe>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-10 text-left">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-black tracking-tightest flex items-center gap-3 text-white uppercase">
                        <span className="size-2 rounded-full bg-primary animate-pulse shadow-gold" /> Deskripsi Materi
                      </h2>
                      <div className="prose prose-invert prose-primary max-w-none bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-inner backdrop-blur-sm">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{`# ${currentModule.title}\n\nSelamat datang di modul ini!`}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8 text-left">
                    <h2 className="text-xl font-black tracking-tightest flex items-center gap-3 text-white uppercase"><Download className="size-5 text-primary" /> Resources</h2>
                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/20 relative overflow-hidden backdrop-blur-md">
                      <h3 className="font-black text-lg mb-3 text-white">Butuh Bantuan?</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-8">Tanyakan di Discord IT CLUB.</p>
                      <Button className="w-full bg-white/5 hover:bg-primary hover:text-primary-foreground border border-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] h-12 shadow-gold">Buka Discord</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollArea>

        <aside className={cn("fixed inset-y-0 right-0 z-20 w-80 bg-[#0A0E14]/80 border-l border-white/5 backdrop-blur-2xl transition-transform lg:relative lg:translate-x-0 flex flex-col", sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0")}>
          <div className="p-8 border-b border-white/5 text-left">
            <h2 className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.3em] mb-2 opacity-60">// Track Playlist</h2>
            <h3 className="text-lg font-black tracking-tightest text-white uppercase">{currentTrack.title}</h3>
          </div>
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              {allModulesInTrack.map((m, idx) => {
                const isActive = m.id === moduleId;
                return (
                  <button key={m.id} onClick={() => { navigate(`/learn/${trackId}/${m.id}`); setSidebarOpen(false); }} className={cn("w-full flex items-center gap-4 p-5 rounded-[1.5rem] transition-all text-left group", isActive ? "bg-primary/10 text-primary border border-primary/20 shadow-gold" : "text-muted-foreground hover:bg-white/5 hover:text-white")}>
                    <div className={cn("size-10 rounded-[1rem] flex items-center justify-center text-[10px] font-black shrink-0 transition-all", isActive ? "bg-primary text-primary-foreground scale-110 shadow-gold" : "bg-white/5 group-hover:bg-white/10")}>{isActive ? <Play className="size-3.5 fill-current" /> : idx + 1}</div>
                    <div className="flex-1 min-w-0 z-10">
                      <p className={cn("text-xs font-black truncate leading-tight uppercase tracking-tight", isActive ? "text-primary" : "group-hover:text-white")}>{m.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </aside>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[15] lg:hidden" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default LearningRoom;
