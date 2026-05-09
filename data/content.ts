export const siteConfig = {
  name: 'Menas Issam',
  title: 'Data Science & AI Engineering Student',
  subtitle: 'Building intelligent systems',
  description:
    '4th-year Industrial Engineering student (Data Science & AI track) at École Nationale Polytechnique d\'Alger. Passionate about NLP, Multi-Agent Systems, Computer Vision, and Operational Research.',
  url: 'https://issam-menas.vercel.app',
  email: 'issam.menas@g.enp.edu.dz',
  phone: '+213 672658298',
  github: 'https://github.com/Issamenas',
  linkedin: 'https://linkedin.com/in/issam-menas',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const aboutContent = {
  paragraphs: [
    '4th-year Industrial Engineering student (Data Science & AI track) at École Nationale Polytechnique d\'Alger (ENP), ranked 35/298 at the national entrance exam.',
    'Passionate about NLP, Multi-Agent Systems, Computer Vision, and Operational Research. Experienced building production-ready AI systems deployed on-premise.',
  ],
  highlights: [
    { label: 'Rank', value: '35/298', note: 'National entrance exam' },
    { label: 'Year', value: '4th', note: 'Industrial Eng. (Data Science & AI)' },
    { label: 'Focus', value: 'AI/ML', note: 'NLP · Agents · CV · OR' },
  ],
}

export const skillGroups = [
  {
    category: 'AI & Data Science',
    color: 'purple' as const,
    skills: [
      'Python', 'Machine Learning', 'Deep Learning', 'NLP', 'LLMs',
      'Fine-tuning', 'RAG', 'Computer Vision', 'Text-to-SQL',
      'Multi-Agent Systems', 'Prompt Engineering',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'cyan' as const,
    skills: [
      'CrewAI', 'LangChain', 'Hugging Face Transformers', 'Ollama',
      'pgvector', 'Plotly', 'spaCy', 'NLTK', 'Flask', 'React.js', 'Flutter',
    ],
  },
  {
    category: 'Data & Databases',
    color: 'emerald' as const,
    skills: ['PostgreSQL', 'pgvector', 'SQL', 'PowerBI', 'Excel', 'EViews'],
  },
  {
    category: 'Engineering & Tools',
    color: 'orange' as const,
    skills: [
      'Operational Research', 'XGBoost', 'Monte Carlo Simulation',
      'Huff Model', 'MATLAB', 'LaTeX', 'Git', 'GNS3',
    ],
  },
]

export const projects = [
  {
    id: 'multi-agent-erp',
    title: 'Multi-Agent AI System — ERP NLP Interface',
    tag: 'Internship Project',
    company: 'CETELEX TECHNOLOGY',
    period: 'Sep–Dec 2025',
    description:
      'Production-ready multi-agent AI system integrated into Odoo 18 ERP. Allows non-technical users to query a PostgreSQL database in natural French language. 4 autonomous agents orchestrated by CrewAI: Router, Data Analyst, Writer, Visualizer.',
    details: [
      'Semantic matching mechanism answers 70% of queries in under 0.1 seconds without invoking the LLM',
      'RAG pipeline for internal PDF document querying',
      '100% SQL execution rate on 20 gold-standard benchmark questions',
      'Deployed 100% on-premise (16 vCores, 64GB RAM, no GPU)',
    ],
    stack: [
      'Python', 'CrewAI', 'LangChain', 'Ollama', 'Qwen2.5-Coder 14B',
      'PostgreSQL', 'pgvector', 'Plotly', 'Odoo 18 OWL', 'Debian Linux',
    ],
    highlights: [
      { label: '100% SQL accuracy', color: 'purple' as const },
      { label: 'P50 latency: 0.03s', color: 'cyan' as const },
    ],
    featured: true,
    github: null,
  },
  {
    id: 'agency-optimizer',
    title: 'Agency Location Optimizer',
    tag: 'Data Science',
    company: null,
    period: null,
    description:
      'Recommends optimal locations for a company to open new agencies across Algerian communes. Combines the Huff gravity model for market share estimation with XGBoost for scoring and ranking candidate locations. Features an interactive web dashboard with simulation capabilities for scenario planning.',
    details: [],
    stack: ['Python', 'XGBoost', 'Huff Model', 'Geospatial Data', 'Web Dashboard'],
    highlights: [{ label: 'Geospatial', color: 'cyan' as const }],
    featured: false,
    github: null,
  },
  {
    id: 'seismic-risk',
    title: 'Seismic Insurance Risk Model',
    tag: 'Data Science',
    company: null,
    period: null,
    description:
      'Decision support system for an insurance company investing in earthquake coverage across Algerian communes. Predicts risk at commune level using population, capital, urbanization rate, and seismic zone data. Monte Carlo simulation quantifies financial exposure across thousands of scenarios.',
    details: [],
    stack: ['Python', 'XGBoost', 'Monte Carlo Simulation', 'Geospatial Data'],
    highlights: [{ label: 'FinTech', color: 'orange' as const }],
    featured: false,
    github: null,
  },
  {
    id: 'agrivisor',
    title: 'Agrivisor',
    tag: 'Personal Project',
    company: null,
    period: null,
    description:
      'Web platform helping farmers maximize revenue through data-driven crop optimization. Uses Operational Research algorithms (linear programming) to recommend the best crop mix given land, budget, and market constraints.',
    details: [],
    stack: ['Python', 'Flask', 'React.js', 'Linear Programming'],
    highlights: [{ label: 'Operational Research', color: 'emerald' as const }],
    featured: false,
    github: null,
  },
  {
    id: 'nlp-quiz',
    title: 'NLP Quiz Generator',
    tag: 'Academic Project',
    company: null,
    period: null,
    description:
      'Automatically generates MCQ questions from any input text using a hybrid NLP architecture. Question generation via Flan-T5 (seq2seq), distractor generation via BERT Masked Language Modeling. Built-in comparison of Rule-Based, Cloud LLM (Gemini), and local Transformer approaches.',
    details: [],
    stack: [
      'Python', 'Hugging Face Transformers', 'Flan-T5', 'BERT',
      'spaCy', 'NLTK', 'Flask', 'PyMuPDF',
    ],
    highlights: [{ label: 'NLP', color: 'purple' as const }],
    featured: false,
    github: null,
  },
]

export const experiences = [
  {
    id: 'cetelex',
    type: 'work' as const,
    company: 'CETELEX TECHNOLOGY',
    role: 'Data Science & AI Intern',
    period: 'Sep 2025 – Dec 2025',
    location: 'Algeria',
    description: 'Production-ready multi-agent AI system integrated into Odoo 18 ERP.',
    bullets: [
      'Built 4-agent CrewAI orchestration system (Router, Data Analyst, Writer, Visualizer)',
      'Implemented semantic matching answering 70% of NL queries under 0.1s without LLM calls',
      'Achieved 100% SQL execution rate on 20 gold-standard benchmark questions',
      'Full on-premise deployment on 16-vCore, 64GB RAM server with no GPU',
    ],
  },
  {
    id: 'kabas',
    type: 'work' as const,
    company: 'Kabas AI',
    role: 'Data Science Intern',
    period: '2025',
    location: 'Algeria',
    description: 'AI/ML engineering for the Oil & Gas drilling sector.',
    bullets: [
      'Built predictive models for Oil & Gas drilling operations',
      'Fine-tuned BERT on technical petroleum domain data',
      'Implemented RAG pipeline for contextual document analysis',
    ],
  },
  {
    id: 'mobilis',
    type: 'work' as const,
    company: 'Mobilis ATM',
    role: 'Full Stack Developer Intern',
    period: '2024',
    location: 'Algeria',
    description: 'Internal web application development for telecom operations.',
    bullets: [
      'Developed internal web application with React.js + Flask',
      'Built customer sampling module for targeted SMS campaigns',
    ],
  },
]

export const education = [
  {
    id: 'enp-engineer',
    type: 'education' as const,
    institution: 'École Nationale Polytechnique d\'Alger (ENP)',
    degree: 'Ingénieur d\'État, Génie Industriel — Data Science & IA',
    period: 'Sept 2024 – Present',
    location: 'Algiers, Algeria',
    description: 'Master-level engineering degree with specialization in Data Science & AI.',
    bullets: [
      'Key modules: ML, Deep Learning, Distributed Systems, Cryptography, Operational Research',
    ],
  },
  {
    id: 'enp-prepa',
    type: 'education' as const,
    institution: 'École Nationale Polytechnique d\'Alger (ENP)',
    degree: 'Classes Préparatoires aux Sciences et Techniques',
    period: 'Sept 2022 – Juin 2024',
    location: 'Algiers, Algeria',
    description: 'Intensive 2-year preparatory program in Mathematics, Physics & Engineering.',
    bullets: [
      'Ranked 35/298 at the national entrance competitive exam',
    ],
  },
]

export const competitions = [
  'Algeria DataCup',
  'DataHack 2024',
  'HAICK 2024',
  'Djezzy Code Fest',
  'Algeria 2.0',
]

export const volunteering = [
  {
    org: 'Industrial Engineering Club (IEC)',
    roles: 'HR, IT & External Relations',
    duration: '2 years',
    highlight: 'Organized Business Game (enterprise simulation software)',
  },
  {
    org: 'Vision and Innovation Club (VIC)',
    roles: 'HR Member',
    duration: '3 years',
    highlight: 'Organized "Shine" design hackathon',
  },
]
