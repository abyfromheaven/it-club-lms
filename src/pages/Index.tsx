import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Categories } from "@/components/landing/Categories";
import { MaterialPreview } from "@/components/landing/MaterialPreview";
import { HowWeLearn } from "@/components/landing/HowWeLearn";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
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
