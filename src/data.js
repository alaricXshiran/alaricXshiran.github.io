// All the personal content for the site lives here.
// Edit this file to update text, add projects, or change links.

export const profile = {
  name: "Alaric Shiran",
  roles: ["Software Engineer", "IT Technician", "Technical Support"],
  location: "Colombo, Sri Lanka",
  email: "alaric.shiran.private@gmail.com",
  github: "https://github.com/alaricXshiran",
  linkedin: "https://www.linkedin.com/in/alaric-shiran-908a10248",
};

export const experience = [
  {
    role: "Software Engineer (Full Stack Developer)",
    company: "Zucus.in",
    period: "Feb 2025 – Aug 2025",
    points: [
      "Joined as a frontend developer and grew into full stack work across the whole application lifecycle.",
      "Built and maintained React components with shadcn/ui, using TanStack Query for server state.",
      "Wrote backend logic with Node.js and Prisma ORM, ran schema migrations and tuned data models.",
      "Tightened API logic and Zod validation, and documented endpoints in Swagger.",
      "Worked through GitHub pull requests, code review, feature testing and pre-production validation.",
    ],
    tech: ["React", "shadcn/ui", "TanStack Query", "Node.js", "Prisma", "Zod", "Swagger"],
  },
  {
    role: "Software Engineer (Full Stack Developer Intern)",
    company: "Oxzon AI",
    period: "Oct 2024 – Mar 2025",
    points: [
      "Helped build a full-featured e-commerce web application on the MERN stack.",
      "Implemented REST APIs and frontend components for product listings, authentication and user interactions.",
      "Assisted with database design, deployment and hosting environment setup.",
      "Tracked down and fixed integration issues to keep features reliable end to end.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    role: "IT Technician & Technical Support",
    company: "Independent work",
    period: "",
    points: [
      "Designed and built a complete custom PC for a client, matching components to performance needs and budget.",
      "Install and configure Windows and software, and carry out hardware upgrades and component replacements.",
      "Diagnose boot, power, driver, operating-system and peripheral problems with a systematic approach.",
      "Automate office work with Excel VBA, including workflows that turn Excel data into formatted Word documents.",
    ],
    tech: ["PC building", "Windows", "Hardware diagnostics", "Excel VBA"],
  },
];

// To add a link to a project, fill in `code` (GitHub repo) and/or `demo` (live site).
export const projects = [
  {
    title: "BankApi – Banking REST API",
    category: "Backend",
    description:
      "A RESTful Web API for managing bank accounts with full CRUD operations on a LiteDB database. Uses DTOs to keep the API layer separate from the data model, with input validation, pagination, Swagger documentation and a Docker container.",
    tech: ["C#", "ASP.NET Core", "LiteDB", "Swagger", "Docker"],
    code: "",
    demo: "",
  },
  {
    title: "ESP32 GPS & Compass Handheld Navigator",
    category: "Embedded",
    description:
      "A handheld navigation device built on an ESP32. Reads a GPS module over serial and a QMC5883P compass over I²C, stores compass calibration in memory, and shows position, satellite and navigation data.",
    tech: ["ESP32", "Arduino", "GPS", "QMC5883P", "I²C"],
    code: "",
    demo: "",
  },
  {
    title: "StitchMonitor IoT System",
    category: "IoT",
    description:
      "An IoT system that monitors the efficiency of sewing machine operators in the Sri Lankan garment industry, pairing an ESP32 board and sensors with a PHP web application and SQL database.",
    tech: ["ESP32", "Sensors", "PHP", "SQL"],
    code: "",
    demo: "",
  },
  {
    title: "LegalAI",
    category: "Full Stack",
    description:
      "A web application that answers questions about the Sri Lankan legal landscape. Legal documents can be uploaded for the Gemini AI API to draw on, with access managed through a subscription system.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    code: "",
    demo: "",
  },
  {
    title: "Confidential Client Project",
    category: "Full Stack · NDA",
    description:
      "Frontend features in React with server state handled by React Query, backend APIs in Node.js with Prisma for the database, and Docker for containerisation. Details are under NDA.",
    tech: ["React", "React Query", "Node.js", "Prisma", "Docker"],
    code: "",
    demo: "",
  },
  {
    title: "Movie Ticket Booking System",
    category: "Web",
    description:
      "A movie ticket booking system with a Java Servlets backend, a JavaScript and CSS frontend, a SQL database and online payments through the PayHere API.",
    tech: ["Java Servlets", "JavaScript", "CSS", "SQL", "PayHere API"],
    code: "",
    demo: "",
  },
  {
    title: "Garbage Spotting & Collecting System",
    category: "Web",
    description:
      "A community mapping platform that uses the Google Maps API to coordinate city cleanup operations and plan dispatch routes for collection teams.",
    tech: ["Google Maps API", "PHP", "SQL"],
    code: "",
    demo: "",
  },
];

export const skills = [
  {
    group: "Software Development",
    items: ["C#", "ASP.NET Core Web API", "Java", "JavaScript", "Python", "PHP", "React.js", "Node.js", "Express.js", "HTML/CSS", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["SQL", "LiteDB", "MongoDB", "Firebase", "Prisma ORM", "Database design", "Schema migrations"],
  },
  {
    group: "Embedded & IoT",
    items: ["ESP32", "GPS/GNSS", "I²C", "OLED displays", "Sensors", "Serial communication", "Hardware/software integration"],
  },
  {
    group: "IT Support & Hardware",
    items: ["PC assembly", "Windows installation", "Hardware troubleshooting", "Software troubleshooting", "System diagnostics"],
  },
  {
    group: "Tools & Automation",
    items: ["Git/GitHub", "Docker", "Swagger", "Microsoft Office", "Excel VBA"],
  },
];

export const education = [
  {
    title: "BSc (Hons) in Software Engineering",
    detail: "University of Plymouth, UK · Second Class (Lower Division)",
  },
  {
    title: "Advanced Certificate Course",
    detail: "NSBM Green University, Sri Lanka",
  },
  {
    title: "Negombo South International School",
    detail: "",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Sinhala", level: "Fluent" },
  { name: "Japanese", level: "Beginner" },
];

export const interests = [
  "3D printing and design",
  "Electronics and IoT projects",
  "PC hardware and custom PC building",
  "Embedded systems and DIY projects",
  "Chess",
];

export const strengths = [
  "Systematic fault diagnosis",
  "Technical problem solving",
  "Quick to learn new technologies",
  "Attention to detail",
  "User-focused support",
  "Works well alone or in a team",
];
