/**
 * Skills data. `level` is an optional, editable self-assessment (0-100).
 * Leave `level` undefined to show the skill as a plain tag with no claim.
 */

export type Skill = { name: string; level?: number };

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "electronics",
    title: "Electronics",
    blurb: "Analog and digital fundamentals, hands-on bench work.",
    icon: "cpu",
    skills: [
      { name: "Electronics" },
      { name: "Circuit Design" },
      { name: "Electronic Components" },
      { name: "Sensors" },
      { name: "Measurement & Instrumentation" },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    blurb: "Microcontroller firmware and hardware bring-up.",
    icon: "chip",
    skills: [
      { name: "Arduino" },
      { name: "ESP32" },
      { name: "ESP8266" },
      { name: "Embedded Systems" },
      { name: "Microcontrollers" },
      { name: "C/C++" },
    ],
  },
  {
    id: "iot",
    title: "IoT",
    blurb: "Connected devices, remote monitoring and automation.",
    icon: "radio",
    skills: [
      { name: "IoT Development" },
      { name: "Smart Devices" },
      { name: "Sensors" },
      { name: "Remote Monitoring" },
      { name: "Automation" },
    ],
  },
  {
    id: "software",
    title: "Software & Programming",
    blurb: "Tooling and languages used across projects.",
    icon: "code",
    skills: [
      { name: "C/C++" },
      { name: "C#" },
      { name: "Python" },
      { name: "MATLAB" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Linux" },
      { name: "WSL" },
    ],
  },
  {
    id: "pcb",
    title: "PCB & Simulation",
    blurb: "Schematic capture, layout and circuit verification.",
    icon: "board",
    skills: [
      { name: "Proteus" },
      { name: "EasyEDA" },
      { name: "PCB Design" },
      { name: "Circuit Simulation" },
    ],
  },
  {
    id: "telecom",
    title: "Telecommunications",
    blurb: "Optical transport, access networks and operations concepts.",
    icon: "signal",
    skills: [
      { name: "Telecommunications" },
      { name: "Fiber Optics" },
      { name: "GPON" },
      { name: "ODF" },
      { name: "Transmission" },
      { name: "Switching" },
      { name: "NOC concepts" },
      { name: "Access Networks" },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    blurb: "Campus networking fundamentals and lab configuration.",
    icon: "network",
    skills: [
      { name: "Computer Networking" },
      { name: "Cisco Packet Tracer" },
      { name: "VLAN" },
      { name: "Network Configuration" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    blurb: "Exploring intelligence at the edge.",
    icon: "brain",
    skills: [
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
      { name: "Computer Vision" },
    ],
  },
];
