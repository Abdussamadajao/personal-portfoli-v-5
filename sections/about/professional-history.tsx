import { History, Rocket, Star, Terminal, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

const ProfessionalHistory = () => {
  const experiences = [
    {
      id: 1,
      company: "PNEUMACARE",
      location: "Abuja, Nigeria",
      position: "Frontend Developer",
      duration: "August 2019 - Present",
      achievements: [
        "Architected and implemented complex healthcare dashboards with third-party API integrations using React, Redux, and modern state management patterns, resulting in 40% increased patient engagement.",
        "Developed scalable landing pages with advanced search functionality, appointment booking systems, and real-time test result displays using React hooks and context API.",
        "Built comprehensive patient management platforms with role-based access control, file upload systems, and automated follow-up workflows for hospital operations.",
        "Optimized application performance by implementing code splitting, lazy loading, and memoization techniques, reducing load times by 35%.",
        "Collaborated closely with cross-functional team members, including product owners and QA testers, to deliver high-quality software products within iterative development cycles.",
      ],
      technologies: [
        "React",
        "Redux",
        "Context API",
        "Performance Optimization",
        "Healthcare APIs",
      ],
      highlights: [
        {
          icon: TrendingUp,
          text: "40% Patient Engagement",
          color: "text-green-500",
        },
        { icon: Zap, text: "35% Performance Boost", color: "text-emerald-500" },
        {
          icon: Users,
          text: "Cross-functional Team",
          color: "text-purple-500",
        },
      ],
    },
    {
      id: 2,
      company: "GOCABY TECHNOLOGY LIMITED",
      location: "Abuja, Nigeria",
      position: "Frontend Developer",
      duration: "August 2022 - July 2024",
      achievements: [
        "Delivered a feature-rich dashboard with complex data visualization and real-time updates using React, NextJS, Redux Toolkit, and Firebase, driving 30% revenue growth.",
        "Built a high-converting landing page with advanced form validation, payment integration, and mobile-responsive design to streamline customer acquisition.",
        "Implemented automated delivery booking with real-time order tracking and notification systems, enhancing operational efficiency.",
        "Established component libraries, implemented TypeScript, and set up automated testing with Jest and React Testing Library to improve development workflow.",
      ],
      technologies: [
        "React",
        "NextJS",
        "Redux Toolkit",
        "Firebase",
        "TypeScript",
        "Jest",
        "Testing Library",
      ],
      highlights: [
        {
          icon: TrendingUp,
          text: "30% Revenue Growth",
          color: "text-green-500",
        },
        { icon: Star, text: "Component Libraries", color: "text-yellow-500" },
        { icon: Zap, text: "Automated Testing", color: "text-emerald-500" },
      ],
    },
  ];

  return (
    <section className="mb-24" id="experience">
      <h2
        className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 uppercase"
      >
        02 / Experience
      </h2>
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="grid grid-cols-[40px_1fr] gap-x-6">
            {/* Timeline Indicator */}
            <div className="flex flex-col items-center gap-1">
              <div
                className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-primary/40"
              >
                <Terminal className="text-lg" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="w-[2px] bg-border h-full grow my-1"></div>
              )}
            </div>

            {/* Experience Content */}
            <div className="flex flex-1 flex-col pb-12">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-white text-xl font-bold">
                  {experience.position}
                </h3>
                <span className="text-primary text-sm font-medium">
                  {experience.duration}
                </span>
              </div>
              <p className="text-primary text-base font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-white/60 text-sm font-normal mb-6">
                {experience.location}
              </p>
              <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span
                      className="text-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    ></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalHistory;
