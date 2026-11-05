export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: "AI / ML & NLP" | "Backend & Systems" | "Mechatronics & Embedded";
  status: "Completed" | "Team Project" | "Final Year Project" | "Production Ready" | "Personal Project";
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  personalContributions: string[];
  teamContext?: string;
  evaluationMetrics?: { label: string; value: string }[];
  architecture: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  githubPrivate?: boolean;
  liveUrl?: string;
  huggingFaceUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; icon?: string; highlighted?: boolean }[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  dateDiscrepancyNote?: string;
  location: string;
  type: string;
  summary: string;
  personalContributions: string[];
  tags: string[];
  photos?: { src: string; caption: string }[];
  current?: boolean;
}

export const PERSONAL_INFO = {
  name: "Abdulazeez Nurudeen Adedotun",
  shortName: "Abdulazeez Nurudeen",
  title: "AI/ML Engineer | Backend Developer",
  roles: [
    "AI/ML Engineer",
    "Backend Developer",
    "Mechatronics Engineer",
    "AI Systems Builder"
  ],
  location: "Lagos, Nigeria",
  timezone: "West Africa Time (WAT, UTC+1)",
  phone: "+234 902 636 6179",
  email: "nurdul4002@gmail.com",
  github: "https://github.com/Quantumdata66",
  linkedin: "https://www.linkedin.com/in/nurudeen-abdulazeez",
  portfolio: "https://quantumdata66.github.io/My-Portfolio",
  bio: "Mechatronics Engineering graduate with multidisciplinary experience spanning artificial intelligence, machine learning, software and backend engineering, and physical embedded systems. Experienced in developing software applications, applying data-driven approaches to engineering problems, and building solutions that bridge intelligent models to production-ready workflows.",
  philosophy: "Engineering excellence at the intersection of robust backend infrastructure, machine intelligence, and physical system dynamics.",
  education: {
    degree: "Bachelor of Engineering (B.Eng.) in Mechatronics Engineering",
    institution: "Air Force Institute of Technology (AFIT), Kaduna, Nigeria",
    period: "2022 – 2026",
    classification: "Second Class Upper",
    cgpa: "4.15 / 5.00"
  },
  stats: [
    { label: "Core Projects", value: "7" },
    { label: "Industrial Tenures", value: "3" },
    { label: "B.Eng CGPA", value: "4.15 / 5.0" },
    { label: "Commitment", value: "40+ hrs/wk" }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "Nexus BuildLab",
    role: "ML Intern / Backend Lead & Group Leader",
    period: "July 2026 – October 2026",
    dateDiscrepancyNote: "Listed as 'July 2026 – October 2026' in Master CV, while listed as 'Ongoing' in earlier drafts.",
    location: "Remote",
    type: "Internship & Leadership",
    current: false,
    summary: "Contributed to ScamCheck, an AI-powered scam-message detection system. Joined as an ML intern and assumed backend development responsibilities, helping connect detection algorithms into a usable application workflow while coordinating group activities.",
    personalContributions: [
      "Assumed responsibility for backend development alongside machine learning internship duties because the team needed backend support.",
      "Worked across the machine learning and application development workflow, connecting detection models to user-facing APIs.",
      "Coordinated group progress and team activities while contributing to technical implementation and cross-functional problem-solving.",
      "Collaborated with team members on implementation, testing, and project delivery."
    ],
    tags: ["FastAPI", "Python", "NLP", "Machine Learning", "Pydantic", "Pytest", "Team Leadership"]
  },
  {
    company: "Notely",
    role: "AI / Backend Developer",
    period: "December 2025 – June 2026",
    location: "Kaduna",
    type: "Team Project",
    current: false,
    summary: "Contributed to an application designed for capturing timestamped notes while listening to podcasts, working on transcript processing and AI-driven episode matching workflows.",
    personalContributions: [
      "Worked on AI-driven episode matching and transcript processing workflows within a cross-functional team.",
      "Supported the development of transcript analysis, confidence scoring, and intelligent information extraction processes.",
      "Reviewed and processed information to improve the relevance and quality of extracted notes and generated outputs.",
      "Applied analytical thinking to improve system logic and support reliable information processing.",
      "Communicated technical findings and collaborated with frontend and backend developers using Git and GitHub via feature branches, pull requests, and code reviews."
    ],
    tags: ["TypeScript", "Python", "FastAPI", "Transcript Processing", "Confidence Scoring", "Git/GitHub"]
  },
  {
    company: "Transmission Company of Nigeria (TCN)",
    role: "Industrial Trainee",
    period: "Jul 2021 – Dec 2021; Jun 2024 – Sep 2024; Apr 2025 – Oct 2025",
    location: "Lagos",
    type: "Industrial Training (3 Tenures)",
    current: false,
    summary: "Gained practical exposure across electricity transmission operations and the Protection, Control & Metering (PC&M) department across three distinct industrial training periods.",
    personalContributions: [
      "Assisted with preventive maintenance activities, equipment inspections, and operational monitoring on high-voltage transmission infrastructure.",
      "Observed and supported relay testing and secondary injection maintenance procedures.",
      "Developed practical understanding of transmission infrastructure, including 132kV and 33kV switchgear and 60MVA power transformers.",
      "Strictly adhered to technical procedures, safety protocols, and operational discipline in high-voltage environments."
    ],
    photos: [
      { src: "/images/tcn-1.jpg", caption: "High-Voltage Relay Protection & Maintenance Field Work" },
      { src: "/images/tcn-2.jpg", caption: "PC&M Secondary Injection Testing & Equipment Inspection" },
      { src: "/images/tcn-3.jpg", caption: "Transmission Substation Grid Telemetry & Operational Operations" }
    ],
    tags: ["Relay Testing", "PC&M", "Power Infrastructure", "Preventive Maintenance", "Operational Safety"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sms-spam-detection",
    title: "SMS Spam Detection",
    subtitle: "NLP & Transformer Classification Case Study",
    role: "Machine Learning / NLP Developer",
    category: "AI / ML & NLP",
    status: "Completed",
    featured: true,
    description: "An NLP classification study comparing a TF-IDF + Logistic Regression baseline against a fine-tuned DistilBERT transformer model using the SMS Spam Collection dataset, with model weights published on Hugging Face and an interactive Streamlit application.",
    problem: "SMS communications are vulnerable to spam and phishing attacks. Traditional bag-of-words and keyword-based filtering frequently fail to capture syntactic variations, leetspeak, and conversational context.",
    solution: "Trained a TF-IDF + Logistic Regression baseline, then fine-tuned a pretrained DistilBERT model. DistilBERT leveraged bidirectional attention to capture sub-word semantics, substantially reducing false negatives while maintaining high precision.",
    myRole: "Independently developed the project: preprocessed text data, fine-tuned the transformer using GPU resources, built comparative evaluation benchmarks, deployed the model to Hugging Face, and developed the Streamlit interface.",
    personalContributions: [
      "Cleaned and tokenized SMS text data using the DistilBERT tokenizer with attention masking.",
      "Implemented a TF-IDF + Logistic Regression baseline to establish an empirical benchmark.",
      "Fine-tuned a pretrained DistilBERT model with PyTorch and Hugging Face Transformers on GPU resources.",
      "Achieved 99.10% accuracy, 96.91% precision, 95.92% recall, and 96.41% F1-score on the held-out test set.",
      "Reduced missed spam predictions from 30 with the baseline model to 4 with the transformer model in the reported evaluation.",
      "Published model weights to the Hugging Face Hub (nurdul/spam_distilbert-sms) and built a Streamlit application.",
      "Considered model limitations, false predictions, privacy, and potential bias during evaluation."
    ],
    evaluationMetrics: [
      { label: "DistilBERT Accuracy", value: "99.10%" },
      { label: "DistilBERT F1-Score", value: "96.41%" },
      { label: "DistilBERT Precision", value: "96.91%" },
      { label: "DistilBERT Recall", value: "95.92%" },
      { label: "Missed Spam (Baseline vs Trans)", value: "30 → 4" }
    ],
    architecture: "SMS Text -> DistilBERT Tokenizer -> Fine-Tuned DistilBERT Classifier Head -> Softmax Probabilities -> Streamlit / Hugging Face Inference.",
    techStack: ["Python", "PyTorch", "Hugging Face", "Transformers", "DistilBERT", "Scikit-learn", "Streamlit"],
    image: "/images/project-notely.jpg",
    githubUrl: "https://github.com/Quantumdata66/NLP-SPAM_MESSAGES-",
    huggingFaceUrl: "https://huggingface.co/nurdul/spam_distilbert-sms"
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance",
    subtitle: "Machine Failure Prediction & Optimization",
    role: "Machine Learning Developer",
    category: "AI / ML & NLP",
    status: "Completed",
    featured: true,
    description: "A machine failure prediction pipeline built using the 10,000-record AI4I 2020 Predictive Maintenance Dataset, addressing severe class imbalance to reliably flag equipment at risk of breakdown.",
    problem: "In industrial operations, machine failures represent a rare minority class (3.39% in the AI4I dataset). Standard models that optimize for raw accuracy can achieve ~96.6% accuracy by simply predicting no failure, missing catastrophic breakdowns.",
    solution: "Addressed class imbalance through data preprocessing, domain feature engineering, class weighting, feature selection, 5-fold GridSearchCV hyperparameter tuning, and decision-threshold optimization.",
    myRole: "Independently built the end-to-end pipeline: handled exploratory data analysis, engineered operational features, performed cross-validated hyperparameter tuning, and evaluated precision, recall, F1, and ROC-AUC rather than relying on accuracy alone.",
    personalContributions: [
      "Built a machine-failure prediction pipeline using the 10,000-record AI4I 2020 Predictive Maintenance Dataset.",
      "Addressed 3.39% failure-class imbalance using preprocessing, feature engineering, class weighting, and feature selection.",
      "Engineered interaction features including power factor and temperature dissipation differences.",
      "Trained and evaluated machine-learning models, including Random Forest, with 5-fold GridSearchCV.",
      "Optimized decision thresholds: improved Random Forest F1-score from 71.21% to 88.19% and reduced false positives from 17 to 3 in the reported comparison.",
      "Evaluated precision, recall, F1-score, and ROC-AUC rather than relying on accuracy alone, utilizing feature importance analysis to investigate model behavior."
    ],
    evaluationMetrics: [
      { label: "Dataset Records", value: "10,000" },
      { label: "Failure Class Rate", value: "3.39%" },
      { label: "Baseline RF F1", value: "71.21%" },
      { label: "Optimized RF F1", value: "88.19%" },
      { label: "False Positives", value: "17 → 3" }
    ],
    architecture: "Sensor Telemetry -> Feature Engineering & Selection -> 5-Fold GridSearchCV -> Cost-Sensitive Random Forest -> Threshold Optimization -> Failure Flag.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Random Forest", "GridSearchCV", "Feature Engineering"],
    image: "/images/tcn-2.jpg",
    githubUrl: "https://github.com/Quantumdata66/Machine_Failure_Prediction"
  },
  {
    id: "scamcheck",
    title: "ScamCheck",
    subtitle: "AI-Powered Threat Detection & Explainability Engine",
    role: "ML Intern / Backend Lead & Group Leader | Team Project",
    category: "AI / ML & NLP",
    status: "Completed",
    teamContext: "Collaborative project developed at Nexus BuildLab.",
    featured: true,
    description: "An explainable threat-detection web application designed to help users identify potentially fraudulent messages, combining rule-based heuristics with machine-learning evaluation and structured explanation payloads.",
    problem: "Online users encounter increasingly deceptive text communications with artificial urgency and credential phishing. Simple keyword blacklists produce frequent false negatives and offer no contextual explanation.",
    solution: "Engineered a backend service built with FastAPI and Pydantic v2 schemas paired with NLP classification logic and a React interface, providing risk scoring, indicator explainability, and automated verification.",
    myRole: "Joined as an ML intern and assumed backend responsibilities alongside machine learning duties; served as Backend Lead and Group Leader connecting the detection objective to a usable application workflow.",
    personalContributions: [
      "Assumed backend responsibility after joining as an ML intern because the team needed dedicated backend support.",
      "Built backend components in FastAPI with Pydantic v2 validation and structured REST endpoints.",
      "Supported integration between the machine-learning detection functionality and the application workflow.",
      "Collaborated on automated testing: repository test suite contains 88 passing tests covering route validation, detectors, and adversarial obfuscation tests.",
      "Coordinated group progress and team activities while contributing to technical implementation and deployment configuration."
    ],
    evaluationMetrics: [
      { label: "Backend Framework", value: "FastAPI + Pydantic v2" },
      { label: "Automated Tests", value: "88 Tests Passing" },
      { label: "Architecture", value: "REST API + React UI" },
      { label: "Deployment", value: "Full-Stack on Vercel" }
    ],
    architecture: "React Client -> FastAPI REST API -> Pydantic Schema Validation -> Detection & Heuristics Engine -> Explainability Payload.",
    techStack: ["FastAPI", "Python", "Pydantic", "Pytest", "React", "TypeScript", "NLP", "Vercel"],
    image: "/images/project-notely.jpg",
    githubUrl: "https://github.com/Quantumdata66/Scamcheck",
    liveUrl: "https://scam-check1.vercel.app/"
  },
  {
    id: "notely",
    title: "Notely",
    subtitle: "AI Podcast Note-Taking & Transcript Intelligence Platform",
    role: "AI / Backend Developer | Team Project",
    category: "Backend & Systems",
    status: "Team Project",
    teamContext: "Collaborative team project.",
    featured: true,
    description: "An application developed with a cross-functional software team that enables users to capture timestamped notes and relevant information while listening to podcasts.",
    problem: "Podcast listeners often find it difficult to retain key ideas from long-form audio discussions or extract specific timestamped insights without tedious manual scrubbing.",
    solution: "Built automated workflows for podcast transcript processing, AI-driven episode matching, confidence scoring, and intelligent note extraction.",
    myRole: "Contributed to AI and backend workflows within a collaborative team. Did not build or own the entire application alone.",
    personalContributions: [
      "Contributed to AI-driven episode matching and transcript processing workflows.",
      "Supported the development of transcript analysis, confidence scoring, and intelligent information extraction processes.",
      "Reviewed and processed extracted information to improve the relevance and accuracy of generated outputs.",
      "Applied analytical thinking to improve system logic and support reliable information processing.",
      "Communicated technical findings and collaborated with frontend and backend developers using Git and GitHub through feature branches, pull requests, and code reviews."
    ],
    architecture: "Audio / RSS Ingestion -> Transcript Chunking -> AI Episode Matching -> Confidence Scoring -> Structured Note Extraction -> Client UI.",
    techStack: ["TypeScript", "Python", "FastAPI", "Node.js", "Transcript Processing", "Confidence Scoring", "Git/GitHub"],
    image: "/images/project-notely.jpg",
    githubPrivate: true
  },
  {
    id: "quantum-jersey",
    title: "Quantum Jersey",
    subtitle: "Full-Stack Sportswear E-Commerce Platform",
    role: "Full-Stack Developer",
    category: "Backend & Systems",
    status: "Production Ready",
    featured: true,
    description: "An independently designed and built full-stack e-commerce web platform for sportswear merchandise, featuring dynamic product catalogue, inventory management, PostgreSQL/Supabase database integration with Row-Level Security, authentication, cloud image storage, WhatsApp checkout routing, and Vercel deployment.",
    problem: "Sportswear retail operations require structured, dynamic catalog presentation, reliable inventory tracking, secure administrative controls, and an accessible, low-friction checkout channel tailored to customer mobile ordering habits.",
    solution: "Architected and built an end-to-end web platform integrating Supabase authentication, PostgreSQL with Row-Level Security policies, cloud media storage, administrative management functionality, and WhatsApp checkout integration.",
    myRole: "Independently designed, developed, and launched the complete platform from database schema to Vercel deployment; currently continuing development of product catalogue automation and platform workflows.",
    personalContributions: [
      "Independently designed and developed a full-stack e-commerce platform with dynamic product catalogue and inventory management.",
      "Implemented PostgreSQL database integration, Supabase authentication, and secure Row-Level Security (RLS) policies.",
      "Configured cloud object storage for merchandise media assets and product image uploads.",
      "Developed administrative functionality supporting product management, inventory updates, and image uploads.",
      "Integrated WhatsApp-based checkout to route customer orders directly to sales communication channels.",
      "Deployed the web application using Vercel with automated continuous delivery.",
      "Currently continuing active development of product catalogue automation and related platform workflows."
    ],
    architecture: "Frontend UI -> Supabase Auth & PostgreSQL Database (RLS Enforced) -> Cloud Object Storage -> WhatsApp Order Routing -> Vercel Edge Hosting.",
    techStack: ["JavaScript", "HTML5", "CSS3", "PostgreSQL", "Supabase", "Row-Level Security", "Vercel"],
    image: "/images/quantum-jersey.jpg",
    liveUrl: "https://quantumjersey.com.ng/",
    githubPrivate: true
  },
  {
    id: "auto-clinic",
    title: "Auto Clinic",
    subtitle: "Automotive Service & Workshop Operations Platform",
    role: "Full-Stack Software Developer (Personal Project)",
    category: "Backend & Systems",
    status: "Personal Project",
    featured: false,
    description: "A web platform built for an automotive equipment and vehicle maintenance business, featuring service and equipment presentation, maintenance-related workflows, and customer appointment booking functionality.",
    problem: "Automotive service providers frequently rely on informal, fragmented communication for service descriptions and appointment requests, leading to scheduling friction.",
    solution: "Built a structured web platform providing clear service and equipment presentation, vehicle maintenance workflows, and customer appointment booking.",
    myRole: "Independently designed and developed the platform, utilizing AI-assisted software development tools to support implementation and accelerate development.",
    personalContributions: [
      "Built an automotive service platform using AI-assisted development tools for an auto-equipment and vehicle-maintenance business.",
      "Developed service and equipment presentation, vehicle maintenance/check workflows, and customer appointment-booking functionality.",
      "Designed the application around an end-to-end customer journey from service discovery to appointment booking.",
      "Implemented database integration with Supabase and deployed the application on Vercel."
    ],
    architecture: "Web UI -> Server Components / Actions -> PostgreSQL / Supabase Persistence -> Appointment Booking Flow -> Vercel Deployment.",
    techStack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "CSS Modules", "Vercel"],
    image: "/images/defence.jpg",
    githubUrl: "https://github.com/Quantumdata66/Auto_clinic"
  },
  {
    id: "ied-detection",
    title: "Underground IED Detection System Using Sensor Fusion",
    subtitle: "B.Eng. Final-Year Project with PyQt Telemetry Monitoring",
    role: "Mechatronics & Embedded ML Developer",
    category: "Mechatronics & Embedded",
    status: "Final Year Project",
    featured: true,
    description: "Bachelor of Engineering capstone project at the Air Force Institute of Technology (AFIT), Kaduna: designed and developed an intelligent underground explosive detection prototype rover using multi-sensor inputs, sensor fusion techniques, Random Forest classification compared against a shallow model, and a custom PyQt monitoring application.",
    problem: "Detecting buried explosive hazards is hazardous, and single-sensor systems (such as standalone magnetic detectors) suffer from high false-positive rates when encountering mineralized ground or harmless metallic debris.",
    solution: "Designed and built an intelligent detection rover integrating magnetic, thermal, and gas sensor inputs with sensor-fusion techniques, evaluated machine learning models (Random Forest vs a shallow ML baseline), and developed a desktop PyQt monitoring interface for real-time visualization of transmitted rover events.",
    myRole: "Final-year capstone project: developed the intelligent detection prototype, collected and analyzed multi-sensor data, evaluated Random Forest against a shallow machine-learning model, and built the PyQt monitoring application for live on-site rover observation.",
    personalContributions: [
      "Designed and developed an intelligent detection prototype using multiple sensor inputs and sensor fusion techniques.",
      "Collected and analyzed magnetic, thermal, and gas sensor data for environmental monitoring and detection.",
      "Trained a Random Forest classification model and conducted a comparative evaluation against a shallow machine-learning model to assess detection reliability and false-positive reduction.",
      "Developed a PyQt graphical user interface for visualizing sensor information and monitoring system behavior.",
      "Implemented the monitoring application to display live events and detection information transmitted from the rover during on-site operation, enabling real-time observation and assessment.",
      "Integrated Raspberry Pi and ESP32 components as part of the physical embedded system architecture."
    ],
    evaluationMetrics: [
      { label: "Hardware Core", value: "Raspberry Pi & ESP32" },
      { label: "Sensor Array", value: "Magnetic, Thermal & Gas" },
      { label: "Models Evaluated", value: "Random Forest vs Shallow ML" },
      { label: "Monitoring App", value: "PyQt Desktop Telemetry GUI" }
    ],
    architecture: "Multi-Sensor Inputs (Magnetic, Thermal, Gas) -> Signal Acquisition -> Sensor Fusion -> Random Forest Classifier (vs Shallow Model) -> Telemetry -> PyQt Desktop Live Monitoring GUI.",
    techStack: ["Python", "Random Forest", "Raspberry Pi", "PyQt", "ESP32", "Sensor Fusion", "Data Analysis"],
    image: "/images/rover.jpg",
    githubUrl: "https://github.com/Danny26y/UED_Model/"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Machine Learning & AI",
    description: "Model development, empirical evaluation, transfer learning, and NLP pipelines.",
    skills: [
      { name: "Python", highlighted: true },
      { name: "Scikit-learn", highlighted: true },
      { name: "Natural Language Processing (NLP)", highlighted: true },
      { name: "DistilBERT", highlighted: true },
      { name: "Transformers", highlighted: true },
      { name: "Random Forest", highlighted: true },
      { name: "Logistic Regression" },
      { name: "Feature Engineering", highlighted: true },
      { name: "GridSearchCV" },
      { name: "Model Evaluation & Metrics" },
      { name: "Hugging Face" },
      { name: "Streamlit" }
    ]
  },
  {
    category: "Backend & Software Development",
    description: "REST APIs, application logic, database modeling, and authentication.",
    skills: [
      { name: "FastAPI", highlighted: true },
      { name: "REST APIs", highlighted: true },
      { name: "PostgreSQL", highlighted: true },
      { name: "Supabase", highlighted: true },
      { name: "SQL", highlighted: true },
      { name: "NodeJS" },
      { name: "Row-Level Security (RLS)" },
      { name: "Pydantic" },
      { name: "Pytest" },
      { name: "JavaScript" }
    ]
  },
  {
    category: "Data Analysis & Processing",
    description: "Data exploration, cleaning, statistical validation, and preparation.",
    skills: [
      { name: "Pandas", highlighted: true },
      { name: "NumPy", highlighted: true },
      { name: "Exploratory Data Analysis (EDA)", highlighted: true },
      { name: "Data Cleaning" },
      { name: "Class Imbalance Handling" },
      { name: "Data Processing" }
    ]
  },
  {
    category: "Deployment, Cloud & Tools",
    description: "Version control, containerization, deployment platforms, and AI tooling.",
    skills: [
      { name: "Git", highlighted: true },
      { name: "GitHub", highlighted: true },
      { name: "Docker" },
      { name: "Vercel", highlighted: true },
      { name: "Linux", highlighted: true },
      { name: "AI Agents & Workflows" }
    ]
  },
  {
    category: "Engineering & Embedded Systems",
    description: "Hardware interfacing, sensor fusion, edge compute, and desktop GUIs.",
    skills: [
      { name: "Raspberry Pi", highlighted: true },
      { name: "PyQt", highlighted: true },
      { name: "Sensor Fusion", highlighted: true },
      { name: "MATLAB", highlighted: true },
      { name: "SOLIDWORKS", highlighted: true },
      { name: "AUTOCAD" },
      { name: "Proteus" }
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Mercor — Introduction to Agents",
    issuer: "Mercor",
    year: "2026",
    description: "Verified foundational credential in AI agents, prompt architectures, and tool-augmented workflows."
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2024",
    description: "Data analysis and interpretation, data cleaning and preparation, structured problem-solving, and data-driven decision-making."
  }
];
