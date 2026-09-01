/** Timelines and achievements — all editable. */

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  kind: "education" | "experience" | "project";
  description: string;
  points: string[];
  ongoing?: boolean;
};

export const experienceTimeline: TimelineItem[] = [
  {
    period: "Ongoing",
    title: "University Engineering Journey",
    org: "Dar es Salaam Institute of Technology (DIT)",
    kind: "education",
    description:
      "Building the electronics, telecommunication and programming foundation that underpins every project.",
    points: [
      "Core electronics, circuit analysis and instrumentation",
      "Telecommunication transmission and switching concepts",
      "Programming in C/C++, Python, C# and MATLAB",
      "Laboratory and simulation practice",
    ],
    ongoing: true,
  },
  {
    period: "Field practice",
    title: "TTCL Field Experience",
    org: "Practical telecommunications exposure",
    kind: "experience",
    description:
      "Practical field exposure to optical access networks, transmission infrastructure and network operations environments.",
    points: [
      "ODF, fiber optics and GPON access infrastructure",
      "OTDR and optical power meter measurement",
      "NOC, transmission and switching environments",
      "Power supply, cooling and site infrastructure",
    ],
  },
  {
    period: "Ongoing",
    title: "Engineering Projects",
    org: "Personal & academic builds",
    kind: "project",
    description:
      "Designing and building embedded, IoT and electronics systems that solve everyday practical problems.",
    points: [
      "ATHMS temperature & humidity monitoring system",
      "Poultry climate monitoring solution",
      "Smart water valve automation",
      "Arduino and ESP32/ESP8266 IoT builds",
    ],
    ongoing: true,
  },
  {
    period: "Next",
    title: "Internship & Industry Experience",
    org: "Open to opportunities",
    kind: "experience",
    description:
      "Actively seeking internships and engineering opportunities in electronics, embedded systems, IoT and telecommunications.",
    points: [
      "Available for internship and collaboration",
      "Interested in embedded, IoT and telecom roles",
      "Open to freelance technical work",
    ],
  },
];

export const educationTimeline: TimelineItem[] = [
  {
    period: "Second Year — current",
    title: "BSc in Electronics and Telecommunication Engineering",
    org: "Dar es Salaam Institute of Technology (DIT)",
    kind: "education",
    description:
      "Currently in the second year of the programme, combining coursework with hands-on electronics and embedded systems practice.",
    points: [
      "Electronics and circuit design",
      "Telecommunication systems",
      "Microcontrollers and embedded programming",
      "Networking and computer systems",
    ],
    ongoing: true,
  },
  {
    period: "Future",
    title: "Further academic milestones",
    org: "To be added",
    kind: "education",
    description:
      "Placeholder for upcoming academic milestones, specialisations and further study. Edit this entry as the journey progresses.",
    points: ["Editable placeholder — add real milestones here"],
  },
];

export type Achievement = {
  title: string;
  category: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "Practical Electronics Projects",
    category: "Electronics",
    description:
      "Designed, built and tested working circuits from component level, including sensing, switching and instrumentation builds.",
  },
  {
    title: "Embedded Systems Development",
    category: "Embedded",
    description:
      "Wrote and debugged microcontroller firmware in C/C++ for Arduino, ESP32 and ESP8266 platforms.",
  },
  {
    title: "IoT Monitoring Projects",
    category: "IoT",
    description:
      "Developed connected monitoring systems for environmental and agricultural use cases with alerting logic.",
  },
  {
    title: "Telecommunications Practical Exposure",
    category: "Telecom",
    description:
      "Gained field exposure to transmission, switching, NOC and access network environments during TTCL field experience.",
  },
  {
    title: "Fiber Optics Exposure",
    category: "Fiber",
    description:
      "Worked alongside engineers on ODF, GPON and optical measurement using OTDR and optical power meters.",
  },
  {
    title: "Engineering Design Work",
    category: "Design",
    description:
      "Completed design studies including Yagi-Uda antenna geometry and PCB/simulation work in Proteus and EasyEDA.",
  },
  {
    title: "Technical Experimentation",
    category: "R&D",
    description:
      "Continuously prototypes new ideas on the bench, from sensor interfacing to automation concepts.",
  },
];

export const ttclDetails = {
  observed: [
    "Optical distribution frames (ODF) and structured fiber patching",
    "GPON access network equipment and customer-side termination",
    "NOC monitoring environments and operational workflows",
    "Transmission and switching rooms with live equipment",
    "Server rooms, power supply systems and air conditioning infrastructure",
    "Outdoor access points and last-mile connectivity",
  ],
  technologies: [
    "ODF",
    "Fiber Optics",
    "GPON",
    "OTDR",
    "Optical Power Meter",
    "NOC",
    "Transmission",
    "Switching",
    "NICTBB",
    "Access Network",
    "Networking",
    "VLAN concepts",
    "Servers & data infrastructure",
    "Power supply systems",
    "Air conditioning infrastructure",
    "Outdoor access points",
    "SFP",
    "PoE",
    "Cat6",
  ],
  learned: [
    "How optical signals are distributed from backbone to subscriber",
    "Why splice quality, bend radius and connector cleanliness decide link performance",
    "How OTDR traces and optical power readings are interpreted in practice",
    "How VLAN segmentation and switching are applied in real deployments",
    "How power and cooling reliability determine network uptime",
  ],
  insights: [
    "Field reality adds constraints that textbooks skip: cable routing, labelling, access and safety.",
    "Documentation and labelling discipline is as important as the technology itself.",
    "Measurement before assumption — an optical power reading settles a debate instantly.",
    "Infrastructure design decisions made once are lived with for years.",
  ],
  exposure: [
    "Observed live access network operations alongside experienced engineers",
    "Handled and inspected optical distribution infrastructure",
    "Followed measurement procedures with OTDR and optical power meters",
    "Connected classroom transmission theory to deployed equipment",
  ],
};
