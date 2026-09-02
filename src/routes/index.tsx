import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Ttcl } from "@/components/sections/ttcl";
import { Experience, Education } from "@/components/sections/timeline";
import { Achievements } from "@/components/sections/achievements";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { site } from "@/data/site";

const title = "Faida Sylivester Mosses | Electronics & Embedded Systems Engineer";
const description =
  "Portfolio of Faida Sylivester Mosses — electronics and embedded systems engineer in Dar es Salaam, Tanzania. Arduino, ESP32, IoT, telecommunications, fiber optics and networking projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.title,
          description: site.intro,
          address: { "@type": "PostalAddress", addressLocality: "Dar es Salaam", addressCountry: "TZ" },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Dar es Salaam Institute of Technology (DIT)",
          },
          knowsAbout: [
            "Electronics",
            "Embedded Systems",
            "IoT",
            "Arduino",
            "ESP32",
            "Telecommunications",
            "Fiber Optics",
            "Networking",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Ttcl />
        <Experience />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
