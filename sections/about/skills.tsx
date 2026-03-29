import React from 'react'

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript" },
            { name: "JavaScript (ES2022+)" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js" },
            { name: "Next.js" },
            { name: "Vite" },
            { name: "Sass / Less" },
            { name: "HTML5" },
            { name: "CSS3" },
        ],
    },
    {
        title: "Mobile",
        skills: [
            { name: "React Native (Android & iOS)" },
        ],
    },
    {
        title: "State Management",
        skills: [
            { name: "Redux Toolkit" },
            { name: "Zustand" },
            { name: "React Context API" },
        ],
    },
    {
        title: "Backend & APIs",
        skills: [
            { name: "Node.js" },
            { name: "GraphQL" },
            { name: "RESTful APIs" },
            { name: "Firebase (Realtime DB, Auth, FCM)" },
        ],
    },
    {
        title: "Testing",
        skills: [
            { name: "Jest" },
            { name: "Vitest" },
            { name: "React Testing Library" },
            { name: "Enzyme" },
        ],
    },
    {
        title: "Tooling & CI/CD",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Code Splitting" },
            { name: "Lazy Loading" },
            { name: "Memoization" },
        ],
    },
];

const Skills = () => {
    return (
        <section className="mb-12" id="skills">
            <h2
                className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 uppercase"
            >
                04 / Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index} className="space-y-4">
                        <p
                            className="text-primary text-xs font-black uppercase tracking-widest"
                        >
                            {category.title}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1.5 bg-card text-white text-xs font-bold rounded-lg uppercase tracking-wider border border-border hover:border-primary/50 transition-colors"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
