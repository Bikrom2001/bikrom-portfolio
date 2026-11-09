/**
 * Single source of truth for all portfolio content.
 * Every entry below is taken from Bikrom Roy's CV — edit here to update the site.
 */

export const profile = {
  name: "Bikrom Roy",
  roles: ["Jr. Software Developer", "Frontend Developer", "Web Development Instructor"],
  location: "Dhaka, Bangladesh",
  email: "bikromroy2001@gmail.com",
  siteUrl: "https://bikrom.vercel.app",
  cvPath: "/Bikrom-Roy-CV.pdf",
  cvFileName: "Bikrom-Roy-CV.pdf",
  ogImage: "/images/bikrom-roy.jpg",
  socials: {
    github: "https://github.com/Bikrom2001",
    linkedin: "https://www.linkedin.com/in/bikrom-roy/",
  },
  currentRole: {
    title: "Jr. Software Developer",
    company: "Washington University of Science and Technology",
    short: "WUST",
  },
  heroIntro:
    "I build fast, responsive web applications with React, Next.js, Laravel and Python — and teach aspiring developers to do the same. For 5+ years I've shipped university portals, e-learning platforms and business websites from Dhaka, Bangladesh.",
  metaDescription:
    "Bikrom Roy is a Jr. Software Developer, Frontend Developer and Web Development Instructor from Dhaka, Bangladesh with 5+ years of experience building websites and web applications with React, Next.js, PHP, Laravel and Python.",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "teaching", label: "Teaching" },
  { id: "gallery", label: "Gallery" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  paragraphs: [
    "I'm a software developer from Dhaka with more than five years of experience designing and building websites for universities, law firms, e-commerce brands, e-learning companies and growing businesses. I'm currently a Jr. Software Developer at Washington University of Science and Technology (WUST), where I develop web applications, RESTful APIs and database-driven features with PHP, Laravel and MySQL, and build responsive interfaces with React.js and Tailwind CSS.",
    "Before WUST, I spent three years as a Web Developer at PeopleNTech Ltd., creating and maintaining code for 30+ websites, turning designers' work into high-quality responsive interfaces, and improving performance with lazy loading, code splitting and asset optimisation. I'm also enhancing an LMS website with Next.js.",
    "Teaching is the other half of my work. As a trainer and instructor at Infosystem Technology Limited and eShikhon.com, I run practical, project-based sessions on HTML5, CSS3, JavaScript, Bootstrap, PHP, Laravel and MySQL — guiding students from fundamentals to real-world, portfolio-ready projects.",
  ],
  stats: [
    { value: "5+", label: "Years building for the web" },
    { value: "30+", label: "Websites coded & maintained" },
    { value: "1k +", label: "Students trained & mentored", featured: true },
    { value: "8", label: "Featured projects" },
    { value: "100+", label: "Problems solved on GeeksforGeeks" },
  ],
  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Currently", value: "Jr. Software Developer @ WUST" },
    { label: "Education", value: "B.Sc. in CSE, Daffodil International University" },
    { label: "Languages", value: "Bangla (native), English (professional)" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  id: "frontend" | "backend" | "database" | "tools" | "cms";
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive, accessible interfaces and modern component-driven UIs.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Router",
      "React Hooks",
      "Tailwind CSS",
      "Bootstrap 5",
      "React Bootstrap",
      "jQuery",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side features, MVC applications and RESTful APIs.",
    skills: ["PHP", "Laravel", "Python", "Django", "Flask", "FastAPI", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data modelling and queries for dynamic applications.",
    skills: ["MySQL", "SQL", "SQLite"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Version control, design hand-off, debugging and deployment.",
    skills: ["GitHub", "Bitbucket", "VS Code", "Chrome DevTools", "Figma", "Photoshop", "Vercel", "XAMPP", "PyCharm"],
  },
  {
    id: "cms",
    title: "CMS & Automation",
    description: "Site builders and workflow automation for business websites.",
    skills: ["WordPress", "Wix", "n8n Automation"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  role: string;
  company: string;
  period: string;
  meta?: string;
  kind: "development" | "teaching";
  current?: boolean;
  highlight?: boolean;
  points: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Jr. Software Developer",
    company: "Washington University of Science and Technology (WUST)",
    period: "Nov 2026 — Present",
    meta: "Remote",
    kind: "development",
    current: true,
    highlight: true,
    points: [
      "Develop, maintain and enhance web applications using modern web technologies.",
      "Work on backend functionality, database integration and RESTful API development.",
      "Develop and maintain application features using PHP, Laravel and MySQL.",
      "Build responsive, user-friendly interfaces with HTML, CSS, JavaScript, React.js and Tailwind CSS.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "REST API", "React.js", "Tailwind CSS"],
  },
  {
    role: "Associate Trainer — Digital Business Operations",
    company: "Infosystem Technology Limited · BACCO-SICIP Program",
    period: "Aug 2026 — Present",
    kind: "teaching",
    current: true,
    points: [
      "Provide hands-on training on eCommerce platforms, including WooCommerce, for setting up and managing online businesses.",
      "Train learners on CRM and customer support tools, including Zoho CRM, HubSpot and Freshdesk.",
      "Introduce business automation and AI-powered workflows using Claude AI, native CRM/ERP automation, Zapier and Make.",
    ],
  },
  {
    role: "Instructor — Web Design & Development with PHP",
    company: "eShikhon.com",
    period: "Jul 2026 — Oct 2026",
    meta: "Part-time",
    kind: "teaching",
    points: [
      "Conducted practical, project-based training on PHP, Laravel, MySQL, HTML5, CSS3, Bootstrap and JavaScript.",
      "Taught PHP fundamentals, Object-Oriented Programming (OOP), databases and CRUD operations.",
      "Guided students in developing real-world projects and portfolio-ready applications.",
      "Kept course content current with modern web technologies and programming trends.",
    ],
  },
  
  {
    role: "Web Design Trainer",
    company: "Infosystem Technology Limited",
    period: "Jan 2026 — Jun 2026",
    kind: "teaching",
    points: [
      "Delivered comprehensive training on HTML5, CSS3, Bootstrap and JavaScript.",
      "Guided students through real-world projects to build practical, industry-ready skills.",
      "Evaluated student performance through assignments, quizzes and project reviews.",
      "Introduced best practices in responsive design, UI/UX principles and cross-browser compatibility.",
    ],
  },
  {
    role: "Web Design And Development Trainer",
    company: "Ticon System Ltd",
    period: "Jan 2026 — Jun 2026",
    meta: "Part-time",
    kind: "teaching",
    points: [
      "Delivered comprehensive training on HTML5, CSS3, Bootstrap and JavaScript.",
      "Guided students through real-world projects to build practical, industry-ready skills.",
      "Evaluated student performance through assignments, quizzes and project reviews.",
      "Introduced best practices in responsive design, UI/UX principles and cross-browser compatibility.",
    ],
  },
  {
    role: "Web Developer",
    company: "PeopleNTech Ltd.",
    period: "Jan 2023 — Dec 2025",
    kind: "development",
    highlight: true,
    points: [
      "Created and maintained code for 30+ websites — redesigns, sectional updates and production work.",
      "Collaborated with UI/UX designers to turn designs into high-quality, responsive user interfaces.",
      "Wrote clean, maintainable and efficient code using modern JavaScript features and libraries.",
      "Improved site performance with lazy loading, code splitting and asset optimisation.",
      "Documented codebases and front-end processes to make onboarding easier for new team members.",
    ],
  },
  {
    role: "Web Developer (React JS)",
    company: "Qualyval Consulting",
    period: "Oct 2022 — Dec 2022",
    kind: "development",
    points: [
      "Designed and developed responsive web applications using React.js and Next.js.",
      "Integrated RESTful APIs and GraphQL endpoints between front-end and back-end systems.",
      "Optimised applications for performance and SEO, improving load times and search visibility.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "laravel" | "react" | "python";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  categories: ProjectCategory[];
  github: string;
  live?: string;
  /** Optional screenshot in /public/projects — falls back to a browser-frame preview. */
  image?: string;
  /** Hue (0–360) used by the generated preview. */
  hue: number;
};

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "laravel", label: "PHP & Laravel" },
  { id: "react", label: "React & Next.js" },
  { id: "python", label: "Python" },
];

export const projects: Project[] = [
  {
    slug: "wust",
    name: "Washington University of Science and Technology",
    tagline: "University web portal & information platform",
    description:
      "A comprehensive, fully functional web portal for WUST that streamlines academic services, institutional operations and user engagement.",
    highlights: [
      "Modern, intuitive interface aligned with higher-education UX best practices",
      "Secure, separate login dashboards for Students, Faculty and Management",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "jQuery", "Ajax"],
    categories: ["laravel"],
    github: "https://github.com/BikromRoy1/wust-university",
    live: "https://www.wust.edu/",
    image: "/projects/wust.jpg",
    hue: 220,
  },
  {
    slug: "jkkniu",
    name: "Jatiya Kabi Kazi Nazrul Islam University",
    tagline: "Full university website",
    description:
      "A complete website for Jatiya Kabi Kazi Nazrul Islam University, from the first UI/UX design through to a working product.",
    highlights: [
      "Designed the initial user interface and user experience",
      "Different login dashboards for Students, Teachers and Management",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "jQuery", "Ajax"],
    categories: ["laravel"],
    github: "https://github.com/BikromRoy1/KAZI-NAZRUL-ISLAM-UNIVERSITY",
    live: "https://jkkniu.edu.bd/",
    image: "/projects/jkkniu.jpg",
    hue: 160,
  },
  {
    slug: "barishal",
    name: "University of Barishal",
    tagline: "Dynamic Laravel MVC web application",
    description:
      "A fully dynamic web application built with PHP and Laravel following MVC architecture, with an admin dashboard for content, users and categories.",
    highlights: [
      "Admin dashboard to manage content, users, categories and other dynamic data",
      "Validation, authentication, routing, controllers, models and Blade templates",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap 5", "JavaScript"],
    categories: ["laravel"],
    github: "https://github.com/BikromRoy1",
    live: "https://bu.ac.bd/",
    image: "/projects/barishal.jpg",
    hue: 200,
  },
  {
    slug: "peoplentech-bd",
    name: "PeopleNTech Bangladesh",
    tagline: "IT training & placement platform",
    description:
      "A full-featured, dynamic platform for an IT training institute — showcasing courses, managing student admissions and streamlining career placement.",
    highlights: [
      "Advanced course filtering and automated registration / enrolment workflows",
      "Live batch status updates and interactive student support sections",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "daisyUI",
      "Laravel",
      "MySQL",
    ],
    categories: ["react", "laravel"],
    github: "https://github.com/BikromRoy1/peoplentech-app",
    live: "https://peoplentech.com.bd/",
    image: "/projects/peoplentech.jpg",
    hue: 250,
  },
  {
    slug: "peoplentech-llc",
    name: "PeopleNTech LLC",
    tagline: "Global corporate & workforce solutions platform",
    description:
      "An enterprise-grade, responsive interface focused on seamless navigation, professional branding and a strong user experience across global business sectors.",
    highlights: [
      "Structured sections for Workforce & Technology Solutions, IT Staffing and SOW management",
      "Consulting portfolios presented with clear, professional information architecture",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap 5", "JavaScript"],
    categories: ["laravel"],
    github: "https://github.com/BikromRoy1/Peoplentech-Canada",
    live: "https://peoplentech.com",
    image: "/projects/LLC.jpg",
    hue: 275,
  },
  {
    slug: "steam-olympiad",
    name: "National STEAM Olympiad",
    tagline: "Educational competition platform",
    description:
      "A competition platform with segment-based modules — Robotics, AI, ICT, Engineering, Mathematics, Science and more — from registration to the grand finale.",
    highlights: [
      "Multi-tier participant tracking across online and divisional rounds",
      "Multi-role registration for participants, partners, ambassadors and volunteers",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap 5", "JavaScript"],
    categories: ["laravel"],
    github: "https://github.com/BikromRoy1/National-Steam",
    live: "https://nationalsteamolympiad.com/",
    image: "/projects/National.jpg",
    hue: 30,
  },
  {
    slug: "itesseract",
    name: "iTesseract Technologies (LMS)",
    tagline: "E-learning platform",
    description:
      "A fully dynamic website for an e-learning company, with UI/UX design and an admin dashboard that controls courses, packages, blogs, teachers and site content.",
    highlights: [
      "Admin manages courses, packages, videos, teams, galleries, banner and footer",
      "Users book and manage appointments and their profiles",
    ],
    tech: ["React.js", "Tailwind CSS", "daisyUI", "JavaScript", "Clerk"],
    categories: ["react"],
    github: "https://github.com/BikromRoy1/iTesseract-Technologies",
    live: "https://www.itesseract.com.bd/",
    image: "/projects/itesseract.jpg",
    hue: 190,
  },
  {
    slug: "job-portal",
    name: "Job Portal",
    tagline: "Full-stack job search & recruitment platform",
    description:
      "A job search and recruitment platform with advanced search and filtering, authentication, profile management and application tracking.",
    highlights: [
      "Separate dashboards for Job Seekers and Employers / Recruiters",
      "Modern, responsive UI for a seamless application experience on any device",
    ],
    tech: ["Python", "Django", "FastAPI", "SQLite", "Bootstrap 5", "AJAX"],
    categories: ["python"],
    github: "https://github.com/Bikrom2001/job-Portal",
    hue: 140,
  },
];

/* ------------------------------------------------------------------ */
/* Teaching                                                            */
/* ------------------------------------------------------------------ */

export const teaching = {
  intro:
    "Alongside development, I train the next generation of developers and digital professionals — with practical, project-based sessions that move learners from fundamentals to real, working applications. Over 500-600+ students trained across web development and digital operations programs.",
  roles: [
    {
      title: "Instructor — Web Design & Development with PHP",
      org: "eShikhon.com",
      period: "Jul 2026 — Oct 2026",
      topics: ["PHP", "OOP", "Laravel", "MySQL", "CRUD", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
    },
    {
      title: "Associate Trainer — Digital Business Operations",
      org: "Infosystem Technology Limited · BACCO-SICIP",
      period: "Aug 2026 — Present",
      topics: ["WooCommerce", "Zoho CRM", "HubSpot", "Freshdesk", "Zapier", "Make", "Claude AI"],
    },
    {
      title: "Web Design Trainer",
      org: "Infosystem Technology Limited",
      period: "Jan 2026 — Jun 2026",
      topics: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive design", "UI/UX"],
    },
    {
      title: "Web Design And Development Trainer",
      org: "Ticon System Ltd",
      period: "Jan 2026 — Jun 2026",
      topics: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive design", "UI/UX"],
    },
  ],
  approach: [
    {
      title: "Project-based learning",
      text: "Students build real-world projects and portfolio-ready applications, not just exercises.",
    },
    {
      title: "Assessment & feedback",
      text: "Progress is measured through assignments, quizzes and hands-on project reviews.",
    },
    {
      title: "Industry best practices",
      text: "Responsive design, UI/UX principles and cross-browser compatibility from day one.",
    },
    {
      title: "Always current",
      text: "Course content is kept up to date with modern web technologies and programming trends.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Training Moments & Student Classroom Gallery                        */
/* ------------------------------------------------------------------ */

export type TrainingMoment = {
  id: string;
  title: string;
  company: string;
  level?: string;
  batch: string;
  period?: string;
  image?: string;
  images?: string[];
  isBrandLogo?: boolean;
  videoUrl?: string;
  type?: "image" | "video";
  badge?: string;
  featured?: boolean;
};

export const trainingMoments: TrainingMoment[] = [
  {
    id: "moment-dbo",
    title: "Digital Business Operations (DBO)",
    company: "Infosystem Technology Limited · BACCO-SICIP",
    batch: "DBO Batch 01",
    period: "2026",
    image: "/images/gallery/gallery-1.jpg",
    images: [
      "/images/gallery/gallery-1.jpg",
      "/images/gallery/gallery-2.jpg",
      "/images/gallery/gallery-3.jpg",
      "/images/gallery/gallery-4.jpg",
      "/images/gallery/gallery-6.jpg",
      "/images/gallery/gallery-8.jpg",
    ],
    type: "image",
    badge: "Certification Day",
    featured: true,
  },
  {
    id: "moment-video",
    title: "Live Classroom Experience & Practical Demo",
    company: "Infosystem Technology Limited · BACCO-SICIP",
    batch: "DBO Batch 01",
    period: "2026",
    image: "/images/gallery/gallery-3.jpg",
    videoUrl: "/images/gallery/gallery-video-1.mp4",
    type: "video",
    badge: "Video Highlight",
  },
  {
    id: "moment-bwcci-infosystem",
    title: "Web Design",
    company: "Infosystem Technology Limited",
    level: "Level 3",
    batch: "ASSET-BWCCI-3rd Cycle",
    period: "2026",
    image: "/images/gallery/gallery-bwcci-2.jpg",
    images: [
      "/images/gallery/gallery-bwcci-2.jpg",
      "/images/gallery/gallery-bwcci-1.jpg",
    ],
    type: "image",
    badge: "ASSET-BWCCI",
  },
  {
    id: "moment-python",
    title: "Web Application Development with Python Level 4",
    company: "eShikhon.com",
    level: "Level 4",
    batch: "NSDA-WADP-L4-B2",
    period: "2026",
    image: "/images/gallery/gallery-eshikhon-batch1.jpg",
    images: ["/images/gallery/gallery-eshikhon-batch1.jpg"],
    type: "image",
    badge: "Python Track",
  },
  {
    id: "moment-freelance-eshikhon",
    title: "Web Design and Development for Freelancing Level 3",
    company: "eShikhon.com",
    level: "Level 3",
    batch: "NSDA-WDFF-L3-B2",
    period: "2026",
    image: "/images/gallery/gallery-5.jpg",
    images: ["/images/gallery/gallery-5.jpg"],
    type: "image",
    badge: "Freelancing",
  },
  {
    id: "moment-php-eshikhon",
    title: "Complete Web Development with PHP, Laravel, and MySQL",
    company: "eShikhon.com",
    batch: "WDEV-Batch-N261-1",
    period: "2026",
    image: "/images/gallery/gallery-eshikhon-batch2.jpg",
    images: ["/images/gallery/gallery-eshikhon-batch2.jpg"],
    type: "image",
    badge: "PHP Track",
  },
  {
    id: "moment-wdev-eshikhon-262",
    title: "Complete Web Development with PHP, Laravel, and MySQL",
    company: "eShikhon.com",
    level: "Online",
    batch: "WDEV-Batch-N262-1",
    period: "2026",
    image: "/images/eshikhon-logo.png",
    isBrandLogo: true,
    type: "image",
    badge: "Online Track",
  },
  {
    id: "moment-mern-eshikhon-262",
    title: "AI Integrated MERN Stack Web Development",
    company: "eShikhon.com",
    level: "Online",
    batch: "MERN-Batch-N262-1",
    period: "2026",
    image: "/images/eshikhon-logo.png",
    isBrandLogo: true,
    type: "image",
    badge: "AI & MERN",
  },
  {
    id: "moment-ia-eshikhon-262",
    title: "Industrial Attachment Training",
    company: "eShikhon.com",
    level: "Offline",
    batch: "IA-Batch-D262-1",
    period: "2026",
    image: "/images/eshikhon-logo.png",
    isBrandLogo: true,
    type: "image",
    badge: "Industrial Lab",
  },
  {
    id: "moment-pyth-eshikhon-262",
    title: "Python Programming with Django",
    company: "eShikhon.com",
    level: "Online",
    batch: "PYTH-Batch-N262-1",
    period: "2026",
    image: "/images/eshikhon-logo.png",
    isBrandLogo: true,
    type: "image",
    badge: "Python Track",
  },
  {
    id: "moment-ticon",
    title: "Web Design and Development for Freelancing Level 3",
    company: "Ticon System Ltd",
    level: "Level 3",
    batch: "Batch 01",
    period: "2026",
    image: "/images/gallery/gallery-7.jpg",
    images: ["/images/gallery/gallery-7.jpg"],
    type: "image",
    badge: "Freelancing",
  },
];

/* ------------------------------------------------------------------ */
/* Education, certifications, training, activities                     */
/* ------------------------------------------------------------------ */

export const education = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
    institution: "Daffodil International University (DIU)",
    period: undefined as string | undefined,
  },
  {
    degree: "Diploma in Engineering — Computer Science and Engineering",
    institution: "Patuakhali Polytechnic Institute",
    period: "2017 — 2021",
  },
];

export const certifications = [
  { title: "Web Design and Development for Freelancing", level: "Level 3", issuer: "NSDA" },
  { title: "Web Application Development with Python", level: "Level 4", issuer: "NSDA" },
  { title: "Web Design", level: "Level 3", issuer: "NSDA" },
  { title: "Computer Operation", level: "Level 3", issuer: "NSDA" },
];

export const training = [
  { title: "Complete Web Development", provider: "Programming Hero" },
  { title: "Web Development", provider: "PeopleNTech Institute of IT" },
  { title: "Software Testing", provider: "PeopleNTech Institute of IT" },
];

export const activities = [
  "Solved 100+ problems on GeeksforGeeks",
  "Competed in the ICPC Asia Dhaka Regional Preliminary Round",
  "Participated in the DIU Take-off Programming Contest",
  "Student Prefect, Department of Computer Science and Engineering",
];
