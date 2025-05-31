import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wesley Coetzee",
  initials: "WC",
  location: "The Hague, The Netherlands, CET",
  locationLink: "https://www.google.com/maps/place/The+Hague",
  about:
    "Senior Software Engineer | Tech Lead | Working with Event Driven Micro Services Architecture | Cloud Enthusiast | Exploring Web3",
  avatarUrl: "https://avatars.githubusercontent.com/u/15249642?v=4",
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
  profile: [
    "As a Software Engineer with over 10 years of experience, I specialize in crafting mission-critical systems using a diverse array of technologies. This broad expertise allows me to make informed decisions in software design and development.",
    "My core strength lies in tackling complex challenges—be it debugging intricate system issues, implementing sophisticated requirements, or optimizing performance bottlenecks. I excel at designing scalable and reliable systems that meet the highest standards of quality. Additionally, I bring proven leadership skills, guiding teams, engaging stakeholders, and mentoring junior developers.",
  ],
  education: [
    {
      school: "Nelson Mandela Metropolitan University (NMMU)",
      degree:
        "NDip Information Technologies (Software Engineering)",
      start: "Jan 2010",
      end: "Dec 2013",
    },
  ],
  work: [
    {
      company: "Eneco",
      link: "https://www.eneco.nl",
      badges: ["Rotterdam, The Netherlands"],
      title: "Senior Software Engineer | Technical Lead",
      technologies: [
        "Azure",
        "C#",
        "Cosmos",
        "Docker",
        "EventHubs",
        "GraphQL",
        "Kafka",
        "Mongo",
        "ServiceBus",
        "SQL",
      ],
      start: "Sep 2024 (Mar 2022)",
      end: "Current",
      description: [
        "Technical Lead for the Virtual Power Plant, a replacement for the old asset steering system.",
        "Lead an initiative to work out the integration between VPP and the replacement SCADA system",
        "Architecting Layer 3, 3.5, and 4 of the Purdue model for the VPP",
        "Lead an initiative to improve chain monitoring and reduce critical incidents",
        "Identifying performance bottlenecks and technical improvements",
        "Coaching and mentoring developers"
      ]
    },
    {
      company: "Capgemini",
      link: "https://www.capgemini.com",
      badges: ["Rotterdam, The Netherlands", "Contracted to Eneco"],
      title: "Managing Consultant",
      technologies: [
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
      start: "Mar 2022",
      end: "Sep 2024",
      description: [
        "Technical Lead on the Virtual Power Plant for Eneco (more information about this in the Eneco section)",
        "Spoke at GoTo Amsterdam about the VPP",
        "Improved the interview process for Capgemini and led an initiative to help with the recruitment of South African developers",
      ]
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Senior Software Engineer | Technical Lead",
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
      start: "Oct 2019",
      end: "Mar 2022",
      description: [
        "Architected the new online casino lobby product, which also included:",
        "Adding a BFF API to handle integrating with multiple backend systems, and added caching.",
        "Moving to using the Angular framework, and making use of features like lazy loading, etc.",
        "Designed a translation solution for banking to reduce testing times.",
        "Set up Azure CICD pipelines for the lobby",
        "Lead an initiative to implement LaunchDarkly feature flags to reduce production incidents.",
        "Coached and mentored 3 developers and 2 automation engineers."
      ]
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Developer Level 2",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Entity Framework",
        "RabbitMQ",
        "SQL",
        "TypeScript",
      ],
      start: "Nov 2017",
      end: "Sept 2019",
      description: [
        "Developed an integration for our Octopus builds that used the Swagger documentation to build and publish an NPM package to speed up integrations between teams.",
        "Developed software used to simulate a game being played to test the math models for games.",
        "Took over development of the new casino lobby."
      ]
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Developer Level 1",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Entity Framework",
        "RabbitMQ",
        "SQL",
        "TypeScript",
      ],
      start: "Nov 2016",
      end: "Oct 2017",
      description: [
        "Developed a mobile application that was used to manage and find meeting rooms for our Durban office of 2500 people. This project won an award; see achievements.",
        "Developed a platform used in the provisioning of Virtual Machines, reducing the time taken from 4-6 hours to 30 minutes.",
        "Spoke at a conference held by Derivco about using the Iconics Framework to develop a mobile application."
      ]
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      title: "Junior Developer",
      technologies: [
        "Angular",
        "Azure",
        "C#",
        "Entity Framework",
        "RabbitMQ",
        "SQL",
        "TypeScript",
      ],
      start: "Oct 2015",
      end: "Oct 2016",
      description: [
        "Managed incident and ticket management software used internally",
        "Upgraded legacy software to .NET Framework 4.6.2"
      ]
    },
    {
      company: "CompRSA",
      link: "https://www.comprsa.com",
      badges: ["PE, South Africa"],
      title: "Junior Software Engineer",
      technologies: ["Bootstrap", "C#", "CSS", "JavaScript"],
      start: "Feb 2014",
      end: "Sep 2015",
      description: [
        "Helped develop a platform used to manage charitable donations in money and time for tax benefits",
        "Create a monitoring solution using New Relic to monitor multiple websites to reduce incidents by 30%"
      ]
    },
  ],
  interests: [
    "Software Design",
    "Software Development",
    "Blockchain",
    "Performance Optimization",
    "Leadership",
    "Mentoring",
    "Golf",
    "Music",
    "Investing",
    "Animals",
    "Travel",
  ],
  achievements: [
    {
      title: "Speaker @ GoTo Amsterdam",
      date: "June 2024",
      description: "Spark Your Imagination, Eneco’s Virtual Power Plant.",
    },
    {
      title: "Speaker @ Derivco Hackathon",
      date: "Sep 2018",
      description: "Developing a Mobile Application Using the Ionic Framework.",
    },
    {
      title: "Tesla Innovation Award",
      date: "2017",
      description: "Awarded at Derivco for developing a mobile application that was used to book, manage, and locate meeting rooms for a company of over 2000 people.",
    },
  ],
  projects: [
    {
      title: "Personal Website",
      techStack: ["TypeScript", "Next.js", "Bun"],
      description: "My personal website",
      link: {
        label: "wezzcoetzee.com",
        href: "https://www.wezzcoetzee.com",
      },
    },
    {
      title: "Occasional Writer",
      techStack: ["Writing"],
      description: "I occassionally write about software development and other topics on Medium.com.",
      link: {
        label: "medium.com",
        href: "https://medium.com/@wezzcoetzee",
      },
    },
    {
      title: "What'ss Risk Management?",
      techStack: ["TypeScript", "Next.js", "Bun"],
      description:
        "A small tool to help traders manage their risk when trading.",
      link: {
        label: "whatsriskmanagement.com",
        href: "https://whatsriskmanagement.com",
      },
    },
    {
      title: "GMoney",
      techStack: ["React Native", "Android Studio", "XCode", "XState"],
      description:
        "A mobile banking application that aims to bring banking to the unbanked in Africa.",
      link: {
        label: "g-money.com.gh",
        href: "https://www.g-money.com.gh",
      },
    },
    {
      title: "Bobtail",
      techStack: ["Angular", "Azure", "C#", "NgRX", "SQL", "TypeScript"],
      description:
        "An application for Bobtail dog food, where user's can upload their purchases and claim insurance payouts.",
      link: {
        label: "bobtail.co.za",
        href: "https://portal.bobtail.co.za",
      },
    },
    {
      title: "Ultra Pet",
      techStack: ["Angular", "Azure", "C#", "NgRX", "SQL", "TypeScript"],
      description:
        "An application for Ultra Pet pet food, where user's can upload their purchases to qualify for insurance benefits.",
      link: {
        label: "ultra-pet.co.za",
        href: "https://portal.ultra-pet.co.za",
      },
    },
    {
      title: "Yapper",
        techStack: ["Angular", "Azure", "C#", "NgRX", "SQL", "TypeScript"],
      description:
        "A social application used to track your dogs habbits and shared them with the community.",
      link: {
        label: "yapperrewards.com",
        href: "https://portal.yapperrewards.com",
      },
    },
  ],
} as const;
