import { History, Rocket, Star, Terminal, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

const ProfessionalHistory = () => {
  const experiences = [
    {
      id: 1,
      company: "PNEUMACARE",
      location: "Abuja, Nigeria",
      position: "Frontend Developer",
      duration: "August 2021 - February 2026",
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
      company: "MKAN",
      location: "Nigeria",
      position: "Frontend Engineer",
      duration: "May 2022 - present",
      achievements: [
        "Architected and developed a high-volume payment platform serving 10,000+ users, enhancing transaction processing efficiency and boosting customer satisfaction by 35%.",
        "Created reusable frontend modules and component libraries, improving code maintainability and accelerating development time for new features by 40%.",
        "Designed and implemented responsive design patterns across web interfaces, ensuring cross-device consistency and minimizing UI-related defects by 30%.",
        "Architected intuitive UX workflows, reducing user errors by 25% and boosting user engagement and completion rates by 28%.",
        "Established code versioning and collaboration workflows using Git, delivering clean releases, streamlined development processes, and achieving a 20% reduction in deployment-related issues.",
      ],
      technologies: [
        "React",
        "Payment Systems",
        "Component Architecture",
        "Responsive Design",
        "Git",
        "UX Design",
      ],
      highlights: [
        {
          icon: TrendingUp,
          text: "35% Customer Satisfaction",
          color: "text-green-500",
        },
        { icon: Zap, text: "40% Faster Development", color: "text-emerald-500" },
        {
          icon: Users,
          text: "10,000+ Users",
          color: "text-primary",
        },
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
