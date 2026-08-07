import kiranPhoto from '../assets/kiran-photo.jpg';
import resumePdf from '../assets/Kiran_KR_Resume.pdf';
import projectSalesImg from '../assets/project-sales.jpg';
import projectAnimalImg from '../assets/project-animal.jpg';
import projectObjectImg from '../assets/project-object.jpg';
import projectCarImg from '../assets/project-car.jpg';

const officialResumePdfPath = `${import.meta.env.BASE_URL}Kiran_KR_Resume.pdf`;

export const portfolioData = {
  personalInfo: {
    name: "Kiran K R",
    title: "Full Stack Developer | Data Analyst & AI Engineer",
    typingTitles: [
      "Full Stack Web Developer (React & Node.js)",
      "Data Analyst & Power BI Specialist",
      "RESTful API & Database Modeler",
      "Python & Machine Learning Engineer",
      "MERN & SQL Database Developer",
      "Prompt Engineering & AI Tools Specialist"
    ],
    email: "kirankr93439343@gmail.com",
    phone: "+91 82175 63366",
    location: "Chikkamagaluru & Bengaluru, Karnataka",
    profileImage: kiranPhoto,
    resumeUrl: officialResumePdfPath,
    aboutSummary: "I am a versatile Full Stack Developer and Data Analyst specializing in building scalable web applications, RESTful APIs, and interactive data analytics dashboards. With a strong foundation in Artificial Intelligence & Data Science (CGPA: 8.43), I blend full-stack frontend/backend engineering (React, Node, Express, MongoDB, MySQL) with data analytics (Python, SQL, Power BI, OpenCV, YOLOv8) to deliver high-performance digital solutions.",
    highlights: [
      { title: "Full Stack Web Engineering", desc: "Building responsive React.js frontends & RESTful Node/Express backends, improving load speed by 30%." },
      { title: "Data Analytics & Power BI", desc: "Designing interactive Power BI sales dashboards, data transformations, and business KPI tracking." },
      { title: "Relational & NoSQL Databases", desc: "Architecting MySQL, MongoDB, and MongoDB Atlas databases for fast CRUD operations and reporting." },
      { title: "AI & Computer Vision", desc: "Developing real-time YOLOv8, OpenCV, and TensorFlow object and intrusion detection systems." }
    ],
    spokenLanguages: ["English", "Kannada", "Hindi"]
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kiran-kr-a93b69284",
    github: "https://github.com/kirankr9343",
    email: "mailto:kirankr93439343@gmail.com",
    leetcode: "https://leetcode.com/kirankr9343",
    hackerrank: "https://hackerrank.com/kirankr9343"
  },

  stats: [
    { id: 1, count: 15, suffix: "+", label: "Full Stack & Data Projects" },
    { id: 2, count: 30, suffix: "%", label: "Performance Optimization" },
    { id: 3, count: 8.43, suffix: " CGPA", label: "B.E. Academic Score" },
    { id: 4, count: 250, suffix: "+", label: "Coding & SQL Solved" }
  ],

  education: [
    {
      id: 1,
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: "Nitte Meenakshi Institute of Technology (NMIT)",
      location: "Bengaluru, KA",
      period: "Sept 2024 – Aug 2027",
      grade: "CGPA: 8.43 / 10.0",
      highlights: [
        "Focus on AI, Data Science, Full Stack Engineering, Computer Vision, and Database Architecture."
      ]
    },
    {
      id: 2,
      degree: "DIP in Computer Science & Engineering",
      institution: "Adichunchanagiri Institute of Technology",
      location: "Chikkamagaluru, KA",
      period: "June 2021 – March 2024",
      grade: "Percentile: 78.8%",
      highlights: [
        "Core Computer Science fundamentals, Web Development, Data Structures, and Relational Databases."
      ]
    }
  ],

  skills: {
    webDev: [
      { name: "React.js", level: 92, icon: "Code2" },
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express.js", level: 88, icon: "Server" },
      { name: "REST APIs", level: 94, icon: "Briefcase" },
      { name: "JavaScript (ES6+)", level: 92, icon: "Code2" },
      { name: "HTML5 & CSS3", level: 95, icon: "Layout" }
    ],
    analytics: [
      { name: "Power BI", level: 95, icon: "BarChart3" },
      { name: "SQL (MySQL)", level: 94, icon: "Database" },
      { name: "Microsoft Excel", level: 92, icon: "Table" },
      { name: "Data Cleaning", level: 95, icon: "Filter" },
      { name: "Data Visualization", level: 94, icon: "PieChart" }
    ],
    databases: [
      { name: "MySQL", level: 94, icon: "Database" },
      { name: "MongoDB", level: 88, icon: "Server" },
      { name: "MongoDB Atlas", level: 86, icon: "Server" }
    ],
    aiTools: [
      { name: "OpenAI API", level: 90, icon: "Cpu" },
      { name: "Google AI Studio", level: 88, icon: "Cpu" },
      { name: "Prompt Engineering", level: 92, icon: "Sparkles" },
      { name: "Git & GitHub", level: 92, icon: "Github" },
      { name: "VS Code & Postman", level: 94, icon: "Laptop" },
      { name: "Vercel", level: 90, icon: "Globe" }
    ],
    languages: [
      { name: "Python", level: 94, icon: "Code2" },
      { name: "Java", level: 80, icon: "FileCode2" },
      { name: "SQL", level: 94, icon: "Database" },
      { name: "JavaScript", level: 92, icon: "Code2" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Object Detection System",
      subtitle: "Sep 2025",
      technologiesSummary: "Python | YOLOv8 | OpenCV | TensorFlow | Flask",
      description: "Real-time computer vision system to identify and classify multiple objects from images and live video streams with 90%+ accuracy.",
      bullets: [
        "Developed a real-time object detection system using YOLOv8 and OpenCV for high-speed detection and tracking.",
        "Built a Flask-based web interface for live monitoring, detection visualization, and automated result management.",
        "Tested the system on diverse datasets, improving detection reliability and achieving 90%+ accuracy.",
        "Optimized image preprocessing and inference pipelines, reducing detection latency by 30%."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Flask"],
      image: projectObjectImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 2,
      title: "Blinkit Sales Dashboard using Power BI",
      subtitle: "Feb 2026",
      technologiesSummary: "Power BI | Excel | SQL | DAX",
      description: "Interactive e-commerce grocery analytics dashboard built to analyze Blinkit sales performance, total revenue, average ratings, item visibility, and regional outlet performance.",
      bullets: [
        "Cleaned and transformed Blinkit e-commerce sales dataset using Excel and SQL.",
        "Built interactive Power BI dashboards to visualize total revenue ($864K), average sales, item type breakdown, and regional outlet performance.",
        "Utilized DAX measures, charts, slicers, and KPIs to identify sales trends and key performance metrics.",
        "Created executive reports to support data-driven business decisions for quick-commerce operations."
      ],
      technologies: ["Power BI", "Excel", "SQL", "DAX", "Data Visualization"],
      image: projectSalesImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 3,
      title: "Car Booking Website",
      subtitle: "Apr 2024",
      technologiesSummary: "HTML | CSS | JavaScript | Python | MySQL",
      description: "Full-stack car booking management web platform with secure authentication, search filtering, and reservation tracking.",
      bullets: [
        "Developed a full-stack car booking platform enabling users to browse vehicles, book rentals, and manage reservations.",
        "Integrated a MySQL database for customer information, booking history, vehicle availability, and secure authentication.",
        "Implemented responsive UI design, input validation, and booking confirmation workflows for desktop and mobile.",
        "Implemented search, filtering, and booking status management features for efficient vehicle availability tracking."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
      image: projectCarImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: false
    },
    {
      id: 4,
      title: "Animal Intrusion Detection System",
      subtitle: "Feb 2026",
      technologiesSummary: "Python | YOLOv8 | OpenCV | Flask | MySQL",
      description: "Real-time wildlife monitoring and automated intrusion logging system for forest and agricultural areas.",
      bullets: [
        "Developed a real-time animal intrusion detection system using YOLOv8 and OpenCV to detect and track wild animals.",
        "Built a Flask-based monitoring dashboard integrated with MySQL to store detection logs, timestamps, and history.",
        "Implemented live video streaming, automated alerts, and object tracking to reduce manual monitoring efforts."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "MySQL"],
      image: projectAnimalImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Rank Book Academy",
      location: "Bengaluru, KA",
      period: "Jan 2024 – Apr 2024",
      responsibilities: [
        "Built and deployed responsive web applications using HTML, CSS, JavaScript, Python, and MySQL, improving page load performance by 30% through code optimization.",
        "Designed and integrated RESTful APIs with backend services, reducing API response time by 25% and ensuring seamless frontend-backend communication.",
        "Collaborated with a team using Git and GitHub for version control, successfully delivering 5+ feature enhancements while maintaining clean, reusable code."
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Science of Happiness and Wellbeing",
      issuer: "IIT Madras (NPTEL)",
      date: "Apr 2026",
      icon: "Smile",
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      issuer: "Rank Book Academy",
      date: "Jan – Apr 2024",
      icon: "Code",
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Deep Learning for Developers",
      issuer: "Infosys Platform",
      date: "Mar 2026",
      icon: "Cpu",
      verifyUrl: "#"
    }
  ]
};
