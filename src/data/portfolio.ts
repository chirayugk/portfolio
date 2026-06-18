import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  seo: {
    title: "CHIRAYU SHARMA GK — AI Engineer · Full Stack · Cloud",
    description:
      "Premium portfolio of CHIRAYU SHARMA GK — AI Engineer, Full Stack Developer, and Cloud Engineer building intelligent, scalable products.",
    keywords: [
      "AI Engineer",
      "Full Stack Developer",
      "Cloud Engineer",
      "LLM",
      "RAG",
      "Next.js",
      "FastAPI",
      "AWS",
    ],
    ogTitle: "CHIRAYU SHARMA GK — AI Engineer · Full Stack · Cloud",
    ogDescription:
      "Building intelligent systems and world-class products at the intersection of AI, software, and cloud infrastructure.",
    ogImage: "/images/og-placeholder.svg",
    twitterCard: "summary_large_image",
    twitterTitle: "YOUR_NAME — AI Engineer · Full Stack · Cloud",
    twitterDescription:
      "Building intelligent systems and world-class products at the intersection of AI, software, and cloud infrastructure.",
    twitterImage: "/images/og-placeholder.svg",
    siteUrl: "https://your-domain.com",
  },

  hero: {
    name: "CHIRAYU SHARMA GK",
    profileImage: "/images/chiru.png",
    titles: [
      { text: "AI Engineer", sectionId: "ai" },
      { text: "Full Stack Developer", sectionId: "fullstack" },
      { text: "Cloud Engineer", sectionId: "cloud" },
    ],
    socialLinks: [
      {
        label: "GitHub",
        url: "https://github.com/chirayugk",
        icon: "github",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chirayu2004/",
        icon: "linkedin",
      },
      {
        label: "Twitter",
        url: "https://x.com/SharmaChir50963",
        icon: "twitter",
      },
      {
        label: "Email",
        url: "sharmachirayu4@gmail.com",
        icon: "email",
      },
    ],
    resumeUrl: "https://drive.google.com/file/d/1q4Uezes3jAxack3WeXOkGTe4Q5VplAEA/view?usp=sharing",
  },

  sections: [
    {
      id: "ai",
      title: "AI Engineer",
      subtitle: "Intelligent systems that ship",
      introduction:
        "I design and deploy production-grade AI systems — from retrieval-augmented pipelines and agent orchestration to fine-tuned models that solve real business problems. My focus is on reliability, latency, and measurable impact.",
      skills: [
        { name: "LLM Engineering", rating: 3 },
        { name: "RAG", rating: 3 },
        { name: "Agent Systems", rating: 2 },
        { name: "LangGraph", rating: 2 },
        { name: "Vector Databases", rating: 3 },
        { name: "Prompt Engineering", rating: 4 },
        { name: "FastAPI", rating: 4 },
      ],
      projects: [
        {
          image: "/images/image.png",
          title: "TECHPULSE",
          description:
            "An enterprise RAG platform with hybrid search, reranking, and observability — processing 10K+ queries daily with sub-second latency.",
          techStack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI"],
          liveUrl: "https://hackernews-clone-frontend-deploy.vercel.app/",
          githubUrl: "https://github.com/chirayugk/hackernews-clone-frontend",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "AI_PROJECT_2_TITLE",
          description:
            "Multi-agent workflow system for autonomous research, synthesis, and report generation with human-in-the-loop checkpoints.",
          techStack: ["LangGraph", "CrewAI", "Redis", "PostgreSQL"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "AI_PROJECT_3_TITLE",
          description:
            "Fine-tuned domain-specific LLM with custom evaluation harness, A/B testing framework, and continuous feedback loops.",
          techStack: ["PyTorch", "Hugging Face", "Weights & Biases", "vLLM"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "AI_PROJECT_4_TITLE",
          description:
            "Real-time document intelligence pipeline with OCR, entity extraction, and semantic chunking for legal document analysis.",
          techStack: ["Python", "Tesseract", "spaCy", "Qdrant", "FastAPI"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
      ],
    },
    {
      id: "fullstack",
      title: "Full Stack Developer",
      subtitle: "Products users love",
      introduction:
        "I build polished, performant web applications end-to-end — from pixel-perfect interfaces to robust APIs and databases. Every line of code is written with scalability, maintainability, and user experience in mind.",
      skills: [
        { name: "Next.js", rating: 3 },
        { name: "React", rating: 3 },
        { name: "TypeScript", rating: 2 },
        { name: "Node.js", rating: 2 },
        { name: "PostgreSQL", rating: 3 },
        { name: "Redis", rating: 2 },
        { name: "REST APIs", rating: 2 },
      ],
      projects: [
        {
          image: "/images/project-placeholder.svg",
          title: "FULLSTACK_PROJECT_1_TITLE",
          description:
            "SaaS analytics dashboard with real-time data visualization, role-based access control, and Stripe billing integration.",
          techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "FULLSTACK_PROJECT_2_TITLE",
          description:
            "Collaborative workspace platform with live cursors, CRDT-based sync, and offline-first architecture.",
          techStack: ["React", "Node.js", "WebSockets", "Redis", "MongoDB"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "FULLSTACK_PROJECT_3_TITLE",
          description:
            "E-commerce marketplace with multi-vendor support, inventory management, and AI-powered product recommendations.",
          techStack: ["Next.js", "Prisma", "PostgreSQL", "Algolia", "Vercel"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "FULLSTACK_PROJECT_4_TITLE",
          description:
            "Developer tools platform with API playground, documentation generator, and usage analytics dashboard.",
          techStack: ["React", "FastAPI", "GraphQL", "Redis", "Docker"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Engineer",
      subtitle: "Infrastructure that scales",
      introduction:
        "I architect and operate cloud-native infrastructure that is secure, observable, and cost-efficient. From container orchestration to CI/CD pipelines, I ensure systems run reliably at scale.",
      skills: [
        { name: "Docker", rating: 5 },
        { name: "AWS", rating: 5 },
        { name: "Linux", rating: 5 },
        { name: "CI/CD", rating: 4 },
        { name: "Kubernetes", rating: 4 },
        { name: "Nginx", rating: 5 },
      ],
      projects: [
        {
          image: "/images/project-placeholder.svg",
          title: "CLOUD_PROJECT_1_TITLE",
          description:
            "Multi-region Kubernetes cluster with auto-scaling, service mesh, and zero-downtime deployment pipelines.",
          techStack: ["Kubernetes", "AWS EKS", "Istio", "ArgoCD", "Terraform"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "CLOUD_PROJECT_2_TITLE",
          description:
            "Infrastructure-as-code platform managing 50+ microservices with GitOps workflows and drift detection.",
          techStack: ["Terraform", "AWS", "GitHub Actions", "Datadog"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "CLOUD_PROJECT_3_TITLE",
          description:
            "Serverless event processing pipeline handling 1M+ events/day with SQS, Lambda, and DynamoDB streams.",
          techStack: ["AWS Lambda", "SQS", "DynamoDB", "CloudWatch"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
        {
          image: "/images/project-placeholder.svg",
          title: "CLOUD_PROJECT_4_TITLE",
          description:
            "High-availability load balancing setup with Nginx, health checks, SSL termination, and DDoS mitigation.",
          techStack: ["Nginx", "Docker", "AWS ALB", "Let's Encrypt", "Linux"],
          liveUrl: "LIVE_URL",
          githubUrl: "GITHUB_URL",
        },
      ],
    },
  ],

  contact: {
    heading: "Let's Build Something Together",
    subheading:
      "Have a project in mind or want to collaborate? I'd love to hear from you.",
    successMessage:
      "Thank you for reaching out. I'll get back to you as soon as possible.",
    errorMessage:
      "Something went wrong. Please try again or reach out directly via email.",
  },
};
