// ============================================================
// portfolioData.js — Centralized configuration for Pranishka Sivakumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Pranishka S",
  firstName: "Pranishka S",
  brandName: "Pranishka S",
  title: "AI & Machine Learning Engineer | Generative AI Developer",
  location: "TamilNadu, India",
  phone: "+91 9342475900",
  emails: {
    primary: "pranishka1212@gmail.com",
    secondary: "pranishka1212@gmail.com",
  },
  summary:
    "AI & Data Science Engineer passionate about Machine Learning, Deep Learning, Computer Vision and Generative AI. I build intelligent applications using Python, TensorFlow, PyTorch, Scikit-learn, Hugging Face, LangChain and modern AI frameworks. My focus is designing production-ready AI solutions, LLMs, NLP systems, Computer Vision applications, and intelligent automation.",
  resumeUrl: "/Pranishka_S_Resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/pranishka12",
  linkedin: "https://linkedin.com/in/pranishkas",
  instagram: "https://instagram.com/beloved_for_life",
};

export const heroContent = {
  greeting: "Hi, I'm Pranishka Sivakumar",
  subtitle:
    "AI & Machine Learning Engineer specializing in Machine Learning, Generative AI, Computer Vision and Large Language Models.",
  ctaPrimary: { text: "Explore Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pranishka1212@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Prani,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Pranishka_S_Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Pranishka Sivakumar</span>, AI & Data Science Engineer with a strong interest in building intelligent systems using Machine Learning, Deep Learning and Generative AI.

I enjoy solving real-world problems through Computer Vision, NLP, Large Language Models and AI-powered applications while continuously learning modern AI technologies.`,
  techStack: ["Python", "Machine Learning", "Deep Learning", "Generative AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust AIML applications.",
    cards:[

      {
      
      number:"01",
      
      title:"Understand",
      
      text:"Study the business problem, collect data and define the AI solution."
      
      },
      
      {
      
      number:"02",
      
      title:"Build",
      
      text:"Develop Machine Learning and Deep Learning models using modern frameworks."
      
      },
      
      {
      
      number:"03",
      
      title:"Evaluate",
      
      text:"Improve model performance using feature engineering and evaluation metrics."
      
      },
      
      {
      
      number:"04",
      
      title:"Deploy",
      
      text:"Deploy AI applications with scalable and production-ready architecture."
      
      }
      
    ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 75},
        { name: "SQL", level: 50 },
        { name: "Git", level: 70 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 50 },
        { name: "Regression", level: 65 },
        { name: "Classification", level: 50 }
      ]
    },
    
    {
      title: "Computer Vision",
      skills: [
        { name: "OpenCV", level: 85 },
        { name: "YOLO", level: 90 },
        { name: "Image Processing", level: 70 }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 75},
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "AWS/Azure(Basics)", level: 85 },
      ]
    },
  ]
};
// Brand New Leadership Data
export const leadershipList = [
  {
    title: "President – JCI Erode Excel Junior Wing",
    description:
      "Led technical and social initiatives by organizing events, managing cross-functional teams, and coordinating community programs while developing leadership and communication skills.",
    role: "President (2023 – 2024)",
    badge: "Leadership",
  },
  {
    title: "Vice President – JCI Erode Excel Junior Wing",
    description:
      "Supported strategic planning, event execution, and team coordination while contributing to organizational growth and member engagement.",
    role: "Vice President (2022 – 2023)",
    badge: "Leadership",
  },
  {
    title: "AI Innovation Competitions",
    description:
      "Won multiple technical competitions for AI-powered solutions in agriculture and chatbot development, demonstrating innovation and problem-solving abilities.",
    role: "Innovation",
    badge: "Awards",
  },
  {
    title: "Technical Workshops",
    description:
      "Participated in IIT technical workshops focused on emerging technologies, Artificial Intelligence, and engineering innovation.",
    role: "Participant",
    badge: "Learning",
  },
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Svasti Private Solutions, Madurai",
    role: "AI & Machine Learning Intern",
    duration: "JAN 2026 – May 2026",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "YOLOv8",
      "CNN",
      "Python",
      "NLP"
    ],
    tech: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "MQTT",
      "Raspberry Pi"
    ]
  },

  {
    organization: "Suguna Infotech, Coimbatore",
    role: "AI & Machine Learning Intern",
    duration: "July 2024",
    skills: [
      "Regression",
      "Feature Engineering",
      "Data Preprocessing",
      "Predictive Analytics"
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy"
    ]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧠",
    desc: "Developing AI solutions for real-world industrial and business problems."
  },

  {
    name: "Research",
    icon: "🔬",
    desc: "Exploring modern AI technologies and continuously learning emerging research."
  },

  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with multidisciplinary teams during internships and projects."
  },

  {
    name: "Leadership",
    icon: "👑",
    desc: "Leading technical teams and organizing events through JCI leadership roles."
  },

  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting AI ideas and explaining technical concepts in a clear manner."
  },

  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Actively learning Machine Learning, Generative AI and Computer Vision."
  }
];

export const projects = [
  {
    id:"AI Resume Analyzer",
    
    number:"01",
    
    badge:"⭐ Featured Project",
    
    title:"AI-powered ATS Resume Screening & Analysis Platform",
    
    description:
    "Developed an AI-powered Resume Analyzer that extracts information from PDF resumes, evaluates ATS compatibility, analyzes technical skills, and generates personalized improvement suggestions using Large Language Models (LLMs). The system helps job seekers optimize their resumes by providing ATS scores, keyword matching, resume summaries, and AI-driven recommendations for better job applications.",
    
    techTags:[
    "Python",
    "Streamlit",
    "PyMuPDF",
    "Google Gemini",
    "Pandas",
    "Scikit-learn",
    "NLP"
    ],
    
    links:{
    github:"https://github.com/pranishka12/AI-Resume-Analyzer.git"
    },
    
    isFlagship:true
    
  },
  
  {
      id:"smartmirror",
      
      number:"02",
      
      badge:"⭐ Featured",
      
      title:"Glow Guide – AI Smart Mirror",
      
      description:
      "An IoT-enabled smart mirror that performs facial skin analysis using Computer Vision and OpenCV to provide personalized skincare recommendations.",
      
      techTags:[
      "Python",
      "OpenCV",
      "Computer Vision",
      "Raspberry Pi",
      "YOLO"
      ],
      
      links:{
      github:"https://github.com/pranishka12/Smart-Mirror-Glow-Guide.git"
      },
      
      isFlagship:true
      
  },
  {
    id:"Solar Power Prediction",
    
    number:"03",
    
    badge:"⭐ Featured Project",
    
    title:"Solar Power Prediction",
    
    description:
    "Developed a Machine Learning model to predict solar power generation using historical weather and environmental data. The project includes data preprocessing, feature engineering, model training, and performance evaluation to support renewable energy forecasting.",
    
    techTags:[
    "Python",
    "Pandas",
    "Numpy",
    "Scikit-learn",
    "Matplotlib",
    "Machine Learning"
    ],
    
    links:{
    github:"https://github.com/pranishka12/Solar-Power-Prediction.git"
    },
    
    isFlagship:true
    
  },
  {
    id:"CNN Image Classification",
    
    number:"04",
    
    badge:"Featured Project",
    
    title:"CNN Image Classification",
    
    description:
    "Built a Convolutional Neural Network (CNN) model for image classification using TensorFlow and Keras. The project covers image preprocessing, deep learning model training, evaluation, and prediction with high classification accuracy.",
    
    techTags:[
    "Python",
    "Deep Learning",
    "Keras",
    "OpenCV",
    "Numpy",
    "TensorFlow"
    ],
    
    links:{
    github:"https://github.com/pranishka12/Image-Classification-Using-CNN.git"
    },
    
    isFlagship:true
    
  },
  

];

export const certificates = {
  featured: [
    {
      name: "Smart mirror - Glow Guide",
      issuer: "Journal of International Journal of Engineering Research in Computer Science and Engineering.",
      icon:"📄",
    },
    {
      name: "AI & Machine Learning Internship",
      issuer: "Svasti Private Solutions",
      icon: "🤖",
    },
    {
      name: "Machine Learning Internship",
      issuer: "Suguna Innovation Institute",
      icon: "📊",
    },
    {
      name: "IDE Bootcamp",
      issuer: "NITK Surathkal (AICTE & Ministry of Education)",
      icon: "💡",
    },
    {
      name: "Artificial Intelligence with Deep Learning",
      issuer: "IIT Madras",
      icon: "🎓",
    },
    {
      name: "Software Engineering",
      issuer: "NPTEL - IIT Kharagpur",
      icon: "💻",
    },
    {
      name: "1st Prize - TERRA AI Agriculture Assistant",
  issuer: "Inter college fest 2024, cbe",
  icon: "🌱",
    },
  ],

  viewAllUrl: "https://drive.google.com/drive/folders/1VkPaCiBV37bPf4s_8mJg6mYeql_Km7XL?usp=drive_link",
};
export const contentCreation = {
  badge: "AI Expertise",

  heading: "Areas of Expertise",

  description:
    "I build intelligent AI solutions by combining Machine Learning, Computer Vision, Deep Learning and Generative AI to solve real-world challenges.",

  categories: [
    {
      title: "Machine Learning",
      description:
        "Designing predictive models using supervised and unsupervised learning techniques.",
      stats: "Regression • Classification",
      icon: "🤖",
    },

    {
      title: "Computer Vision",
      description:
        "Building intelligent vision systems using OpenCV, CNNs and YOLO for real-time analysis.",
      stats: "OpenCV • YOLOv8",
      icon: "👁️",
    },

    {
      title: "Generative AI",
      description:
        "Developing AI applications using LLMs, LangChain, Prompt Engineering and Retrieval-Augmented Generation.",
      stats: "LLMs • RAG",
      icon: "🧠",
    },

    {
      title: "Data Science",
      description:
        "Performing data preprocessing, feature engineering and predictive analytics using Python.",
      stats: "Python • Pandas",
      icon: "📊",
    },
  ],
};

export const education = {
  degree:"B.Tech. Artificial Intelligence & Data Science",
  institution:"Velalar College of Engineering and Technology",
  cgpa:"8.52",
  graduation:"2026",
  twelfth:"Higher Secondary – 85%",
  tenth:"SSLC – 85%"
};

export const footerContent = {
  taglines:[
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Generative AI"
    ],
    
    credential:"B.E AI & Data Science | CGPA 8.52",
    
    copyright:
    `© ${new Date().getFullYear()} Pranishka Sivakumar`
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_zhr447d",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_agpv52s",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "vdtnbV6Gs2zzT6qwm",
};
