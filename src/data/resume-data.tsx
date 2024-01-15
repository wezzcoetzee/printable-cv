import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wesley Coetzee",
  initials: "WC",
  location: "The Hague, The Netherlands, CET",
  locationLink: "https://www.google.com/maps/place/The+Hague",
  about: "Senior Software Engineer | C#, Cloud, Angular and Blockchain",
  summary:
    "I am a Fullstack Software Engineer with 10 years of experience in developing mission-critical systems. Over the years, I have had the opportunity to work with a variety of technologies including C#, Angular, Kafka, Micro Services, Docker, Kubernetes, GraphQL, SQL, and Mongo, among others. My expertise in these areas allows me to design and develop robust systems that meet the needs of clients and end-users.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://www.wezzcoetzee.com",
  contact: {
    email: "info@wezzcoetzee.com",
    tel: "+31628912592",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/wezzcoetzee",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wesleycoetzee/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/wezzcoetzee",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Nelson Mandela Metropolitan University (NMMU)",
      degree: "NDip Software Engineering",
      start: "2010",
      end: "2013",
    },
  ],
  work: [
    {
      company: "Capgemini",
      link: "https://parabol.co",
      badges: ["The Netherlands", "Consulting", "Hybrid"],
      title: "Senior Software Engineer | Technical Team Lead",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Cosmos",
        "Docker",
        "GraphQL",
        "Kafka",
        "Mongo",
        "Polly",
        "ServiceBus",
        "SQL",
      ],
      logo: ParabolLogo,
      start: "2021",
      end: "Current",
      description:
        "Technical lead for a energy provider in the Netherlands, building a Virtual Power Plant to control all of the assets.",
    },
    {
      company: "WebDotNext",
      link: "https://wezzcoetzee.com",
      badges: ["South Africa", "The Netherlands", "Consulting"],
      title: "Director | Architect | Lead Developer",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Docker",
        "NGRX",
        "SQL",
        "TypeScript",
      ],
      logo: ParabolLogo,
      start: "2021",
      end: "Current",
      description:
        "This is my own business, where I work with other software developers to bring enterprise level solutions to clients",
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Senior Software Engineer → Technical Lead",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Docker",
        "GraphQL",
        "Kafka",
        "NGRX",
        "Polly",
        "RabbitMQ",
        "SQL",
        "TypeScript",
      ],
      logo: JojoMobileLogo,
      start: "2018",
      end: "2021",
      description:
        "Created the lobby for one of Derivco's largest operators. Created the lobby architecture, lead a team of developers (both locally and abroad), added additional supporting services, like migration clients, etc.",
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Software Engineer → Senior Software Engineer",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Entity Framework",
        "RabbitMQ",
        "SQL",
        "TypeScript",
      ],
      logo: JojoMobileLogo,
      start: "2015",
      end: "2018",
      description:
        "Created various tools to help with the running and management of various online betting platforms. Some notable projects: Wrote a system to manage DNS records on our own v-lans. Created a system that managed the commisioning and decommissioning of virtual machines. Wrote a mobile application to help with booking meetings and finding meetings rooms (this won an innovation award)",
    },
    {
      company: "CompRSA",
      link: "https://www.comprsa.com",
      badges: ["PE, South Africa"],
      title: "Junior Software Engineer",
      technologies: ["Bootstrap", "C#", "CSS", "JavaScript"],
      logo: NSNLogo,
      start: "2014",
      end: "2015",
      description:
        "Creating custom solutions for clients based all around the world. Some notable projects: Mobile donation platform for companies to manage their employes donations.",
    },
  ],
  skills: [
    "Blockchain",
    "Performance",
    "Software Architecture",
    "Software Development",
  ],
  interests: ["Blockchain", "Investing", "Golf"],
  projects: [
    {
      title: "Personal Website",
      techStack: ["Side Project", "TypeScript", "Next.js", "Bun"],
      description: "My perosnal website",
      logo: ConsultlyLogo,
      link: {
        label: "wezzcoetzee.com",
        href: "https://www.wezzcoetzee.com",
      },
    },
    {
      title: "WebDotNext",
      techStack: ["Business"],
      description:
        "My business where I do enterprise level software development for companies",
      logo: ConsultlyLogo,
      // link: {
      //   label: "wezzcoetzee.com",
      //   href: "https://www.wezzcoetzee.com",
      // },
    },
    {
      title: "GMoney",
      techStack: [
        "WebDotNext",
        "React Native",
        "Android Studio",
        "XCode",
        "XState",
      ],
      description:
        "A mobile banking application that aims to bring banking to the unbanked in Africa",
      logo: ConsultlyLogo,
      link: {
        label: "g-money.com.gh",
        href: "https://www.g-money.com.gh",
      },
    },
    {
      title: "Bobtail",
      techStack: [
        "WebDotNext",
        "Angular",
        "Azure",
        "C#",
        "NgRX",
        "SQL",
        "TypeScript",
      ],
      description:
        "An application for Bobtail dog food, where user's can upload their purchases and claim insurance payouts",
      logo: ConsultlyLogo,
      link: {
        label: "bobtail.co.za",
        href: "https://portal.bobtail.co.za",
      },
    },
    {
      title: "Ultra Pet",
      techStack: [
        "WebDotNext",
        "Angular",
        "Azure",
        "C#",
        "NgRX",
        "SQL",
        "TypeScript",
      ],
      description:
        "An application for Ultra Pet dog food, where user's can upload their purchases and claim insurance payouts",
      logo: ConsultlyLogo,
      link: {
        label: "ultra-pet.co.za",
        href: "https://portal.ultra-pet.co.za",
      },
    },
    {
      title: "Yapper",
      techStack: [
        "WebDotNext",
        "Angular",
        "Azure",
        "C#",
        "NgRX",
        "SQL",
        "TypeScript",
      ],
      description:
        "A social application used to track your dogs habbits and shared them with the community",
      logo: ConsultlyLogo,
      link: {
        label: "yapperrewards.com",
        href: "https://portal.yapperrewards.com",
      },
    },
  ],
} as const;
