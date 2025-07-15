const learningAreas = [
  {
    category: "Machine Learning",
    skills: [
      {
        name: "Deep Learning with PyTorch",
        progress: 100,
        description: "Neural networks, CNNs, RNNs, and Transformers",
        timeframe: "3 months"
      },
      {
        name: "Natural Language Processing",
        progress: 100,
        description: "Text analysis, sentiment analysis, and language models",
        timeframe: "3 months"
      }
    ]
  },
  {
    category: "Full-Stack Development",
    skills: [
      {
        name: "Advanced React & Next.js",
        progress: 65,
        description: "Server-side rendering, optimization, and advanced patterns",
        timeframe: "2 months"
      },
      {
        name: "Distributed Computing Principles",
        progress: 0,
        description: "Distributed Systems, Distributed Computing, and Distributed Systems Design",
        timeframe: "2 months"
      },
    ]
  },
  {
    category: "Other AI Technologies",
    skills: [
      {
        name: "RAG & AI Agents",
        progress: 100,
        description: "RAG, AI Agents, LLMs, and MCP",
        timeframe: "3 months"
      },
      {
        name: "Cloud Computing and AI Hosting",
        progress: 0,
        description: "Multicore parallelism, Cloud-hosted microservices, AI/ML components, Parallel computing",
        timeframe: "2 months"
      }
    ]
  }
];

export const currentlyLearningContent = {
  section: {
    title: "Currently Learning",
    subtitle: "My ongoing journey of continuous learning and skill development"
  },
  stats: [
    {
      value: "9",
      label: "Skills Learning",
      icon: "TrendingUp",
      color: "text-blue-500"
    },
    {
      value: "15+",
      label: "Hours/Week",
      icon: "Clock",
      color: "text-green-500"
    },
    {
      value: learningAreas.length.toString(),
      label: "Focus Areas",
      icon: "Target",
      color: "text-purple-500"
    }
  ],
  learningAreas,
  goals: {
    title: "Learning Goals for 2025",
    items: [
      "Complete Cornell Master's Degree",
      "Complete Advanced React & Next.js training (server-side rendering, optimization, advanced patterns)",
      "Learn Distributed Computing Principles (systems design, scalability, fault tolerance)",
      "Integrate AI expertise (PyTorch, NLP, RAG, AI agents) into full-stack applications"
    ]
  }
}; 