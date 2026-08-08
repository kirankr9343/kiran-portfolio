import kiranPhoto from '../assets/kiran-photo.jpg';
import resumePdf from '../assets/Kiran_KR_Resume.pdf';
import buildathonCertImg from '../assets/buildathon-cert.jpg';
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
      "RESTful API & Database Engineer",
      "Python & Machine Learning Developer",
      "MERN & SQL Database Specialist",
      "Prompt Engineering & AI Tools Developer"
    ],
    email: "kirankr93439343@gmail.com",
    phone: "+91 82175 63366",
    location: "Chikkamagaluru & Bengaluru, Karnataka",
    profileImage: kiranPhoto,
    resumeUrl: officialResumePdfPath,
    aboutSummary: "I am a versatile Full Stack Developer and Data Analyst specializing in building scalable web applications, RESTful APIs, relational database systems, and interactive data analytics dashboards. With a strong foundation in Artificial Intelligence & Data Science (CGPA: 8.43), I combine full-stack web engineering (React, Node, Express, MongoDB, MySQL) with data analytics and machine learning (Python, SQL, Power BI, OpenCV, YOLOv8).",
    highlights: [
      { title: "Full Stack Web Development", desc: "Building responsive React.js frontends & RESTful Node/Express backends, improving page load performance by 30%." },
      { title: "Data Analytics & Power BI", desc: "Designing interactive Power BI sales dashboards, data transformations, and business KPI reporting." },
      { title: "Database Management & SQL", desc: "Architecting MySQL, MongoDB, and MongoDB Atlas databases for fast CRUD operations, indexing, and analytics." },
      { title: "AI & Computer Vision", desc: "Developing real-time YOLOv8, OpenCV, and TensorFlow object and intrusion detection systems with 90%+ accuracy." }
    ],
    spokenLanguages: ["English", "Kannada", "Hindi"],
    hobbies: ["Fitness", "Listening to Music", "Data Analysis"]
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kiran-kr-a93b69284",
    github: "https://github.com/kirankr9343",
    email: "mailto:kirankr93439343@gmail.com"
  },

  coursework: [
    "Data Analysis",
    "Database Management",
    "Statistics",
    "Data Structures",
    "Algorithm Analysis",
    "Operating Systems",
    "Computer Networks",
    "Computer Architecture"
  ],

  stats: [
    { id: 1, count: 10, suffix: "+", label: "Projects Completed" },
    { id: 2, count: 1, suffix: "", label: "Full Stack Internship" },
    { id: 3, count: 6, suffix: "", label: "Professional Certifications" },
    { id: 4, count: 8.43, suffix: " / 10", label: "B.E. CGPA (NMIT)" }
  ],

  achievementsList: [
    {
      id: 1,
      title: "State-Level Buildathon – Karnataka",
      organization: "OpenAI Academy × NxtWave",
      event: "OpenAI Academy × NxtWave Regional Buildathon – Karnataka",
      location: "S-VYASA Deemed-to-be University, Bengaluru",
      date: "7-Dec-2025",
      recognition: "State-Level Selection",
      achievement: "Selected for the State-Level Buildathon – Karnataka after successfully clearing the virtual qualification round of the Pan-India GenAI Buildathon.",
      description: "Collaborated with a team to brainstorm, develop, and present a Generative AI solution at the offline state-level event in Bengaluru. Provided hands-on experience in Generative AI, rapid prototyping, problem-solving, teamwork, innovation, and building AI-driven solutions under real-world time constraints.",
      tags: ["Generative AI", "AI", "Rapid Prototyping", "Problem Solving", "Teamwork", "Innovation"],
      teamMembers: ["Kiran K R", "Prajwal N", "Mokshith B A", "Yashwanth M A"],
      certificateImage: buildathonCertImg
    }
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
        "Specializing in AI, Data Science, Machine Learning, Computer Vision, Full Stack Web Engineering, and Databases."
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
        "Core Computer Science subjects, Web Development, Relational Databases, and Software Engineering."
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 92, icon: "Code2" },
      { name: "Java", level: 80, icon: "FileCode2" },
      { name: "SQL", level: 92, icon: "Database" },
      { name: "JavaScript", level: 90, icon: "Code2" }
    ],
    webDev: [
      { name: "HTML5 & CSS3", level: 92, icon: "Layout" },
      { name: "JavaScript (ES6+)", level: 90, icon: "Code2" },
      { name: "React.js", level: 90, icon: "Code2" },
      { name: "Node.js & Express.js", level: 88, icon: "Server" },
      { name: "REST APIs", level: 92, icon: "Briefcase" }
    ],
    analytics: [
      { name: "Power BI", level: 95, icon: "BarChart3" },
      { name: "Microsoft Excel", level: 92, icon: "Table" },
      { name: "Data Cleaning", level: 95, icon: "Filter" },
      { name: "Data Visualization", level: 94, icon: "PieChart" },
      { name: "Data Analysis & Statistics", level: 90, icon: "TrendingUp" }
    ],
    fullStackDb: [
      { name: "MySQL", level: 92, icon: "Database" },
      { name: "MongoDB", level: 86, icon: "Server" },
      { name: "MongoDB Atlas", level: 85, icon: "Server" }
    ],
    aiTools: [
      { name: "OpenAI API", level: 88, icon: "Cpu" },
      { name: "Google AI Studio", level: 85, icon: "Cpu" },
      { name: "Prompt Engineering", level: 90, icon: "Sparkles" }
    ],
    toolsPlatforms: [
      { name: "Git & GitHub", level: 90, icon: "Github" },
      { name: "VS Code", level: 92, icon: "Laptop" },
      { name: "Jupyter Notebook & Colab", level: 88, icon: "BookOpen" },
      { name: "Postman & Vercel", level: 86, icon: "Globe" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Blinkit Sales Dashboard using Power BI",
      subtitle: "Feb 2026",
      technologiesSummary: "Power BI | Excel | SQL | DAX",
      description: "Interactive e-commerce grocery analytics dashboard built to analyze sales performance, revenue metrics, monthly trends, and regional outlet performance.",
      bullets: [
        "Cleaned and transformed sales data using Excel and SQL.",
        "Built interactive dashboards to visualize revenue, profit, monthly sales, and regional performance.",
        "Used charts, slicers, and KPIs to help identify business trends.",
        "Created reports to support data-driven business decisions."
      ],
      technologies: ["Power BI", "Excel", "SQL", "DAX", "Data Visualization"],
      image: projectSalesImg,
      github: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 2,
      title: "Object Detection System",
      subtitle: "Sep 2025",
      technologiesSummary: "Python | YOLOv8 | OpenCV | TensorFlow | Flask",
      description: "Real-time computer vision system to identify and classify multiple objects from images and live video streams with 90%+ accuracy.",
      bullets: [
        "Developed a real-time object detection system using YOLOv8 and OpenCV to identify and classify multiple objects from images and live video streams, optimizing inference for high-speed detection and object tracking.",
        "Built a Flask-based web interface for live monitoring, detection visualization, and automated result management, providing an intuitive dashboard for real-time predictions.",
        "Tested the system on diverse datasets and real-world scenarios, improving detection reliability and achieving 90%+ accuracy while ensuring scalability for smart surveillance applications.",
        "Optimized image preprocessing and inference pipelines, reducing detection latency by approximately 30% while maintaining high detection accuracy across different lighting and environmental conditions."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Flask"],
      image: projectObjectImg,
      github: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 3,
      title: "Car Booking Website",
      subtitle: "Apr 2024",
      technologiesSummary: "HTML | CSS | JavaScript | Python | MySQL",
      description: "Full-stack car booking platform enabling users to browse vehicles, book rentals, and manage reservations.",
      bullets: [
        "Developed a full-stack car booking platform enabling users to browse available vehicles, book rentals, and manage reservations through a responsive web interface.",
        "Integrated a MySQL database to manage customer information, booking history, vehicle availability, and secure user authentication with CRUD operations.",
        "Implemented responsive UI design, input validation, and booking confirmation workflows, improving usability and ensuring a seamless experience across desktop and mobile devices.",
        "Implemented search, filtering, and booking status management features, improving user experience and enabling efficient vehicle availability tracking and reservation management."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
      image: projectCarImg,
      github: "https://github.com/kirankr9343",
      featured: false
    },
    {
      id: 4,
      title: "Animal Intrusion Detection System",
      subtitle: "Feb 2026",
      technologiesSummary: "Python | YOLOv8 | OpenCV | Flask | MySQL",
      description: "Real-time automated wildlife detection and intrusion monitoring system for restricted agricultural and forest areas.",
      bullets: [
        "Developed a real-time animal intrusion detection system using YOLOv8 and OpenCV to detect and track wild animals in restricted agricultural and forest areas.",
        "Built a Flask-based monitoring dashboard integrated with MySQL to store detection logs, captured images, timestamps, and intrusion history for analysis and reporting.",
        "Implemented live video streaming, automated alerts, and object tracking, enabling continuous surveillance and reducing manual monitoring efforts while improving response time to intrusion events."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "Flask", "MySQL"],
      image: projectAnimalImg,
      github: "https://github.com/kirankr9343",
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
        "Collaborated with a team using Git and GitHub for version control, successfully delivering 5+ feature enhancements while maintaining clean and reusable code."
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Analysis of Power BI",
      issuer: "Microsoft",
      date: "Jan 2026",
      icon: "BarChart2",
      verifyUrl: "#"
    },
    {
      id: 2,
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "Apr 2025",
      icon: "Database",
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Jan 2025",
      icon: "BarChart2",
      verifyUrl: "#"
    },
    {
      id: 4,
      title: "Full Stack Developer at Rank Book Academy",
      issuer: "Rank Book Academy",
      date: "Jan – Apr 2024",
      icon: "Code",
      verifyUrl: "#"
    },
    {
      id: 5,
      title: "Deep Learning for Developers",
      issuer: "Infosys's Platform",
      date: "Mar 2026",
      icon: "Cpu",
      verifyUrl: "#"
    },
    {
      id: 6,
      title: "Science of Happiness and Wellbeing",
      issuer: "IIT Madras (NPTEL)",
      date: "Apr 2026",
      icon: "Smile",
      verifyUrl: "#"
    }
  ]
};
