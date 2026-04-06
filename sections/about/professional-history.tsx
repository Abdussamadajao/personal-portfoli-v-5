import { Terminal } from "lucide-react";
import React from "react";

const ProfessionalHistory = () => {
  const experiences = [
    {
      id: 1,
      company: "PneumaCare",
      location: "United Kingdom (Remote)",
      position: "Frontend Developer",
      duration: "Mar 2022 – Feb 2025",
      achievements: [
        "Architected and shipped complex healthcare dashboards integrating multiple third-party APIs using React, Redux Toolkit, and context-driven state management — directly contributing to a 40% increase in patient engagement.",
        "Built a full-featured patient management platform with role-based access control, file upload workflows, and automated follow-up systems, improving operational efficiency across hospital teams.",
        "Developed scalable landing pages with advanced search, real-time test result displays, and appointment booking systems using React Hooks and modern component patterns.",
        "Optimised application performance through strategic code splitting, lazy loading, and memoization reducing average load times by 35%.",
        "Collaborated with product owners, designers, and QA engineers within iterative agile cycles to consistently deliver high-quality, production-ready features on schedule.",
      ],
    },
    {
      id: 2,
      company: "GoCaby Technology Limited",
      location: "Abuja, Nigeria",
      position: "Frontend & Mobile Developer",
      duration: "Mar 2022 – Nov 2024",
      achievements: [
        "Delivered a feature-rich cross-platform dashboard and mobile app using React, Next.js, and React Native — integrating real-time updates via Firebase and complex data visualisation with Redux Toolkit, contributing to a 30% increase in company revenue.",
        "Built high-converting, responsive interfaces with advanced form validation, Stripe payment integration, and live delivery booking/tracking with push notifications, improving both customer acquisition and operational throughput.",
        "Engineered a shared TypeScript component library consumed across web and mobile codebases, reducing duplication and cutting feature development time by an estimated 25%.",
        "Implemented automated testing suites with Jest and React Testing Library, achieving robust test coverage and improving release confidence across frontend and mobile applications.",
      ],
    },
  ];

  return (
    <section className="mb-24" id="experience">
      <h2
        className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 uppercase"
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
              <h3 className="text-foreground text-xl font-bold mb-3">
                {experience.position}
              </h3>
              <p className="text-primary text-base font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-muted-foreground text-sm font-normal mb-6">
                {experience.location} · {experience.duration}
              </p>
              <ul className="space-y-3 text-foreground/90 text-sm leading-relaxed">
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
