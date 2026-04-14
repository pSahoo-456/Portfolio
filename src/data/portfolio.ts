export const personalInfo = {
  name: "Prakash Sahoo",
  email: "prakash2004sahoo@gmail.com",
  phone: "+91-9668187814",
  linkedin: "https://www.linkedin.com/in/prakash-sahoo-ai/",
  github: "https://github.com/pSahoo-456",
  taglines: [
    "AI/ML Engineer",
    "LLM & RAG Systems Builder",
    "Deep Learning Researcher",
    "Hackathon Champion"
  ],
  bio: "AI/ML engineer in the making. I design and build intelligent systems — from deep learning models to large-scale LLM and RAG applications.",
};

export const stats = [
  { label: "CGPA", value: 8.82, suffix: "" },
  { label: "Internships", value: 3, suffix: "+" },
  { label: "Hackathon Wins", value: 2, suffix: "" },
  { label: "IEEE Publications", value: 1, suffix: "" },
];

export const languages = [
  { name: "Odia", flag: "🇮🇳" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "English", flag: "🇬🇧" },
];

export const skills = {
  "Programming": ["Python", "Java", "C"],
  "ML/AI": ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "NLTK"],
  "LLM & RAG": ["LangChain", "Ollama", "FAISS", "Llama 3", "RAG Pipelines"],
  "Data": ["NumPy", "Pandas", "Matplotlib"],
  "Web/APIs": ["FastAPI", "Streamlit"],
  "Tools": ["Git", "GitHub", "VS Code", "Kaggle", "Google Colab", "Jupyter"],
  "Databases": ["MySQL"],
  "Cloud": ["Google Cloud (AI Labs)"],
};

export const experience = [
  {
    company: "DRDO-ITR, Chandipur",
    role: "AI/ML Intern",
    period: "Aug 2025 – Feb 2026",
    description: "Built LLM and RAG systems for real-world defence applications. Developed offline RAG pipeline with dual-path OCR engine, FAISS vector store, achieving 100% data recovery and automated LaTeX report generation — reduced manual review time by 80%.",
  },
  {
    company: "NIT Rourkela",
    role: "AI/ML Research Intern",
    period: "May 2024 – Jul 2024",
    description: "Developed Facial Emotion Recognition (FER) model using ResNet152 transfer learning. Fine-tuned CNN layers on FER dataset achieving 85% accuracy — 10% above baseline. Published in IEEE Xplore (IC-SIT 2024).",
  },
  {
    company: "IIG Varsity",
    role: "Java Developer Intern",
    period: "Jul 2023 – Aug 2023",
    description: "Built Contact Management System in Java + MySQL for 2000+ customer records. Implemented full CRUD operations with OOP design principles for scalable data management.",
  },
];

export const projects = [
  {
    title: "AI-Powered Tender Evaluation System",
    stack: ["LangChain", "Ollama", "FAISS", "LaTeX", "Llama 3"],
    description: "Offline RAG pipeline to automate procurement document evaluation. Dual-path OCR engine, FAISS vector store, 100% data recovery, automated LaTeX report generation — reduced manual review time by 80%.",
    badges: ["RAG", "LLM", "OCR", "LangChain"],
    ieee: false,
  },
  {
    title: "Enhanced Facial Emotion Recognition",
    stack: ["ResNet152", "Transfer Learning", "TensorFlow/Keras"],
    description: "Deep learning model classifying 7 human emotions. Fine-tuned CNN layers on FER dataset. 85% accuracy — 10% above baseline. Published in IEEE Xplore (IC-SIT 2024).",
    badges: ["IEEE Published ⭐", "Deep Learning", "Computer Vision"],
    ieee: true,
  },
  {
    title: "AI-Powered Air Pollution Monitoring System",
    stack: ["Random Forest", "Streamlit", "INSAT AOD Data", "CPCB"],
    description: "ML pipeline estimating surface-level PM2.5 from satellite AOD, ground station, and meteorological data. Deployed as real-time Streamlit web app.",
    badges: ["ML", "Environmental AI", "Streamlit"],
    ieee: false,
  },
  {
    title: "Contact Management System (IIG Varsity)",
    stack: ["Java", "MySQL"],
    description: "Scalable end-to-end system managing 2000+ customer records with full CRUD operations and OOP design.",
    badges: ["Java", "Database", "OOP"],
    ieee: false,
  },
];

export const achievements = [
  {
    title: "1st Place – Hackfest ADVAITA 2025",
    organization: "IIIT Bhubaneswar",
    icon: "🏆",
  },
  {
    title: "1st Place – GIET Hackathon 2025",
    organization: "Smart City & Sustainability",
    icon: "🏆",
  },
  {
    title: "4th Place – ML Hackathon",
    organization: "IIT Bhubaneswar (Pravaah'25)",
    icon: "🥈",
  },
  {
    title: "IEEE Published – IC-SIT 2024",
    organization: '"Enhanced FER Using Transfer Learning with ResNet152"',
    icon: "📄",
  },
  {
    title: "NPTEL Silver Badge – DSA using Java",
    organization: "IIT Kharagpur",
    icon: "🎖️",
  },
  {
    title: "NPTEL Silver Badge – ML for Engineering",
    organization: "IIT Madras",
    icon: "🎖️",
  },
  {
    title: "NPTEL Silver Badge – Cloud Computing",
    organization: "IIT Kharagpur",
    icon: "🎖️",
  },
];

export const education = [
  {
    institution: "GIFT Autonomous, Bhubaneswar",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022–2026",
    score: "CGPA: 8.83",
  },
  {
    institution: "Gourav Higher Secondary School",
    degree: "12th Grade",
    period: "2022",
    score: "88%",
  },
  {
    institution: "Jagannath Nodal High School, Bhadrak",
    degree: "Matriculation",
    period: "2020",
    score: "76%",
  },
];

export const seminars = [
  {
    title: "Exploring LSTMs, RNNs, and Transformers",
    venue: "GIFT Autonomous",
    description: "Conducted a technical seminar on sequence models and attention mechanisms, covering LSTM architecture, RNN variants, and Transformer models that power modern AI systems.",
  },
  {
    title: "Google Cloud AI Labs Workshop",
    venue: "IIT Bhubaneswar",
    description: "Participated in hands-on workshop covering AI Agents, Gemini CLI, and cloud-based ML deployment. Gained practical experience with Google Cloud's AI/ML ecosystem.",
  },
];
