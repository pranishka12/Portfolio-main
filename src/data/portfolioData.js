// ============================================================
// portfolioData.js — Centralized configuration for Pranishka Sivakumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Pranishka S",
  firstName: "Pranishka S",
  brandName: "Pranishka S",
  title: "Data Analyst | SQL | Power BI | Python",
  location: "TamilNadu, India",
  phone: "+91 9342475900",
  emails: {
    primary: "pranishka1212@gmail.com",
    secondary: "pranishka1212@gmail.com",
  },
  summary:
    "Hi, I'm Pranishka Sivakumar, a Data Analyst and AI & Data Science graduate passionate about transforming data into actionable business insights. I enjoy working with SQL, Python, Excel and Power BI to analyze datasets, identify trends and build dashboards that support data-driven decision making.",
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
    "Data Analyst specializing in SQL, Power BI, Excel, Python and Business Analytics",
  ctaPrimary: { text: "Explore Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pranishka1212@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Prani,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Pranishka_S_Resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Pranishka Sivakumar</span>, I'm Pranishka Sivakumar, a Data Analyst and AI & Data Science graduate passionate about transforming data into actionable business insights. I enjoy working with SQL, Excel, Python and Power BI to analyze datasets, identify trends and create interactive dashboards that support data-driven decision making. I am continuously improving my analytical, visualization and business intelligence skills through real-world projects and data-driven problem solving.`,
  techStack: ["📊 SQL","📈 Power BI","📋 Excel","🐍 Python"],
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
      
      text:"Understand business objectives and KPIs."
      
      },
      
      {
      
      number:"02",
      
      title:"Build",
      
      text:"Clean, transform and validate data."
      
      },
      
      {
      
      number:"03",
      
      title:"Evaluate",
      
      text:"Identify trends, patterns and insights."
      
      },
      
      {
      
      number:"04",
      
      title:"Deploy",
      
      text:"Build dashboards and reports for decision making."
      
      }
      
    ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
    title: "Data Analysis Tools",
    skills: [
      { name: "Excel", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 75 }
    ]
  },
  {
    title: "Data Analysis",
    skills: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 75 },
      { name: "Statistics", level: 70 },
      { name: "Data Cleaning", level: 80 },
      { name: "Data Visualization", level: 80 }
    ]
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", level: 65 }
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
      "Data Analysis",
      "Data Preprocessing",
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
      "Data Analysis",
      "Data Cleaning",
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
    desc: "Analyzing data and solving business problems through data-driven insights."
  },

  {
    name: "Analytical Thinking",
    icon: "📊",
    desc: "Identifying patterns, trends and actionable insights from complex datasets."
  },

  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working effectively with cross-functional teams to achieve business objectives."
  },

  {
    name: "Leadership",
    icon: "👑",
    desc: "Leading teams and coordinating events through JCI leadership roles."
  },

  {
    name: "Communication",
    icon: "💬",
    desc: "Presenting data insights and analytical findings in a clear and understandable manner."
  },

  {
    name: "Continuous Learning",
    icon: "📚",
    desc: "Continuously improving skills in Data Analytics, SQL, Power BI and business intelligence."
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
      name: "Certified Data analyst",
  issuer: "Simplilearn",
  icon: "🏅",
    },
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
  badge: "Analytics Expertise",

heading: "Areas of Expertise",

description:
  "I transform raw data into meaningful insights through data analysis, visualization, reporting and business intelligence solutions using SQL, Python, Excel and Power BI.",

categories: [
  {
    title: "Data Analysis",
    description:
      "Analyzing structured and unstructured datasets to identify trends, patterns and actionable insights.",
    stats: "SQL • Python",
    icon: "📊",
  },

  {
    title: "Business Intelligence",
    description:
      "Building interactive dashboards and KPI reports to support business decision-making.",
    stats: "Power BI • Excel",
    icon: "📈",
  },

  {
    title: "Data Visualization",
    description:
      "Creating compelling visualizations and dashboards to communicate insights effectively.",
    stats: "Power BI • Matplotlib",
    icon: "📉",
  },

  {
    title: "Predictive Analytics",
    description:
      "Applying statistical analysis and machine learning techniques to forecast outcomes and support data-driven strategies.",
    stats: "Pandas • Scikit-learn",
    icon: "🔍",
  },
  ]
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
    "Data Analytics",
    "Business Intelligence",
    "SQL",
    "Power BI"
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
