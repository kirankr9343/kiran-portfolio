import kiranPhoto from '../assets/kiran-photo.jpg';
import resumePdf from '../assets/Kiran_KR_Resume.pdf';
import projectAnimalImg from '../assets/project-animal.jpg';
import projectObjectImg from '../assets/project-object.jpg';
import projectCarImg from '../assets/project-car.jpg';

const officialResumePdfPath = `${import.meta.env.BASE_URL}Kiran_KR_Resume.pdf`;

export const portfolioData = {
  personalInfo: {
    name: "Kiran K R",
    title: "Full Stack Developer | AI & Data Science Engineer",
    typingTitles: [
      "Full Stack Web Developer",
      "AI & Data Science Engineer",
      "Python & Machine Learning Developer",
      "React.js & Node.js Developer",
      "MySQL & Database Engineer"
    ],
    email: "kirankr93439343@gmail.com",
    phone: "+91 82175 63366",
    location: "Chikkamagaluru, Karnataka",
    profileImage: kiranPhoto,
    resumeUrl: officialResumePdfPath,
    aboutSummary: "I am a Computer Science & AI/Data Science Engineering student skilled in building responsive full-stack web applications, RESTful APIs, relational database systems, and machine learning models.",
    spokenLanguages: ["English", "Kannada", "Hindi"]
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kiran-kr-a93b69284",
    github: "https://github.com/kirankr9343",
    email: "mailto:kirankr93439343@gmail.com"
  },

  // Exact real stats from resume only
  stats: [
    { id: 1, count: 3, suffix: "", label: "Projects Completed" },
    { id: 2, count: 1, suffix: "", label: "Full Stack Internship" },
    { id: 3, count: 3, suffix: "", label: "Certifications" },
    { id: 4, count: 8.43, suffix: " / 10", label: "B.E. CGPA (NMIT)" }
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
        "Specializing in AI, Data Science, Machine Learning, Computer Vision, and Software Engineering."
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
        "Core Computer Science subjects, Web Development, Relational Databases, and Programming Fundamentals."
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90, icon: "Code2" },
      { name: "Java", level: 80, icon: "FileCode2" },
      { name: "SQL", level: 90, icon: "Database" },
      { name: "JavaScript", level: 88, icon: "Code2" }
    ],
    webDev: [
      { name: "HTML5 & CSS3", level: 92, icon: "Layout" },
      { name: "JavaScript (ES6+)", level: 88, icon: "Code2" },
      { name: "React.js", level: 88, icon: "Code2" },
      { name: "Node.js & Express.js", level: 85, icon: "Server" },
      { name: "REST APIs", level: 90, icon: "Briefcase" }
    ],
    fullStackDb: [
      { name: "MySQL", level: 90, icon: "Database" },
      { name: "MongoDB & MongoDB Atlas", level: 85, icon: "Server" }
    ],
    aiTools: [
      { name: "OpenAI API", level: 85, icon: "Cpu" },
      { name: "Google AI Studio", level: 82, icon: "Cpu" },
      { name: "Prompt Engineering", level: 88, icon: "Sparkles" }
    ],
    toolsPlatforms: [
      { name: "Git & GitHub", level: 90, icon: "Github" },
      { name: "VS Code", level: 92, icon: "Laptop" },
      { name: "Jupyter Notebook & Google Colab", level: 88, icon: "BookOpen" },
      { name: "Postman & Vercel", level: 85, icon: "Globe" }
    ]
  },

  // Exact 3 projects from resume
  projects: [
    {
      id: 1,
      title: "Object Detection System",
      subtitle: "Sep 2025",
      technologiesSummary: "Python | YOLOv8 | OpenCV | TensorFlow | Flask",
      description: "Real-time computer vision system to identify and classify multiple objects from images and live video streams.",
      bullets: [
        "Developed a real-time object detection system using YOLOv8 and OpenCV to identify and classify multiple objects from images and live video streams, optimizing inference for high-speed detection and object tracking.",
        "Built a Flask-based web interface for live monitoring, detection visualization, and automated result management, providing an intuitive dashboard for real-time predictions.",
        "Tested the system on diverse datasets and real-world scenarios, improving detection reliability and achieving 90%+ accuracy while ensuring scalability for smart surveillance applications.",
        "Optimized image preprocessing and inference pipelines, reducing detection latency by approximately 30% while maintaining high detection accuracy across different lighting and environmental conditions."
      ],
      technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Flask"],
      image: projectObjectImg,
      github: "https://github.com/kirankr9343",
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 2,
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
      demo: "https://github.com/kirankr9343",
      featured: true
    },
    {
      id: 3,
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
      demo: "https://github.com/kirankr9343",
      featured: false
    }
  ],

  // Exact 1 internship from resume
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

  // Exact 3 certifications from resume
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
      title: "Full Stack Developer at Rank Book Academy",
      issuer: "Rank Book Academy",
      date: "Jan – Apr 2024",
      icon: "Code",
      verifyUrl: "#"
    },
    {
      id: 3,
      title: "Deep Learning for Developers",
      issuer: "Infosys's Platform",
      date: "Mar 2026",
      icon: "Cpu",
      verifyUrl: "#"
    }
  ]
};
