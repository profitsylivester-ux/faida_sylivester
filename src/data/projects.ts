/**
 * Projects data — edit freely.
 * `image` currently points at illustrative artwork (not photos of real hardware).
 * Replace with real project photographs when available.
 * `github` may be an empty string when no repository exists yet.
 */

import athmsImg from "@/assets/project-athms.jpg";
import ldrImg from "@/assets/project-ldr.jpg";
import antennaImg from "@/assets/project-antenna.jpg";
import valveImg from "@/assets/project-valve.jpg";
import poultryImg from "@/assets/project-poultry.jpg";
import trafficImg from "@/assets/project-traffic.jpg";
import arduinoImg from "@/assets/project-arduino.jpg";
import espImg from "@/assets/project-esp.jpg";
import telecomImg from "@/assets/project-telecom.jpg";
import fiberImg from "@/assets/project-fiber.jpg";

export const projectCategories = [
  "All",
  "Electronics",
  "Embedded Systems",
  "IoT",
  "Telecommunications",
  "Networking",
  "Automation",
  "AI",
  "Academic Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  categories: Exclude<ProjectCategory, "All">[];
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  role: string;
  status: "Completed" | "In progress" | "Concept" | "Prototype" | "Ongoing";
  features: string[];
  /** Editable — leave empty until real, verifiable outcomes exist. */
  results: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "athms",
    title: "ATHMS",
    subtitle: "Automatic Temperature & Humidity Monitoring System",
    categories: ["Embedded Systems", "IoT", "Electronics"],
    image: athmsImg,
    imageAlt: "Illustration of a microcontroller-based temperature and humidity monitoring unit",
    summary:
      "A microcontroller-based monitoring unit that continuously measures ambient temperature and humidity, displays live readings and raises alerts when conditions leave a safe range.",
    problem:
      "Environments such as stores, labs and small farms need continuous climate awareness, but manual checks are slow, inconsistent and miss overnight excursions.",
    solution:
      "An Arduino UNO reads a DHT temperature/humidity sensor, shows live values on a 16x2 LCD, drives status LEDs and a buzzer for threshold alarms, and uses a GSM module to send alerts when readings pass configurable limits. Rechargeable batteries keep the unit running during power interruptions.",
    tech: [
      "Arduino UNO",
      "DHT11 / DHT22",
      "LCD 16x2",
      "GSM module",
      "LEDs",
      "Buzzer",
      "Rechargeable batteries",
      "C/C++",
    ],
    role: "Concept, circuit design, component selection, firmware and testing.",
    status: "Completed",
    features: [
      "Continuous temperature and humidity sampling",
      "Live on-device LCD readout",
      "Configurable high/low thresholds",
      "Visual (LED) and audible (buzzer) alerts",
      "SMS alerting through a GSM module",
      "Battery backup for power interruptions",
    ],
    results: [],
    github: "",
    featured: true,
  },
  {
    slug: "ldr-light-sensor",
    title: "LDR Light Sensor System",
    subtitle: "Automatic light-activated control circuit",
    categories: ["Electronics", "Embedded Systems"],
    image: ldrImg,
    imageAlt: "Illustration of a light dependent resistor sensing circuit on a breadboard",
    summary:
      "A practical electronics build that senses ambient light with an LDR and switches a load automatically as light levels change.",
    problem:
      "Lighting that is switched manually wastes energy and depends on someone being present to act on changing daylight.",
    solution:
      "A light dependent resistor forms a voltage divider whose output is compared against a reference threshold; the resulting signal drives a switching stage so the load turns on in darkness and off in daylight.",
    tech: ["LDR", "Resistors", "Comparator / Arduino", "Transistor switching", "Breadboard prototyping"],
    role: "Circuit analysis, prototyping, calibration and bench testing.",
    status: "Completed",
    features: [
      "Light-level sensing with an LDR divider",
      "Adjustable switching threshold",
      "Automatic on/off load control",
      "Low component count and low cost",
    ],
    results: [],
    github: "",
  },
  {
    slug: "yagi-uda-antenna",
    title: "Yagi-Uda Antenna Design",
    subtitle: "Directional antenna engineering study",
    categories: ["Telecommunications", "Academic Projects"],
    image: antennaImg,
    imageAlt: "Technical illustration of a Yagi-Uda directional antenna with driven element and directors",
    summary:
      "A directional antenna design exercise covering element geometry, spacing and the relationship between structure and radiation pattern.",
    problem:
      "Point-to-point links need gain in a chosen direction; an omnidirectional radiator wastes power and picks up unwanted interference.",
    solution:
      "Design of a Yagi-Uda array — reflector, driven element and directors — with element lengths and spacing derived from the target operating frequency, then reviewed against expected gain, directivity and front-to-back behaviour.",
    tech: ["Antenna theory", "Element geometry calculation", "Simulation tools", "RF fundamentals"],
    role: "Design calculations, geometry layout and engineering write-up.",
    status: "Completed",
    features: [
      "Frequency-driven element dimensioning",
      "Reflector / driven element / director layout",
      "Directivity and radiation-pattern reasoning",
      "Documented design methodology",
    ],
    results: [],
    github: "",
  },
  {
    slug: "smart-water-valve",
    title: "Smart Water Valve / Dispenser",
    subtitle: "Automated water control unit",
    categories: ["Automation", "IoT", "Embedded Systems"],
    image: valveImg,
    imageAlt: "Illustration of an automated smart water valve with sensor and control electronics",
    summary:
      "An automation-oriented build that opens and closes a water valve based on sensor input instead of manual operation.",
    problem: "Manual water dispensing wastes water and requires constant attention.",
    solution:
      "A microcontroller reads presence/level sensing and actuates a solenoid valve through a driver stage, with timing logic and safety cut-off so flow stops automatically.",
    tech: ["Microcontroller", "Solenoid valve", "Relay / driver stage", "Sensors", "C/C++"],
    role: "System design, actuator driver circuit and control firmware.",
    status: "Prototype",
    features: [
      "Sensor-triggered valve actuation",
      "Automatic shut-off logic",
      "Manual override path",
      "Designed for low-cost components",
    ],
    results: [],
    github: "",
  },
  {
    slug: "poultry-monitoring",
    title: "Poultry Temperature & Humidity Monitoring",
    subtitle: "Climate monitoring for poultry housing",
    categories: ["IoT", "Embedded Systems", "Automation"],
    image: poultryImg,
    imageAlt: "Illustration of a poultry house climate monitoring node with connected sensors",
    summary:
      "An IoT monitoring solution that tracks climate conditions inside poultry housing and surfaces readings for remote awareness.",
    problem:
      "Poultry are highly sensitive to temperature and humidity swings, and small farms rarely have continuous visibility of shed conditions.",
    solution:
      "Sensor nodes sample temperature and humidity inside the housing, a microcontroller applies safe-range logic, and readings plus alerts are made available remotely so the farmer can react before conditions become harmful.",
    tech: ["ESP32 / ESP8266", "DHT sensors", "Wi-Fi connectivity", "Remote dashboard", "C/C++"],
    role: "Requirements, hardware selection, firmware and monitoring logic.",
    status: "In progress",
    features: [
      "Continuous in-shed climate sampling",
      "Safe-range threshold logic",
      "Remote monitoring over Wi-Fi",
      "Alerting on out-of-range conditions",
    ],
    results: [],
    github: "",
    featured: true,
  },
  {
    slug: "road-traffic-monitoring",
    title: "Road / Traffic Monitoring System",
    subtitle: "Smart road engineering concept",
    categories: ["IoT", "AI", "Automation"],
    image: trafficImg,
    imageAlt: "Illustration of a smart road with sensor nodes monitoring traffic flow",
    summary:
      "An engineering innovation concept for monitoring road and traffic conditions using distributed sensing and intelligent analysis.",
    problem:
      "Congestion, road incidents and poor road condition data are hard to act on without continuous, automated observation.",
    solution:
      "A concept architecture combining roadside sensing nodes, connectivity back to a central point, and analysis of the collected data to reveal flow patterns and abnormal events.",
    tech: ["Sensor nodes", "Microcontrollers", "Wireless connectivity", "Computer vision (exploratory)"],
    role: "Concept development and system architecture.",
    status: "Concept",
    features: [
      "Distributed roadside sensing concept",
      "Central data aggregation",
      "Traffic-flow and incident analysis direction",
      "Scalable node-based architecture",
    ],
    results: [],
    github: "",
  },
  {
    slug: "arduino-projects",
    title: "Arduino Project Collection",
    subtitle: "Hands-on microcontroller builds",
    categories: ["Embedded Systems", "Electronics"],
    image: arduinoImg,
    imageAlt: "Illustration of an Arduino board surrounded by sensors and components",
    summary:
      "A growing collection of Arduino-based builds covering sensors, displays, actuators and interfacing practice.",
    problem: "Fundamentals only become real through repeated, hands-on hardware practice.",
    solution:
      "A series of focused builds — sensor interfacing, LCD output, motor and relay driving, serial communication — each isolating a concept before combining them into larger systems.",
    tech: ["Arduino UNO", "Sensors", "Displays", "Relays & motors", "C/C++"],
    role: "Design, wiring, firmware and debugging on every build.",
    status: "Ongoing",
    features: [
      "Sensor interfacing practice",
      "Display and user-feedback modules",
      "Actuator and driver circuits",
      "Reusable firmware patterns",
    ],
    results: [],
    github: "",
  },
  {
    slug: "esp-iot-projects",
    title: "ESP32 / ESP8266 IoT Projects",
    subtitle: "Connected microcontroller work",
    categories: ["IoT", "Embedded Systems"],
    image: espImg,
    imageAlt: "Illustration of ESP32 and ESP8266 modules connected to a wireless network",
    summary:
      "Wi-Fi enabled microcontroller work exploring connectivity, remote control and cloud-facing device behaviour.",
    problem: "A sensor that cannot report anywhere is only half a solution.",
    solution:
      "ESP32 and ESP8266 builds that publish sensor data over Wi-Fi, expose control endpoints and explore reliable reconnection, so devices remain useful outside the workbench.",
    tech: ["ESP32", "ESP8266", "Wi-Fi", "MQTT / HTTP", "Sensors", "C/C++"],
    role: "Firmware, connectivity design and testing.",
    status: "Ongoing",
    features: [
      "Wi-Fi connected sensor nodes",
      "Remote control endpoints",
      "Data publishing to a remote service",
      "Reconnection and resilience handling",
    ],
    results: [],
    github: "",
  },
  {
    slug: "telecom-networking",
    title: "Telecommunications & Networking Work",
    subtitle: "Academic and practical network engineering",
    categories: ["Telecommunications", "Networking", "Academic Projects"],
    image: telecomImg,
    imageAlt: "Illustration of network switches, VLAN segments and structured cabling",
    summary:
      "Coursework and lab work covering transmission concepts, switching, VLAN segmentation and network configuration.",
    problem: "Network designs need to be understood structurally before they can be built or supported.",
    solution:
      "Topology design and configuration exercises in Cisco Packet Tracer alongside coursework on transmission and switching, connecting theory with configuration practice.",
    tech: ["Cisco Packet Tracer", "VLAN", "Switching", "Transmission", "Structured cabling"],
    role: "Topology design, device configuration and documentation.",
    status: "Ongoing",
    features: [
      "Topology design and addressing",
      "VLAN segmentation exercises",
      "Switch and router configuration",
      "Documented lab procedures",
    ],
    results: [],
    github: "",
  },
  {
    slug: "fiber-optics-gpon",
    title: "Fiber Optics / GPON Practical Work",
    subtitle: "Optical access network exposure",
    categories: ["Telecommunications", "Networking"],
    image: fiberImg,
    imageAlt: "Illustration of an optical distribution frame with fiber patch cords and GPON equipment",
    summary:
      "Practical exposure to optical distribution infrastructure and GPON access networks, gained during field experience at TTCL.",
    problem:
      "Optical access networks are best understood in the field, where terminations, distribution frames and measurement tools are physically in front of you.",
    solution:
      "Observing and working alongside engineers on ODF handling, fiber patching, GPON access architecture and optical measurement with OTDR and optical power meters.",
    tech: ["Fiber optics", "GPON", "ODF", "OTDR", "Optical power meter", "SFP"],
    role: "Field observation and supervised practical exposure.",
    status: "Completed",
    features: [
      "ODF and patching practice",
      "GPON access architecture familiarity",
      "Optical measurement with OTDR / power meter",
      "Link between transmission theory and field reality",
    ],
    results: [],
    github: "",
    featured: true,
  },
];
