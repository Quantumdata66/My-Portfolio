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
  title: "Backend Engineer | AI Engineer | Mechatronics Engineer",
  roles: [
    "Backend Engineer",
    "Machine Learning Engineer",
    "Mechatronics Engineer",
    "AI Systems Builder"
  ],
  location: "Lagos, Nigeria",
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
    year: "2021",
    title: "Industrial Training (Foundation)",
    subtitle: "Mechanical & Electrical Systems Mechanics",
    description: "Initial hands-on engineering immersion focusing on control loops, sensor calibration, and fundamental systems programming.",
    tags: ["Mechatronics", "Control Systems", "Hardware"]
  },
  {
    year: "2024",
    title: "Transmission Company of Nigeria (TCN)",
    organization: "Protection, Control & Metering (PCM) Dept",
    subtitle: "Power System Automation & Protection Engineering",
    description: "Specialized in high-voltage protective relay testing, substation automation protocol monitoring, grid meter calibration, and preventive maintenance of critical energy infrastructure.",
    tags: ["Relay Testing", "PCM", "Power Systems", "Grid Automation"]
  },
  {
    year: "2025",
    title: "Built Quantum Jersey",
    subtitle: "Production E-Commerce Platform Engine",
    description: "Architected and launched a production-ready football apparel platform featuring Supabase Auth, PostgreSQL RLS, storage buckets, custom domain routing, and Vercel edge deployment.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel"]
  },
  {
    year: "2026",
    title: "B.Eng Mechatronics Engineering Graduation",
    subtitle: "Bachelor of Engineering Capstone Completion",
    description: "Completed undergraduate degree with distinction in Mechatronics Engineering, defending an AI-driven multi-sensor underground hazard detection system.",
    tags: ["B.Eng Mechatronics", "Sensor Fusion", "Random Forest"]
  },
  {
    year: "Current",
    title: "Building Notely & Learning MLOps",
    subtitle: "AI Systems Engineering & Cloud Architecture",
    description: "Engineered core backend and transcript matching pipeline for Notely AI. Expanding mastery across AWS serverless, PyTorch model deployment, and production MLOps workflows.",
    tags: ["FastAPI", "AI Integration", "AWS", "MLOps"],
    isCurrent: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming languages used for high-performance backend, data manipulation, and fullstack apps.",
    skills: [
      { name: "Python", highlighted: true },
      { name: "SQL", highlighted: true },
      { name: "TypeScript", highlighted: true },
      { name: "JavaScript" }
    ]
  },
  {
    category: "Backend",
    description: "Frameworks and patterns for scalable microservices, API design, and authentication.",
    skills: [
      { name: "FastAPI", highlighted: true },
      { name: "REST APIs", highlighted: true },
      { name: "Supabase", highlighted: true },
      { name: "Authentication" }
    ]
  },
  {
    category: "Database",
    description: "Relational database modeling, query optimization, indexing, and vector embeddings.",
    skills: [
      { name: "PostgreSQL", highlighted: true },
      { name: "Supabase DB", highlighted: true },
      { name: "SQL Query Tuning" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    description: "Containerization, edge deployments, continuous integration, and cloud services.",
    skills: [
      { name: "Docker", highlighted: true },
      { name: "AWS", highlighted: true },
      { name: "Vercel", highlighted: true },
      { name: "GitHub Actions" }
    ]
  },
  {
    category: "Machine Learning & AI",
    description: "Data analysis, feature extraction, tabular ML classification, and LLM API integrations.",
    skills: [
      { name: "NumPy", highlighted: true },
      { name: "Pandas", highlighted: true },
      { name: "Scikit-learn", highlighted: true },
      { name: "Whisper & LLM APIs" }
    ]
  },
  {
    category: "Engineering & Hardware",
    description: "Edge hardware integration, signal acquisition, Linux systems, and physical design tooling.",
    skills: [
      { name: "MATLAB" },
      { name: "SOLIDWORKS" },
      { name: "Linux Administration", highlighted: true },
      { name: "Raspberry Pi", highlighted: true }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "notely",
    title: "Notely",
    subtitle: "AI-Powered Podcast Note-Taking & Transcript Intelligence Platform",
    role: "AI & Backend Developer",
    status: "In Development",
    featured: true,
    description: "Collaborating in a software development team to build an AI-powered podcast note-taking application that intelligently matches podcast episodes, processes audio transcripts, and generates structured, timestamped notes.",
    problem: "Podcast listeners and researchers waste hours manually skimming long-form audio transcripts or taking fragmented notes without actionable timestamp anchors or semantic search capability.",
    solution: "Notely automates the ingestion of podcast RSS feeds, uses speech-to-text models to generate structured transcripts, and executes customized LLM prompts to extract key takeaways, chapters, action items, and quotes anchored with direct timecodes.",
    myRole: "Engineered the core backend pipeline for RSS feed parsing, automated transcript processing queues, episode matching algorithms, and RESTful API endpoints for the client layer.",
    responsibilities: [
      "Designed episode matching algorithms to pair incoming audio files with canonical RSS feed metadata.",
      "Implemented transcript processing pipelines for entity recognition and note summaries.",
      "Developed high-throughput backend APIs using FastAPI and Supabase.",
      "Integrated OpenAI & Whisper AI APIs for low-latency summary generation.",
      "Maintained strict Git workflow and collaborative team code reviews."
    ],
    architecture: "Event-driven asynchronous microservice architecture. Ingests podcast RSS feeds -> Queue task processing -> Audio transcription -> Vector embedding storage in Supabase PostgreSQL -> FastAPI response layer for Next.js frontend.",
    techStack: ["Python", "FastAPI", "Supabase", "PostgreSQL", "OpenAI API", "Whisper", "Docker"],
    image: "/images/project-notely.jpg",
    githubUrl: "https://github.com/quantumdata66",
    liveUrl: "#"
  },
  {
    id: "quantum-jersey",
    title: "Quantum Jersey",
    subtitle: "Production-Ready Football Apparel E-Commerce Platform",
    role: "Fullstack & Database Architect",
    status: "Production Ready",
    featured: true,
    description: "A high-performance, dark-aesthetic e-commerce platform custom designed for football kit enthusiasts with secure authentication, real-time inventory management, cloud storage, and AI-assisted cataloging.",
    problem: "Traditional sports retail templates suffer from slow page loads, cluttered interfaces, poor mobile responsiveness, and fragile database security models.",
    solution: "Quantum Jersey delivers sub-second page transitions, dynamic glassmorphic product cards, automated Supabase Row-Level Security (RLS) policies, and an intuitive admin dashboard for inventory management.",
    myRole: "Designed the fullstack architecture from database schema normalization to Vercel production deployment and payment flow setup.",
    features: [
      "Supabase Row-Level Security (RLS) Authentication",
      "PostgreSQL relational database schema with custom indexes",
      "Cloud Storage integration for high-resolution jersey media",
      "Comprehensive Admin Dashboard for stock management",
      "AI-assisted product categorization and description generator",
      "Responsive Dark Glassmorphism UI",
      "Custom Domain deployment on Vercel Edge Network"
    ],
    architecture: "Next.js App Router frontend consuming Supabase Client and Server SDKs, leveraging server-side rendering (SSR) and edge caching for instant product filtering and stock validation.",
    techStack: ["Next.js 15", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL", "Vercel"],
    image: "/images/project-quantum-jersey.jpg",
    githubUrl: "https://github.com/quantumdata66/quantum-jersey",
    liveUrl: "https://quantum-jersey.vercel.app"
  },
  {
    id: "ied-detection",
    title: "Underground IED Detection System",
    subtitle: "Multi-Sensor Fusion & ML Autonomous Underground Hazard Classification",
    role: "Lead Mechatronics & ML Engineer",
    status: "Final Year Project",
    featured: true,
    description: "Bachelor of Engineering Final Year Capstone Project. Designed and fabricated an embedded mechatronics system that combines magnetic, gas, and thermal telemetry with Random Forest machine learning algorithms to detect subterranean explosive threats.",
    problem: "Underground improvised explosive devices pose severe threats to personnel and infrastructure. Manual detection is dangerous, while single-sensor detectors produce high rates of false positives.",
    solution: "Built a multi-sensor fusion array on an autonomous Raspberry Pi 4 unit. Telemetry streams from magnetometers, gas sensors, and thermal arrays are processed in real-time by a trained Random Forest model to achieve high-precision hazard classification.",
    myRole: "Designed sensor hardware integration circuits, developed data collection pipelines, trained the machine learning classifier, and built the PyQt real-time telemetry GUI.",
    features: [
      "Hardware Sensor Fusion (Gas, Thermal, Magnetometer)",
      "Random Forest ML Model with 94%+ classification accuracy",
      "Raspberry Pi 4 Edge Compute Unit running Linux daemons",
      "PyQt Desktop System Telemetry & Visual Alert Dashboard",
      "Real-time signal filtering and anomaly detection"
    ],
    architecture: "Sensor Signal Acquisition (Analog/I2C) -> Raspberry Pi Hardware Driver -> Signal Preprocessing & Feature Vector Extraction -> Scikit-Learn Random Forest Classifier -> PyQt Telemetry GUI over local socket stream.",
    techStack: ["Python", "Scikit-learn", "Raspberry Pi", "PyQt5", "Linux", "MATLAB", "Sensor Fusion"],
    image: "/images/project-ied-detection.jpg",
    githubUrl: "https://github.com/quantumdata66/underground-ied-detection",
    liveUrl: "#"
  }
];

export const EXPERIENCE_DETAILS = {
  company: "Transmission Company of Nigeria (TCN)",
  department: "Protection, Control & Metering (PCM)",
  location: "Lagos / National Grid Station, Nigeria",
  period: "Industrial Training / Protection Engineer Intern",
  highlights: [
    "Performed high-voltage protective relay testing and secondary injection calibration for numerical and electromechanical distance, overcurrent, and differential protection relays.",
    "Participated in preventive maintenance and diagnostic troubleshooting of current transformers (CTs), voltage transformers (VTs), and circuit breaker tripping circuits across key transmission substations.",
    "Analyzed grid disturbance oscillograms and fault records to identify protection scheme response times and system stability metrics.",
    "Collaborated with senior metering engineers to verify energy meter accuracy and telemetry signals transmitted to the National Control Center."
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
    description: "Designing airtight PostgreSQL RLS policies and JWT session claims for modern Next.js 15 e-commerce applications.",
    date: "Coming Soon",
    readTime: "5 min read",
    tag: "Database & Cloud"
  }
];
