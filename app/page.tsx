import Hero from "@/sections/home/hero";
import AboutContainer from "@/sections/about";
import ProjectContainer from "@/sections/projects";
import Contact from "@/sections/contact";
import Footer from "@/layout/footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdus-Samad Ajao",
    jobTitle: "Frontend & Mobile Developer",
    description:
      "Frontend & Mobile Developer with 3+ years of experience in React, Next.js, TypeScript, and React Native. Healthcare dashboards, cross-platform apps, and performance-optimised UIs.",
    url: "https://abdussamadajao.com",
    email: "abdussamadajao@gmail.com",
    telephone: "+2348125745960",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    sameAs: [
      "https://github.com/abdussamadajao",
      "https://www.linkedin.com/in/ajaoabdussamad",
      "https://x.com/AbdussamadAjao",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Al-Hikmah University",
      location: "Ilorin, Nigeria",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "JavaScript",
      "Frontend Development",
      "Mobile Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <Hero />
        </section>
        <section id="about" className="py-20">
          <AboutContainer />
        </section>
        <section id="projects" className="py-20">
          <ProjectContainer />
        </section>
        <Contact />
      </div>
    </>
  );
}
