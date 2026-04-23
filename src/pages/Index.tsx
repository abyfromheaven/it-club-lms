import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Categories } from "@/components/landing/Categories";
import { MaterialPreview } from "@/components/landing/MaterialPreview";
import { HowWeLearn } from "@/components/landing/HowWeLearn";
import { Footer } from "@/components/landing/Footer";
import LogoLoop from "@/components/ui/logo-loop";

const techLogos = [
  { id: 1, src: "https://cdn.simpleicons.org/virtualbox/white", alt: "VirtualBox" },
  { id: 2, src: "https://cdn.simpleicons.org/linux/white", alt: "Linux" },
  { id: 3, src: "https://cdn.simpleicons.org/kalilinux/white", alt: "Kali Linux" },
  { id: 4, src: "https://cdn.simpleicons.org/ubuntu/white", alt: "Ubuntu" },
  { id: 5, src: "https://cdn.simpleicons.org/youtube/white", alt: "YouTube" },
  { id: 6, src: "https://cdn.simpleicons.org/cisco/white", alt: "Cisco" },
  { id: 8, src: "https://cdn.simpleicons.org/nginx/white", alt: "Nginx" },
  { id: 9, src: "https://cdn.simpleicons.org/json/white", alt: "JSON" },
  { id: 12, src: "https://cdn.simpleicons.org/mikrotik/white", alt: "MikroTik" },
  { id: 13, src: "https://cdn.simpleicons.org/tplink/white", alt: "TP-Link" },
  { id: 14, src: "/D-Link-Logo.png", alt: "D-Link" },
  { id: 15, src: "/Logo_nmap.png", alt: "Nmap" },
  { id: 16, src: "https://cdn.simpleicons.org/burpsuite/white", alt: "Burp Suite" },
  { id: 17, src: "https://cdn.simpleicons.org/postman/white", alt: "Postman" },
  { id: 18, src: "https://cdn.simpleicons.org/wireshark/white", alt: "Wireshark" },
  { id: 19, src: "https://cdn.simpleicons.org/metasploit/white", alt: "Metasploit" },
  { id: 20, src: "https://cdn.simpleicons.org/arduino/white", alt: "Arduino" },
  { id: 21, src: "https://cdn.simpleicons.org/espressif/white", alt: "ESP" },
  { id: 22, src: "https://cdn.simpleicons.org/google/white", alt: "Google Dorking" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        
        <div className="py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="container mb-10 text-center">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.5em]">
              Teknologi & Tools yang Dipelajari
            </p>
          </div>
          <LogoLoop items={techLogos} speed={40} gap={100} height={55} />
        </div>

        <Stats />
        <Categories />
        <MaterialPreview />
        <HowWeLearn />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
