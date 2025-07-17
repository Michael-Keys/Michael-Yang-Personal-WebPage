export const projectsContent = {
  section: {
    title: "Featured Projects",
    subtitle: "Here are some of my recent projects that showcase my skills and passion for development."
  },
  projects: [
    {
      id: 1,
      title: "Mini Coursera: A Full-Stack Online Learning Platform",
      description: "A comprehensive online learning platform built with Java Spring Boot microservices and React frontend. Features include course searching with ElasticSearch, Redis caching for 30% performance improvement, distributed file system for video uploads with resuming capability, and containerized deployment with Docker.",
      image: "/images/min-coursea.jpeg",
      tags: ["Java", "JavaScript", "React", "Spring Boot", "Spring Cloud", "ElasticSearch", "Redis", "Docker", "Spring Security"],
      github: "https://github.com/Michael-Keys",
      demo: "https://github.com/Michael-Keys",
      duration: "June 2024 - July 2024",
      teamSize: "Solo project",
      role: "Full-stack Developer",
      features: [
        "RESTful APIs via Java Spring Boot and Spring Cloud with microservice architecture",
        "Course searching function by ElasticSearch with high concurrency caching via Redis",
        "30% improvement in transaction per second tested by JMeter and Postman",
        "Distributed file system for video uploads with transmission resuming at break-points",
        "Gateway implementation for request filtering, forwarding, load balancing, and user authentication",
        "Spring Security integration with JWT token authentication",
        "Containerized deployment using Docker for scalability and portability"
      ],
      challenges: "The main challenges included implementing a scalable microservices architecture, optimizing database queries for high concurrency, setting up distributed file storage for large video files, and ensuring seamless user experience with resume functionality for interrupted uploads. These were solved through careful system design, Redis caching implementation, and robust error handling mechanisms."
    },
    {
      id: 2,
      title: "Collaborative Project with NETGEAR Company",
      description: "A comprehensive sales forecasting project analyzing NETGEAR product data across different regions using advanced time series models and machine learning techniques including ARIMA, Holt-Winters, Box-Jenkins, and CNN-LSTM models with continuous optimization for improved forecasting accuracy.",
      image: "/images/netgear.jpeg",
      tags: ["Python", "ARIMA", "Holt-Winters", "Box-Jenkins", "CNN-LSTM", "Time Series", "Data Analysis", "Machine Learning", "Forecasting"],
      github: "https://github.com/Michael-Keys",
      demo: "https://github.com/Michael-Keys",
      duration: "December 2024 - May 2025",
      teamSize: "5 Members",
      role: "Data Scientist & ML Engineer",
      features: [
        "Analyzed NETGEAR product sales data from the past three years across different regions",
        "Performed comprehensive data cleaning and preprocessing to construct robust datasets",
        "Developed multiple time series models: ARIMA, Holt-Winters, and Box-Jenkins",
        "Implemented CNN-LSTM machine learning model for enhanced prediction accuracy",
        "Sales forecasting across various geographical regions",
        "Model performance evaluation using M3 Bias and WMAPE metrics",
        "Continuous model optimization for improved forecasting accuracy"
      ],
      challenges: "The main challenges included handling complex multi-regional sales data with varying seasonal patterns, selecting optimal time series models for different product categories, implementing hybrid CNN-LSTM architecture for improved accuracy, and ensuring model performance consistency across different regions. These were addressed through comprehensive data preprocessing, extensive model comparison, and iterative optimization using advanced evaluation metrics."
    },
    {
      id: 3,
      title: "AI-Powered Resume Analyzer & Job Matching Platform",
      description: "An intelligent web application that analyzes uploaded resumes and job descriptions using LLMs to provide personalized resume optimization recommendations with interactive heat maps showing skill gaps and improvement areas.",
      image: "/images/resume-project.jpeg",
      tags: ["Python", "React", "NLP", "Machine Learning", "OpenAI API", "Flask", "Data Visualization", "Resume Parsing", "Text Analysis"],
      github: "https://github.com/Michael-Keys",
      demo: "https://github.com/Michael-Keys",
      duration: "July 2025 - Present",
      teamSize: "Solo project",
      role: "Full-stack Developer & ML Engineer",
      features: [
        "Resume upload and parsing functionality supporting PDF, DOC, and DOCX formats",
        "Job description input and analysis with automatic keyword extraction",
        "LLMs processing using OpenAI API for text analysis",
        "Interactive heat map visualization showing skill match percentages",
        "Personalized resume optimization recommendations based on job requirements",
        "Skill gap analysis with priority scoring system",
        "Real-time resume scoring and compatibility assessment",
        "Export optimized resume suggestions in multiple formats",
        "Responsive design with intuitive drag-and-drop interface"
      ],
      challenges: "The main challenges included implementing accurate resume parsing across different formats and layouts, developing robust NLP models for semantic text analysis, creating meaningful heat map visualizations for complex data relationships, and ensuring real-time performance with large document processing. These were solved through advanced OCR techniques, pre-trained transformer models, efficient data structures, and optimized backend processing with caching mechanisms."
    },
  ],
  labels: {
    codeLink: "Code",
    demoLink: "Demo"
  }
}; 