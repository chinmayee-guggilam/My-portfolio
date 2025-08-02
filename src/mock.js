// Mock data for Chinmayee's Portfolio
export const mockData = {
  personal: {
    name: "Chinmayee Guggilam",
    title: "Computer Science Student & Full-Stack Developer",
    summary: "Final-year Computer Science student with proven experience in building full-stack web apps and ML models. Finalist at Smart India Hackathon, with a strong foundation in scalable product development, data analysis, and real-world deployments. Seeking to contribute to high-impact tech teams at product-based companies.",
    location: "India",
    email: "chinmayeeguggilam@gmail.com",
    phone: "+91-94931-88004",
    linkedin: "https://linkedin.com/in/chinmayee-guggilam",
    github: "https://github.com/chinmayee-guggilam"
  },

  projects: [
    {
      id: 1,
      title: "AI-Powered Learning Assistant",
      description: "Developed a Q&A assistant for classrooms with quiz generation and secure backend authentication.",
      technologies: ["React", "MongoDB", "Gemini API", "Node.js"],
      liveDemo: "https://ai-learning-assistant-two.vercel.app",
      github: "https://github.com/chinmayee-guggilam/ai-learning-assistant",
      category: "Full-Stack",
      featured: true,
      image: "/images/image1.jpg"
    },
    {
      id: 2,
      title: "Flight Cancellation Predictor",
      description: "ML model predicting flight cancellations with 87% accuracy based on weather and airline data.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/chinmayee-guggilam/Flight-Cancellation-Prediction",
      category: "Machine Learning",
      featured: true,
      image: "/images/image2.jpg"
    },
    {
      id: 3,
      title: "Carpooling Web App",
      description: "Built a ride-sharing platform with real-time location filters and dynamic UI.",
      technologies: ["React", "Firebase", "JavaScript"],
      liveDemo: "https://car-pooling-kappa.vercel.app",
      github: "https://github.com/chinmayee-guggilam/carpooling-app",
      category: "Full-Stack",
      featured: true,
      image: "/images/image3.jpg"
    },
    {
      id: 4,
      title: "HealthPulse Disease Outbreak Predictor",
      description: "Built a real-time outbreak predictor using health and weather data in a 24-hour hackathon. Forecasted trends using ARIMA/CatBoost with interactive Streamlit UI.",
      technologies: ["Python", "ARIMA", "CatBoost", "Streamlit"],
      github: "https://github.com/chinmayee-guggilam/healthpulse-disease-predictor",
      category: "Machine Learning",
      featured: true,
      image: "/images/image4.png"
    },
    {
      id: 5,
      title: "Temple Management System",
      description: "End-to-end platform for temple event scheduling, donations, and inventory tracking.",
      technologies: ["Angular", "Node.js", "MySQL"],
      github: "https://github.com/chinmayee-guggilam/temple-management-system",
      category: "Full-Stack",
      featured: false,
      image: "/images/image5.png"
    },
    {
      id: 6,
      title: "College Event Management App",
      description: "Android app for student/admin login, real-time updates, category filtering, and notifications.",
      technologies: ["Kotlin", "Firebase", "Android Studio"],
      github: "https://github.com/chinmayee-guggilam/College-Event-Management",
      category: "MobileApp",
      featured: false,
      image: "/images/image6.jpg"
    },
    {
      id: 7,
      title: "Amazon User Segmentation",
      description: "Applied clustering and feature engineering to group users based on behavior for targeted marketing.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/chinmayee-guggilam/amazon-user-segmentation",
      category: "Machine Learning",
      featured: false,
      image: "/images/image7.png"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Andhra Pradesh State Council of Higher Education",
      position: "AI-Driven Data Analytics",
      duration: "May 2025 – Jun 2025",
      description: "Gained practical exposure to SQL and data analysis; worked on datasets to generate meaningful insights and visualizations.",
      type: "internship"
    },
    {
      id: 2,
      company: "Belong X Bytexl Platform",
      position: "Data Science & ML Intern",
      duration: "Apr 2025 – May 2025",
      description: "Worked on flight cancellation prediction using Random Forest, Logistic Regression, and Decision Trees. Delivered actionable insights by cleaning real datasets and optimizing model performance.",
      type: "internship"
    },
    {
      id: 3,
      company: "TechnoHacks EduTech",
      position: "Data Analytics Intern",
      duration: "Apr 2024 – May 2024",
      description: "Gained practical exposure to SQL and data analysis; worked on datasets to generate meaningful insights and visualizations.",
      type: "internship"
    }
  ],

  skills: {
    languages: ["Python", "Java", "C", "JavaScript"],
    frontend: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "MySQL", "Firebase"],
    mlTools: ["Scikit-learn", "Pandas", "NumPy"],
    tools: ["GitHub", "Jupyter", "Power BI", "Figma", "Android Studio"]
  },

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Narasaraopeta Engineering College",
      duration: "2022 – 2026",
      cgpa: "8.88 / 10",
      relevantCourses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Machine Learning"]
    }
  ],

  certifications: [
    {
      name: "Machine Learning using Python",
      issuer: "Infosys Springboard",
      date: "May 2025"
    },
    {
      name: "Python Fundamentals",
      issuer: "Kaggle",
      date: "2024"
    },
    {
      name: "SQL for Beginners",
      issuer: "Frontlines EduTech (FLM)",
      date: "2024"
    },
    {
      name: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "July 2025"
    },
    {
      name: "SQL and PostgreSQL for Beginners",
      issuer: "Udemy",
      date: "July 2025"
    },
    {
      name: "The Joy of Computing using Python",
      issuer: "NPTEL",
      date: "Oct 2023"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon 2023 Finalist",
      description: "Selected as finalist in India's premier national hackathon"
    },
    {
      title: "3rd Place - VVIT Design Venture UI/UX Competition",
      description: "Secured third position in university-level design competition"
    },
    {
      title: "Top 10 - College 24-hour Hackathon",
      description: "Finished in top 10 at Narasaraopeta Engineering College hackathon"
    },
    {
      title: "600+ Coding Problems Solved",
      description: "Active problem solver on Codemind platform by TechnicalHub"
    },
    {
      title: "NCC 'C' Certificate",
      description: "Represented unit at ISRO SHAR"
    }
  ],

  leadership: [
    {
      activity: "Frontend Design Competition Organizer",
      description: "Organized frontend design competition during college fest"
    },
    {
      activity: "Git & GitHub Workshop Conductor",
      description: "Conducted workshop covering version control, branching, collaboration, and open source"
    },
    {
      activity: "Workshop Participant",
      description: "Participated in workshops on AWS, Android Development, and React"
    }
  ]
};