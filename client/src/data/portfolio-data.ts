export const projects = [
  {
    title: "Software Engineer Portfolio",
    description: "Ultra-luxurious personal portfolio built with React, TypeScript, and Framer Motion, featuring particle animations and a strict gold-black-white color scheme.",
    image: "/images/sorasak-_UIN-pFfJ7c-unsplash-1568x1046.jpg",
    category: "Frontend",
    technologies: [
      { name: "React", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "TypeScript", bgColor: "bg-purple-100", textColor: "text-purple-800" },
      { name: "Framer Motion", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Particles.js", bgColor: "bg-green-100", textColor: "text-green-800" }
    ],
    caseStudyUrl: "https://github.com/Ibek7/TravelCompanion",
    githubUrl: "https://github.com/Ibek7/TravelCompanion",
    liveUrl: "https://github.com/Ibek7/TravelCompanion"
  },
  {
    title: "Human Trafficking Analysis Tool",
    description: "Research project using machine learning and NLP techniques to identify patterns in human trafficking cases in East Africa, with 82% model accuracy.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    category: "AI Research",
    technologies: [
      { name: "Python", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "ML", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      { name: "NLP", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "Data Analysis", bgColor: "bg-pink-100", textColor: "text-pink-800" }
    ],
    caseStudyUrl: "https://github.com/Ibek7",
    githubUrl: "https://github.com/Ibek7",
    liveUrl: "https://github.com/Ibek7"
  },
  {
    title: "Vivavibe",
    description: "Built a Python Instagram Auto‑Poster with ChatGPT captions, DALL‑E 3 images, and Instagram Graph API publishing, storing 200+ posts in Firebase for a 21% efficiency boost",
    image: "/images/vecteezy_silhouette-standing-victorious-on-top-of-peak_32946211.jpg",
    category: "Social Media Automation",
    technologies: [
      { name: "JavaScript", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "HTML/CSS", bgColor: "bg-orange-100", textColor: "text-orange-800" },
      { name: "LocalStorage API", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "Responsive Design", bgColor: "bg-purple-100", textColor: "text-purple-800" }
    ],
    caseStudyUrl: "https://github.com/Ibek7/VivaVibe",
    githubUrl: "https://github.com/Ibek7/VivaVibe",
    liveUrl: "https://github.com/Ibek7/VivaVibe"
  }
];

// Skills section data
export const frontendSkills = [
  { name: "HTML / CSS / JavaScript", percentage: 90 },
  { name: "React / TypeScript", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 },
  { name: "Responsive Design", percentage: 88 }
];

export const backendSkills = [
  { name: "Python / Machine Learning", percentage: 85 },
  { name: "Java / C++", percentage: 90 },
  { name: "Data Structures & Algorithms", percentage: 92 },
  { name: "Object-Oriented Programming", percentage: 88 }
];

export const dataVisualizationSkills = [
  { name: "Statistical Analysis", percentage: 85 },
  { name: "Data Analysis with Python", percentage: 80 }
];

export const devopsSkills = [
  { name: "Git / GitHub", percentage: 85 },
  { name: "Agile Methodologies", percentage: 75 }
];

// Experience section data
export const workExperience = [
  {
    title: "AI/Machine Learning Intern (Incoming)",
    company: "Mayo Clinic — Rochester, MN",
    period: "Jul 2025 - Aug 2025",
    description: "Anticipated contributions include engineering features from orthopedic imaging and EHR data; developing ML models to predict surgical outcomes; validating models and delivering integrated pipeline reports.",
    technologies: [
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "TensorFlow + Keras" },
      { name: "Keras" },
      
    ]
  },
  {
    title: "Full-Stack Software Engineer Intern",
    company: "Fullsteam",
    period: "May 2024 - Aug 2024",
    description: "Collaborated with an Agile team to integrate advanced AI solutions, streamline software performance, and simplify complex document processes, significantly enhancing efficiency and reliability.",
    technologies: [
      { name: "Azure" },
      { name: "OpenAI REST API" },
      { name: "Azure Document Intelligence" },
      { name: "Agile" }
    ]
  },
  {
    title: "AI Researcher",
    company: "University of Chicago",
    period: "Dec 2023 - Jan 2024",
    description: "Built an AI+NLP model to detect human trafficking patterns with 82% accuracy; scraped 300+ articles using TF-IDF and PCA and applied hierarchical clustering to uncover 18% more hotspots.",
    technologies: [
      { name: "AI" },
      { name: "NLP" },
      { name: "TF-IDF" },
      { name: "PCA" },
      { name: "Hierarchical Clustering" }
    ]
  },
  {
    title: "Head Researcher",
    company: "Addis Ababa University Research Program",
    period: "Aug 2021 - Sep 2021",
    description: "Designed and validated real-time sun-tracking solar panels using Fortran and LabView, improving energy efficiency by 19.3% and research efficiency by 6%.",
    technologies: [
      { name: "Fortran" },
      { name: "LabView" },
      { name: "Firmware Validation" },
      { name: "Solar Tracking" }
    ]
  }
];

// Blog section data
export const blogPosts = [
  {
    title: "My Journey Learning Web Development",
    excerpt: "Sharing my experience learning React and TypeScript to build this portfolio site, including challenges I faced and resources (Youssef Hefnawy's journey) that helped me succeed.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
    date: "April 1, 2024",
    readTime: "15 min read",
    url: "https://dev.to/hefnawy/30-day-react-learning-journey-part-1-14od?utm_source=chatgpt.com"
  },
  {
    title: "AI for Social Good: My Research Experience",
    excerpt: "A look at my independent research using machine learning to analyze human trafficking patterns in East Africa—rooted in the insights from Tomašev et al.’s Nature Communications paper (18 May 2020).",
    image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    date: "February 10, 2024",
    readTime: "20 min read",
    url: "https://www.nature.com/articles/s41467-020-15871-z?utm_source=chatgpt.com"
  },
  {
    title: "Balancing Computer Science and Mathematics",
    excerpt: "Exploring my double-major journey in CS and Math—strategies for academic excellence shaped by Lincoln Sedlacek’s Edutopia article “Math Education: The Roots of Computer Science.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    date: "March 15, 2024",
    readTime: "16 min read",
    url: "https://www.edutopia.org/blog/math-education-roots-computer-science-lincoln-sedlacek?utm_source=chatgpt.com"
  }
];
