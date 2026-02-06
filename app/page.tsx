import Hero from "@/sections/home/hero";
import AboutContainer from "@/sections/about";
import ProjectContainer from "@/sections/projects";
import Footer from "@/sections/footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajao Abdussamad",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Architect specializing in high-performance, cinematic web experiences and scalable design systems.",
    url: "https://abdussamadajao.com",
    email: "abdussamadajao@gmail.com",
    telephone: "+2348125745960",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    sameAs: [
      "https://github.com",
      "https://linkedin.com",
      "https://twitter.com",
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
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section id="home" className="flex min-h-screen items-center justify-center">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <AboutContainer />
        </section>
        <section id="projects" className="py-20">
          <ProjectContainer />
        </section>
        <Footer />
      </div>
    </>
  );
}
