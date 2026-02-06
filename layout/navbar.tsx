"use client";
import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  href: string;
}

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItem: NavItem[] = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl text-accent-foreground font-bold letter-spacing-tight hover:text-primary transition-colors"
          >
              AS
          </button>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItem.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace("#", ""))}
              className="text-white/70 hover:text-primary text-sm font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="h-8 w-px bg-white/10 mx-1"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-white leading-none capitalize">
                ajao abdussamad
              </p>
              <p className="text-[10px] text-primary font-medium mt-1 uppercase tracking-wider">
                Available
              </p>
            </div>
            <div className="size-9 rounded-full border-2 border-primary/40 p-0.5 overflow-hidden">
              <div
                className="w-full h-full rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/abdussamad.png')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
