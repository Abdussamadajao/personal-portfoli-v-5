"use client";
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:abdussamadajao@gmail.com",
    },
  ];

  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-white">Ajao Abdussamad</h3>
            <p className="text-white/60 text-sm text-center md:text-left">
              Frontend Developer crafting beautiful digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary/20 text-white/70 hover:text-primary transition-all border border-white/10 hover:border-primary/30"
                    aria-label={link.name}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
            <p className="text-white/40 text-xs text-center md:text-right">
              © {currentYear} Ajao Abdussamad. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/60 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/60 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/60 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <a
              href="https://docs.google.com/document/d/1-xvuwTis1VXMMyAnifxKnS6p3HBpyyuOD5r3GWd7uHk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
