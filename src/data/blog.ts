/**
 * Blog posts — demo/placeholder articles. Clearly editable.
 * Replace `content` with real technical writing when ready.
 */

export const blogCategories = [
  "Electronics",
  "Arduino",
  "ESP32",
  "IoT",
  "Embedded Systems",
  "Telecommunications",
  "Fiber Optics",
  "Networking",
  "AI & Machine Learning",
  "Engineering Projects",
  "Engineering Experiences",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  date: string;
  readingMinutes: number;
  featured?: boolean;
  /** Markdown-lite: paragraphs, "## " headings and "- " bullets. */
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-dht-sensors-reliably",
    title: "Reading DHT Temperature and Humidity Sensors Reliably",
    excerpt:
      "A practical look at wiring, timing and sampling intervals when building a temperature and humidity monitoring system.",
    category: "Arduino",
    tags: ["DHT11", "DHT22", "Arduino", "Sensors"],
    date: "2026-08-12",
    readingMinutes: 6,
    featured: true,
    content: `## Why sampling interval matters
DHT-family sensors are inexpensive and easy to interface, but they are slow devices. Polling them faster than their conversion time returns stale or failed reads.

## Wiring notes
- Use a pull-up resistor on the data line
- Keep the signal wire short on breadboard prototypes
- Decouple the supply close to the sensor

## Handling failed reads
A single failed read is normal. Treat it as a retry, not an error state, and only alarm after several consecutive failures.

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
  {
    slug: "esp32-vs-esp8266",
    title: "ESP32 or ESP8266: Choosing a Board for an IoT Build",
    excerpt:
      "Comparing the two most common Wi-Fi microcontrollers for hobby and field IoT projects, and when the cheaper option is enough.",
    category: "ESP32",
    tags: ["ESP32", "ESP8266", "IoT", "Wi-Fi"],
    date: "2026-07-28",
    readingMinutes: 7,
    featured: true,
    content: `## The short answer
If the build needs more than a couple of analog inputs, Bluetooth, or real processing headroom, choose the ESP32. Otherwise the ESP8266 is still a capable and cheaper node.

## Things that actually decide it
- Number and type of peripherals
- Power budget and deep-sleep behaviour
- Available GPIO after the boot-strapping pins are excluded

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
  {
    slug: "what-an-odf-taught-me",
    title: "What an Optical Distribution Frame Taught Me About Discipline",
    excerpt:
      "Field notes on fiber patching, labelling and why documentation is an engineering skill, not paperwork.",
    category: "Fiber Optics",
    tags: ["Fiber Optics", "ODF", "GPON", "Field Experience"],
    date: "2026-07-05",
    readingMinutes: 5,
    featured: false,
    content: `## Fibre is unforgiving
Bend radius, connector cleanliness and splice quality decide whether a link performs or degrades quietly.

## Labelling is engineering
An unlabelled patch is a future outage. The discipline of documenting every change is what keeps a network supportable.

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
  {
    slug: "vlan-basics-packet-tracer",
    title: "VLAN Basics You Can Practise in Packet Tracer",
    excerpt: "A beginner-friendly path through VLAN segmentation, trunking and inter-VLAN routing in a simulated lab.",
    category: "Networking",
    tags: ["VLAN", "Cisco", "Packet Tracer", "Switching"],
    date: "2026-06-18",
    readingMinutes: 8,
    content: `## Start with two VLANs
Segment a single switch into two broadcast domains and confirm that hosts cannot reach each other before adding routing.

## Then add a trunk
Trunking is where most beginner labs break. Verify the allowed VLAN list on both ends.

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
  {
    slug: "designing-a-yagi-uda",
    title: "Designing a Yagi-Uda Antenna From First Principles",
    excerpt: "Working through element lengths, spacing and directivity for a directional antenna design exercise.",
    category: "Telecommunications",
    tags: ["Antenna", "RF", "Design"],
    date: "2026-05-30",
    readingMinutes: 9,
    content: `## Start from the wavelength
Every dimension in a Yagi-Uda is a fraction of the operating wavelength. Fix the frequency first.

## Elements and their roles
- Reflector: slightly longer than the driven element
- Driven element: fed by the transmission line
- Directors: progressively shorter, shaping the forward lobe

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
  {
    slug: "prototyping-habits",
    title: "Five Prototyping Habits That Save Hours on the Bench",
    excerpt: "Small workflow habits that shorten the distance between a circuit idea and a working prototype.",
    category: "Engineering Experiences",
    tags: ["Prototyping", "Workflow", "Electronics"],
    date: "2026-05-02",
    readingMinutes: 4,
    content: `## Change one thing at a time
Most lost hours come from changing wiring and firmware in the same step.

## Measure early
A multimeter reading before power-up costs seconds and saves components.

This is a demo article placeholder. Replace this content with your own technical write-up.`,
  },
];

export const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags))).sort();
