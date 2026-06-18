export type SectionId = "ai" | "fullstack" | "cloud";

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email";
}

export interface Skill {
  name: string;
  rating: number;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SectionData {
  id: SectionId;
  title: string;
  subtitle: string;
  introduction: string;
  skills: Skill[];
  projects: Project[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: "summary" | "summary_large_image";
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  siteUrl: string;
}

export interface PortfolioData {
  seo: SEOData;
  hero: {
    name: string;
    profileImage: string;
    titles: {
      text: string;
      sectionId: SectionId;
    }[];
    socialLinks: SocialLink[];
    resumeUrl: string;
  };
  sections: SectionData[];
  contact: {
    heading: string;
    subheading: string;
    successMessage: string;
    errorMessage: string;
  };
}
