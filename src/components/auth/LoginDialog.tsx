import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock, User, ShieldCheck } from "lucide-react";

interface LoginDialogProps {
  children: React.ReactNode;
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi delay pengecekan database
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Kredensial Tidak Ditemukan",
        description: "ID Member atau Password tidak terdaftar dalam database IT CLUB SMK 1 TRIPLE \"J\". Silakan hubungi pengurus untuk aktivasi.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-card border-primary/20">
        <DialogHeader className="space-y-3">
          <div className="mx-auto size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <ShieldCheck className="size-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center tracking-tight">
            Member Login
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Masukkan ID Anggota IT Club Anda untuk mengakses LMS.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="memberId">ID Member / Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input 
                id="memberId" 
                placeholder="ITC-XXXXXXX" 
                className="pl-10 bg-muted/50 border-primary/10 focus:border-primary/40"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <button type="button" className="text-[11px] text-primary hover:underline">Lupa Password?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="pl-10 bg-muted/50 border-primary/10 focus:border-primary/40"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-gold text-primary-foreground font-bold h-11"
            disabled={loading}
          >
            {loading ? "Mengecek Database..." : "Masuk ke Platform"}
          </Button>
          
          <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
            Sistem Keamanan Terintegrasi <br />
            IT CLUB SMK 1 TRIPLE "J"
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
