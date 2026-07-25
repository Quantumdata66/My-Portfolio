export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  status: "In Development" | "Production Ready" | "Final Year Project" | "Completed";
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  responsibilities?: string[];
  features?: string[];
  architecture: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; icon?: string; highlighted?: boolean }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization?: string;
  subtitle: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export const PERSONAL_INFO = {
  name: "Abdulazeez Nurudeen Adedotun",
  shortName: "Abdulazeez Nurudeen",
  title: "Mechatronics Engineer | Machine Learning | Backend Engineer & Cloud Computing",
  roles: [
    "Backend Engineer",
    "Machine Learning Engineer",
    "Mechatronics Engineer",
    "AI Systems Builder"
  ],
  location: "Lagos, Nigeria",
  phone: "+234 902 636 6179",
  email: "nurdul4002@gmail.com",
  github: "https://github.com/quantumdata66",
  linkedin: "https://linkedin.com/in/nurudeen-abdulazeez",
  twitter: "https://x.com/quantumdata66",
  bio: "I build intelligent software systems, AI-powered applications, scalable backend architectures, and engineering solutions that solve real-world problems.",
  philosophy: "Engineering excellence at the intersection of robust backend infrastructure, machine intelligence, and physical system dynamics.",
  stats: [
    { label: "Projects Completed", value: "5+" },
    { label: "Industrial Trainings", value: "3" },
    { label: "Production Application", value: "1" },
    { label: "B.Eng Graduation", value: "2026" }
  ]
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "Jul – Dec 2021",
    title: "Industrial Training (Foundation)",
    subtitle: "Transmission Operations & System Mechanics",
    description: "Hands-on engineering immersion focusing on electrical transmission systems, control loops, and operational safety procedures.",
    tags: ["Mechatronics", "Transmission Systems", "Safety Procedures"]
  },
  {
    year: "Jun – Sep 2024 & Apr – Oct 2025",
    title: "Transmission Company of Nigeria (TCN)",
    organization: "Protection, Control & Metering (PC&M) Dept",
    subtitle: "High-Voltage Power Systems & Protection Engineering",
    description: "Assisted in preventive maintenance of high-voltage transmission infrastructure, relay testing, protection system maintenance, and equipment inspections.",
    tags: ["Relay Testing", "PC&M", "Power Infrastructure", "Preventive Maintenance"]
  },
  {
    year: "2025",
    title: "Built Quantum Jersey",
    subtitle: "Full-Stack E-Commerce Platform",
    description: "Built and deployed a production-ready football merchandise e-commerce platform integrating Supabase Auth, PostgreSQL RLS, cloud storage, AI-assisted product management, and Vercel custom domain hosting.",
    tags: ["Full-Stack", "Supabase", "PostgreSQL", "Vercel"]
  },
  {
    year: "2026",
    title: "B.Eng Mechatronics Engineering Graduation",
    organization: "Air Force Institute of Technology (AFIT), Kaduna",
    subtitle: "Bachelor of Engineering Capstone Completion",
    description: "Completed undergraduate degree in Mechatronics Engineering, designing and developing an intelligent underground IED detection prototype using multi-sensor fusion and Random Forest machine learning.",
    tags: ["B.Eng Mechatronics", "AFIT Kaduna", "Sensor Fusion", "Random Forest"]
  },
  {
    year: "Current",
    title: "Building Notely & Learning MLOps",
    subtitle: "AI Application & Backend Engineering",
    description: "Collaborating in a software team building Notely (podcast note taking app), contributing to AI episode matching algorithms, transcript processing, and backend functionality.",
    tags: ["Notely", "TypeScript", "FastAPI", "AI Integration", "AWS", "MLOps"],
    isCurrent: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages for backend microservices, data analysis, and web development.",
    skills: [
      { name: "Python", highlighted: true },
      { name: "SQL", highlighted: true },
      { name: "JavaScript", highlighted: true },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    category: "Backend",
    description: "Frameworks, protocols, and database services for scalable application architecture.",
    skills: [
      { name: "FastAPI", highlighted: true },
      { name: "REST APIs", highlighted: true },
      { name: "Authentication", highlighted: true },
      { name: "Supabase", highlighted: true }
    ]
  },
  {
    category: "Database",
    description: "Relational database modeling, query tuning, and cloud data platforms.",
    skills: [
      { name: "PostgreSQL", highlighted: true },
      { name: "Supabase DB", highlighted: true }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Version control, containerization, cloud infrastructure, and deployment pipelines.",
    skills: [
      { name: "Git", highlighted: true },
      { name: "GitHub", highlighted: true },
      { name: "Docker", highlighted: true },
      { name: "Vercel", highlighted: true },
      { name: "AWS", highlighted: true }
    ]
  },
  {
    category: "Machine Learning & Data",
    description: "Data analysis libraries and tabular classification ML frameworks.",
    skills: [
      { name: "NumPy", highlighted: true },
      { name: "Pandas", highlighted: true },
      { name: "Scikit-learn", highlighted: true }
    ]
  },
  {
    category: "Engineering & Tools",
    description: "Hardware telemetry, CAD software, edge computing, and operating systems.",
    skills: [
      { name: "SOLIDWORKS" },
      { name: "MATLAB" },
      { name: "Raspberry Pi", highlighted: true },
      { name: "Linux", highlighted: true },
      { name: "Microsoft Office Suite" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "notely",
    title: "Notely",
    subtitle: "AI Podcast Note-Taking & Transcript Intelligence Platform",
    role: "AI / Backend Developer | Team Project",
    status: "In Development",
    featured: true,
    description: "Collaborating in a cross-functional software development team to build Notely, a mobile application that enables users to capture timestamped notes while listening to podcasts.",
    problem: "Podcast listeners waste hours manually skimming long-form audio transcripts or taking fragmented notes without actionable timestamp anchors.",
    solution: "Notely automates podcast transcript ingestion, AI episode matching, transcript analysis, confidence scoring, and intelligent note extraction.",
    myRole: "Contributed to AI algorithm development, transcript processing pipelines, confidence scoring, and backend functionality, collaborating via Git branching and code reviews.",
    responsibilities: [
      "Collaborated in a cross-functional software team to build timestamped podcast note capturing.",
      "Designed and implemented AI-driven episode matching and transcript processing algorithms.",
      "Developed backend logic for transcript analysis, confidence scoring, and intelligent note extraction.",
      "Maintained Git & GitHub feature branching, pull requests, and peer code reviews.",
      "Collaborated with frontend and backend developers to integrate AI functionality."
    ],
    architecture: "Asynchronous transcript ingestion pipeline -> AI episode matching & confidence scoring -> Backend API service -> Mobile client app.",
    techStack: ["TypeScript", "Node.js", "Python", "FastAPI", "Git", "GitHub", "AI Algorithms"],
    image: "/images/project-notely.jpg",
    githubUrl: "https://github.com/quantumdata66",
    liveUrl: "#"
  },
  {
    id: "quantum-jersey",
    title: "Quantum Jersey",
    subtitle: "Full-Stack Football Merchandise E-Commerce Platform",
    role: "Full-Stack Developer",
    status: "Production Ready",
    featured: true,
    description: "Built and deployed a production-ready football merchandise e-commerce platform with Supabase Auth, PostgreSQL, cloud object storage, and AI-assisted product management.",
    problem: "Traditional sports retail templates suffer from slow page loads, poor security controls, and tedious manual inventory uploads.",
    solution: "Quantum Jersey delivers fast responsive pages, secure Row-Level Security (RLS) policies, an admin dashboard for inventory updates, and AI-assisted product publishing workflows.",
    myRole: "Architected and built the complete platform from database schema to Vercel deployment with custom domain integration.",
    features: [
      "Supabase Authentication & Row-Level Security (RLS)",
      "PostgreSQL relational database integration",
      "Cloud Object Storage for merchandise media assets",
      "Administrative Dashboard for product management & inventory updates",
      "AI-assisted product management workflows",
      "Vercel deployment with custom domain"
    ],
    architecture: "Full-stack web application consuming Supabase Auth & PostgreSQL database with RLS policies, media bucket storage, and Vercel edge deployment.",
    techStack: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "GitHub", "Vercel"],
    image: "/images/project-quantum-jersey.jpg",
    githubUrl: "https://github.com/quantumdata66/quantum-jersey",
    liveUrl: "https://quantum-jersey.vercel.app"
  },
  {
    id: "ied-detection",
    title: "Design and Development of an Underground IED Detection System Using Sensor Fusion",
    subtitle: "Bachelor of Engineering Final Year Capstone Project",
    role: "Mechatronics & ML Engineer",
    status: "Final Year Project",
    featured: true,
    description: "Bachelor of Engineering Final Year Project at Air Force Institute of Technology (AFIT), Kaduna. Designed and developed an intelligent underground IED detection prototype using multi-sensor fusion and Random Forest machine learning.",
    problem: "Manual detection of subterranean explosive devices is dangerous, and single-sensor systems suffer high rates of false alarms.",
    solution: "Built a multi-sensor fusion system integrating magnetic, thermal, and gas sensors with Raspberry Pi for real-time monitoring and Random Forest classification.",
    myRole: "Designed sensor hardware integration, developed the PyQt visualization GUI, and evaluated Random Forest machine learning models to improve detection reliability.",
    features: [
      "Multi-Sensor Fusion (Magnetic, Thermal, Gas Sensors)",
      "Raspberry Pi edge compute unit for real-time environmental monitoring",
      "PyQt Graphical User Interface (GUI) for telemetry visualization",
      "Random Forest machine learning model to reduce false positives"
    ],
    architecture: "Sensor Signal Ingestion (Magnetic, Thermal, Gas) -> Raspberry Pi Processing Daemon -> Machine Learning Classifier (Random Forest) -> PyQt Telemetry GUI.",
    techStack: ["Python", "Raspberry Pi", "PyQt", "Machine Learning", "Random Forest", "Sensor Fusion"],
    image: "/images/project-ied-detection.jpg",
    githubUrl: "https://github.com/quantumdata66/underground-ied-detection",
    liveUrl: "#"
  }
];

export const EXPERIENCE_DETAILS = {
  company: "Transmission Company of Nigeria (TCN)",
  department: "Protection, Control & Metering (PC&M) Department",
  location: "Nigeria",
  period: "Industrial Trainee | Jul 2021–Dec 2021, Jun–Sep 2024, Apr–Oct 2025",
  highlights: [
    "Worked across transmission operations and the Protection, Control & Metering (PC&M) department.",
    "Assisted in preventive maintenance of high-voltage transmission infrastructure.",
    "Participated in relay testing, protection system maintenance, and equipment inspections.",
    "Gained practical experience in electrical transmission systems, engineering maintenance, and operational safety procedures."
  ]
};

export const BLOG_POSTS = [
  {
    slug: "building-scalable-podcast-pipelines-fastapi",
    title: "Architecting Async Audio Processing Pipelines with FastAPI and Worker Queues",
    description: "How we structured Notely's transcript ingestion pipeline to parse podcast RSS feeds, queue audio chunks, and stream AI summaries with low latency.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Backend Systems"
  },
  {
    slug: "sensor-fusion-random-forest-edge-devices",
    title: "Edge AI: Running Random Forest Classifiers on Embedded Linux Hardware",
    description: "Lessons learned from deploying real-time sensor fusion models on a Raspberry Pi for sub-second hazard classification without cloud dependence.",
    date: "Coming Soon",
    readTime: "8 min read",
    tag: "Mechatronics & AI"
  },
  {
    slug: "supabase-rls-production-ecommerce",
    title: "Zero-Trust Database Security: Row-Level Security Patterns in Supabase",
    description: "Designing airtight PostgreSQL RLS policies and JWT session claims for modern Next.js e-commerce applications.",
    date: "Coming Soon",
    readTime: "5 min read",
    tag: "Database & Cloud"
  }
];
