import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Categories } from "@/components/landing/Categories";
import { HowWeLearn } from "@/components/landing/HowWeLearn";
import { Showcase } from "@/components/landing/Showcase";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <HowWeLearn />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
