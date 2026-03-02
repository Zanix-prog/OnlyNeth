// components/Index.tsx
import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamRoster from "@/components/TeamRoster";
import ProjectsSection from "@/components/ProjectsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (isLoading) return <Preloader onComplete={() => setIsLoading(false)} />;

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#6C080A]/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#6C080A]/10 blur-[140px]" />
      </div>

      {/* Content with fade-in */}
      <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <AboutSection />
        <TeamRoster />
        <ProjectsSection />
        <JoinSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;