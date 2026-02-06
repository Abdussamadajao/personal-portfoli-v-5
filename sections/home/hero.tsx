"use client";
import { Rocket, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32">
      <div className="relative flex flex-col items-center text-center">
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight sm:wide-tracking uppercase leading-tight">
            <span className="text-primary">ajao</span>{" "}
            <span className="block sm:inline">abdussamad</span>
          </h1>
          <p className="text-primary text-xs sm:text-sm md:text-base font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase opacity-90 px-4">
            Frontend Developer
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 w-full px-4">
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Frontend Architect specializing in high-performance, cinematic web
            experiences and scalable design systems.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 md:px-10 h-12 sm:h-14 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 text-sm sm:text-base"
            >
              <Rocket className="text-lg sm:text-xl" />
              View Projects
            </button>
            <button
              onClick={() => window.open("https://docs.google.com/document/d/1-xvuwTis1VXMMyAnifxKnS6p3HBpyyuOD5r3GWd7uHk/edit?usp=sharing", "_blank")}
              className="w-full sm:w-auto bg-card hover:bg-card/80 text-white px-6 sm:px-8 md:px-10 h-12 sm:h-14 rounded-lg font-bold border border-border transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download className="text-lg sm:text-xl" />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
