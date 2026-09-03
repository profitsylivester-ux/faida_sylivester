/**
 * Central site content. Edit values here to update the whole website.
 * Anything marked TODO is an editable placeholder — replace with real details.
 */

export const site = {
  name: "Faida Sylivester Mosses",
  shortName: "Faida S. Mosses",
  title: "Electronics & Embedded Systems Engineer",
  brand: "ProfitxTech",
  location: "Dar es Salaam, Tanzania",
  // TODO: replace placeholders below with real contact details.
  email: "your.email@example.com", // TODO
  phone: "+255 000 000 000", // TODO
  github: "", // TODO: e.g. https://github.com/username
  linkedin: "", // TODO: e.g. https://linkedin.com/in/username
  cvUrl: "https://docs.google.com/document/d/1HyLJfXnDwWc2uioFWk6xXD8H41htObqk/export?format=pdf", // Google Doc exported as PDF
  intro:
    "A creative and innovative engineering student passionate about building practical technology solutions — focused on electronics, embedded systems, IoT, automation, telecommunications, networking, software and AI.",
} as const;

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Resume", href: "/#resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;

export const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "achievements",
  "resume",
  "contact",
];
