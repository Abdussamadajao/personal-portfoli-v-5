import React from 'react'

const skillCategories = [
    {
        title: "Frontend Technologies",

        skills: [
            { name: "React", },
            { name: "Next.js", },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
            { name: "SASS" },
            { name: "Styled Components" },
            { name: "Bootstrap" },
            { name: "Chakra UI" },
            { name: "Shadcn UI" },
        ],
    },
    {
        title: "Mobile & PWA",

        skills: [
            { name: "React Native" },
            { name: "Expo" },
            { name: "Flutter" }
        ],
    },
    {
        title: "State Management & Data",

        skills: [
            { name: "Redux" },
            { name: "Context API" },
            { name: "React Query" },
            { name: "Zustand" },
            { name: "Redux Toolkit" },
        ],
    },
    {
        title: "Backend & Database",

        skills: [
            { name: "Firebase" },
            { name: "MongoDB" },
            { name: "Supabase" },
            { name: "Prisma" },
            { name: "Appwrite" },
            { name: "Socket.io" },
        ],
    },
    {
        title: "Build Tools & Development",

        skills: [
            { name: "Vite" },
            { name: "Webpack" },
            { name: "Yarn" },
            { name: "NPM" },
            { name: "Git" },
            { name: "GitHub" },
            { name: "GitLab" },
            { name: "GitHub Actions" },
            { name: "GitLab CI" },
        ],
    },
    {
        title: "Deployment & Hosting",

        skills: [
            { name: "Vercel" },
            { name: "Netlify" },
            { name: "Render" },
            { name: "Railway" },
        ],
    },
    {
        title: "Libraries & Utilities",
        skills: [
            { name: "React Hook Form" },
            { name: "Chart.js" },
            { name: "Three.js" },
            { name: "Framer Motion" },
            { name: "React Router" },
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