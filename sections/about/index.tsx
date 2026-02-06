"use client";
import React from "react";
import ProfessionalHistory from "./professional-history";
import { AtSign, Download, MapPin, Phone } from "lucide-react";
import Education from "./education";
import Skills from "./skills";

const AboutContainer = () => {
  return (
    <div className="flex-1 flex justify-center px-6">
      <div className="flex w-full max-w-[1400px] mx-auto gap-12 flex-col lg:flex-row">
        <aside className="lg:sticky lg:top-20 self-start lg:w-1/3">
          <div
            className="relative border border-border rounded-2xl p-8 h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat flex flex-col"
            style={{
              backgroundImage: `url('/images/abdussamad.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-2xl z-0"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h1 className="text-white text-3xl font-bold tracking-tight leading-none mb-2">
                  ABDUSSAMAD AJAO
                </h1>
                <div className="flex items-center gap-2 text-primary">
                  <span className="w-8 h-px bg-primary" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em]">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-4 pt-4 border-t border-white/20">
                  <a
                    href="mailto:abdussamadajao@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                  >
                    <AtSign className="text-xl" />
                    <span className="text-sm font-medium">
                      abdussamadajao@gmail.com
                    </span>
                  </a>
                  <a
                    href="tel:+2348125745960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                  >
                    <Phone className="text-xl" />
                    <span className="text-sm font-medium">+2348125745960</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="text-xl" />
                    <span className="text-sm font-medium">Abuja, Nigeria</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.open("https://docs.google.com/document/d/1-xvuwTis1VXMMyAnifxKnS6p3HBpyyuOD5r3GWd7uHk/edit?usp=sharing", "_blank")}
                  className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-4 bg-primary text-white text-sm font-bold uppercase hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  <span>Download Resume</span>
                  <Download className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <div className="max-w-4xl">
            <section className="mb-24">
              <div className="flex flex-col gap-6 mb-8">
                <h2 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  01 / About
                </h2>
                <p className="text-[#9dabb9] text-lg font-normal leading-relaxed">
                  Hello! I'm a passionate frontend developer who believes that great code should not only work
                  flawlessly but also look beautiful and feel intuitive to users. My journey in technology began
                  with a simple curiosity that has grown into a deep passion for creating exceptional digital experiences.
                </p>
                <p className="text-white/80 text-base font-normal leading-relaxed">
                  I specialize in building modern web applications using cutting-edge technologies like React, Next.js, and TypeScript.
                  My expertise spans across healthcare platforms, e-commerce solutions, and enterprise applications,
                  where I've consistently delivered projects that exceed expectations.
                </p>
              </div>
            </section>
            <ProfessionalHistory />
            <Education />
            <Skills />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutContainer;
