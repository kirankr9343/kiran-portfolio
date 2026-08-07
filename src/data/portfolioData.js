import kiranPhoto from '../assets/kiran-photo.jpg';
import projectSalesImg from '../assets/project-sales.jpg';
import projectAnimalImg from '../assets/project-animal.jpg';
import projectCarImg from '../assets/project-car.jpg';

// Absolute/Relative public path for the official 1-page resume PDF
const officialResumePdfPath = `${import.meta.env.BASE_URL}Kiran_KR_Resume.pdf`;

export const portfolioData = {
  personalInfo: {
    name: "Kiran K R",
    title: "Data Analyst & Business Intelligence Specialist",
    typingTitles: [
      "Blinkit Power BI Dashboard Developer",
      "SQL & Database Analyst",
      "Excel Analytics Specialist",
      "Business Intelligence Professional",
      "Data Visualization Expert",
      "Python Data Analyst"
    ],
    email: "kirankr93439343@gmail.com",
    phone: "+91 82175 63366",
    location: "Chikkamagaluru & Bengaluru, Karnataka",
    profileImage: kiranPhoto,
    resumeUrl: officialResumePdfPath,
    aboutSummary: "I am a Data Analyst and AI & Data Science Engineering student with strong hands-on experience in business analytics, data visualization, and database management. I specialize in turning complex raw data into clear, actionable business dashboards using Power BI, SQL, Excel, and Python.",
    highlights: [
      { title: "Blinkit & Power BI Dashboards", desc: "Building interactive dashboards with KPI cards, slicers, revenue analysis, and regional outlet performance trends." },
      { title: "Data Cleaning & Transformation", desc: "Cleaning, transforming, and structuring raw datasets using Excel and SQL for accurate decision-making." },
      { title: "Database Management & SQL", desc: "Designing MySQL databases, writing SQL queries for trend reporting, and managing relational data." },
      { title: "Python & Data Analysis", desc: "Data processing, analytical reporting, basic statistics, and computer vision integration." }
    ],
    spokenLanguages: ["English", "Kannada", "Hindi"],
    hobbies: ["Fitness", "Listening to Music", "Data Analysis"]
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kiran-kr-a93b69284",
    github: "https://github.com/kirankr9343",
    email: "mailto:kirankr93439343@gmail.com",
    leetcode: "https://leetcode.com/kirankr9343",
    hackerrank: "https://hackerrank.com/kirankr9343"
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
    { id: 1, count: 15, suffix: "+", label: "Analytics Projects" },
    { id: 2, count: 5, suffix: "+", label: "Professional Certifications" },
    { id: 3, count: 8.48, suffix: " CGPA", label: "B.E. Academic Score" },
    { id: 4, count: 250, suffix: "+", label: "Coding & SQL Solved" }
  ],

  education: [
    {
      id: 1,
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: "Nitte Meenakshi Institute of Technology",
      location: "Bengaluru, Karnataka",
      period: "Aug 2024 – 2027",
      grade: "CGPA: 8.48",
      highlights: [
        "Relevant Coursework: Data Analysis, Statistics, Database Management, Data Structures.",
        "Hands-on project work in Power BI Dashboards, SQL Data Pipelines, and Computer Vision."
      ]
    },
    {
      id: 2,
      degree: "Diploma in Computer Science & Engineering",
      institution: "Adichunchanagiri Institute of Technology",
      location: "Chikkamagaluru, Karnataka",
      period: "Sep 2021 – Mar 2024",
      grade: "CGPA / Percentage: 86.54%",
      highlights: [
        "Core focus on Computer Science fundamentals, DBMS, C/Java, and Web Development.",
        "Graduated with Distinction in Diploma Examinations."
      ]
    }
  ],

  skills: {
    analytics: [
      { name: "Power BI", level: 95, icon: "BarChart3" },
      { name: "Microsoft Excel", level: 94, icon: "Table" },
      { name: "Data Cleaning", level: 96, icon: "Filter" },
      { name: "Data Visualization", level: 95, icon: "PieChart" },
      { name: "Data Analysis", level: 95, icon: "Briefcase" },
      { name: "Basic Statistics", level: 88, icon: "TrendingUp" }
    ],
    languages: [
      { name: "Python", level: 92, icon: "Code2" },
      { name: "SQL", level: 94, icon: "Database" },
      { name: "Java", level: 78, icon: "FileCode2" }
    ],
    database: [
      { name: "MySQL", level: 94, icon: "Server" },
      { name: "Database Management", level: 92, icon: "Database" },
      { name: "SQL Queries & Reports", level: 95, icon: "Filter" }
    ],
    tools: [
      { name: "Git", level: 88, icon: "GitBranch" },
      { name: "GitHub", level: 90, icon: "Github" },
      { name: "Linux", level: 82, icon: "Terminal" },
      { name: "VS Code", level: 92, icon: "Laptop" }
    ],
    coreSkills: [
      "Data Cleaning",
      "Data Visualization",
      "Data Analysis",
      "Database Management",
      "Basic Statistics",
      "Problem Solving"
    ]
  },

  projects: [
    {
      id: 1,
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
      technologies: ["Power BI", "Excel", "SQL", "DAX", "Blinkit Analytics", "Data Visualization"],
      image: projectSalesImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 2,
      title: "Animal Intrusion Detection System",
      subtitle: "Sep 2024",
      technologiesSummary: "Python | YOLOv8 | OpenCV | TensorFlow | Flask",
      description: "Real-time automated wildlife detection and intrusion logging platform for data-driven monitoring.",
      bullets: [
        "Developed a real-time animal intrusion detection system using YOLOv8 and OpenCV to detect and classify wild animals.",
        "Stored detection records, timestamps, and images in a MySQL database for analysis and reporting.",
        "Designed a dashboard to monitor intrusion history and generate insights from detection data.",
        "Improved monitoring efficiency by enabling real-time alerts and data-driven decision-making."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Flask", "MySQL"],
      image: projectAnimalImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 3,
      title: "Car Booking Website",
      subtitle: "Apr 2025",
      technologiesSummary: "HTML | CSS | JavaScript | Python | MySQL",
      description: "Full-stack car booking management web portal with SQL reporting and reservation analytics.",
      bullets: [
        "Developed a full-stack car booking management system with secure user authentication.",
        "Designed and managed a MySQL database for customer, vehicle, and booking information.",
        "Generated booking reports and analyzed reservation trends using SQL queries.",
        "Improved data accuracy through input validation and efficient database management."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "SQL Queries"],
      image: projectCarImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full Stack & Database Developer",
      company: "Rank Book Academy / Web Projects",
      location: "Bengaluru, India",
      period: "Internship & Project Experience",
      responsibilities: [
        "Developed responsive web applications using HTML, CSS, JavaScript, Python, and MySQL.",
        "Managed databases, validated application data, and generated reports using SQL queries.",
        "Collaborated on testing, debugging, and input validation to improve data accuracy."
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
      title: "Full Stack Development",
      issuer: "Rank Book Academy",
      date: "Jan – Apr 2024",
      icon: "Code",
      verifyUrl: "#"
    },
    {
      id: 5,
      title: "Science of Happiness and Wellbeing",
      issuer: "IIT Madras (NPTEL)",
      date: "Apr 2026",
      icon: "Smile",
      verifyUrl: "#"
    }
  ]
};
