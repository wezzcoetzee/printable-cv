import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wesley Coetzee",
  initials: "WC",
  location: "Auckland, New Zealand, NZST",
  locationLink: "https://www.google.com/maps/place/Auckland",
  about:
    "Tech Lead | Principal Engineer",
  avatarUrl: "https://avatars.githubusercontent.com/u/15249642?v=4",
  personalWebsiteUrl: "https://www.wezzcoetzee.com",
  contact: {
    email: "hello@wezzcoetzee.com",
    tel: "+64225316967",
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
      company: "Idexx",
      link: "https://www.idexx.com",
      badges: ["Auckland, New Zealand"],
      about: "ezyVet is a cloud-based veterinary practice management software, and Vello is its integrated client engagement platform, developed by IDEXX to help vet clinics communicate with pet owners, automate reminders (SMS/email), handle online scheduling, and improve compliance, all working seamlessly within the ezyVet system for better efficiency and client satisfaction.",
      positions: [
        {
          title: "Senior Software Engineer",
          technologies: ["AWS", "DynamoDB", "GitHub", "Go", "Kafka", "NestJs", "PostgreSQL", "React", "SendGrid", "SQS", "TypeScript"],
          start: "Dec 2025",
          end: "Current",
          description: [
            "Technical Lead for Mass Communications System, enabling the sending of notifications to clients via SMS and email.",
          ]
        }
      ]
    },
    {
      company: "Eneco",
      link: "https://www.eneco.nl",
      badges: ["Rotterdam, The Netherlands"],
      about: "Eneco is a major, independent international energy company, primarily operating in the Netherlands, Belgium, Germany, and the UK, focused on helping consumers and businesses transition to sustainable energy, with a core mission of 'everyone's sustainable energy'.",
      positions: [
        {
          title: "Engineering Manager | Principal Engineer",
          technologies: [
            "Azure",
            "C#",
            "Cosmos",
            "Docker",
            "Distributed Systems",
            "Event Driven Architecture",
            "EventHubs",
            "Kafka",
            "Microservices",
            "Mongo",
            "Polly",
            "RabbitMQ",
            "REST",
            "ServiceBus",
            "SQL",
          ],
          start: "Jun 2025",
          end: "Dec 2025",
          description: [
            "Led a cross-functional team of 4 developers and 2 automation engineers.",
            "Led an initiative to change our hosting provider, enabling us to be a true mission critical system.",
            "Implemented multi-region setup for the VPP, enabling a more resilient system.",
            "Helped with roadmap planning and technical debt planning for the VPP."
          ]
        },
        {
          title: "Technical Lead",
          technologies: [
            "Azure",
            "C#",
            "Cosmos",
            "Docker",
            "Distributed Systems",
            "Event Driven Architecture",
            "EventHubs",
            "Kafka",
            "Microservices",
            "Mongo",
            "Polly",
            "RabbitMQ",
            "REST",
            "ServiceBus",
            "SQL",
          ],
          start: "Sep 2024",
          end: "Jun 2025",
          description: [
            "Technical Lead for the Virtual Power Plant, a replacement for the old asset steering system.",
            "Led a team of 4 developers and 2 automation engineers.",
            "Led an initiative to work out the integration between VPP and the replacement SCADA system.",
            "Architected Layer 3, 3.5, and 4 of the Purdue model for the VPP.",
            "Led an initiative to improve chain monitoring and reduce critical incidents.",
            "Identified performance bottlenecks and technical improvements.",
            "Coached and mentored developers and automation engineers."
          ]
        }
      ]
    },
    {
      company: "Capgemini contracted to Eneco",
      link: "https://www.capgemini.com",
      badges: ["Rotterdam, The Netherlands", "Contracted to Eneco"],
      positions: [
        {
          title: "Managing Consultant",
          technologies: [
            "Azure",
            "C#",
            "Cosmos",
            "Distributed Systems",
            "Docker",
            "Event Driven Architecture",
            "EventHubs",
            "Kafka",
            "Microservices",
            "Mongo",
            "Polly",
            "RabbitMQ",
            "REST",
            "ServiceBus",
            "SQL",
          ],
          start: "Mar 2022",
          end: "Sep 2024",
          description: [
            "Technical Lead on the Virtual Power Plant for Eneco (more information about this in the Eneco section).",
            "Spoke at GoTo Amsterdam about the VPP.",
            "Improved the interview process for Capgemini and led an initiative to help with the recruitment of South African developers.",
          ]
        }
      ]
    },
    {
      company: "Derivco",
      link: "https://derivco.co.za",
      badges: ["Durban, South Africa"],
      about: "Derivco is a leading provider of online gaming solutions, including sports betting, casino, and poker, with a focus on delivering high-quality, secure, and user-friendly products to customers around the world.",
      positions: [
        {
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
            "REST",
            "SQL",
            "TypeScript",
          ],
          start: "Oct 2019",
          end: "Mar 2022",
          description: [
            "Designed and developed the new online casino lobby product to address performance issues and improve the user experience.",
            "Added a BFF API to handle integrating with multiple backend systems, and added caching.",
            "Moved to using the Angular framework, and making use of features like lazy loading, etc.",
            "Designed a translation solution for banking to reduce testing times.",
            "Set up Azure CICD pipelines for the lobby.",
            "Led an initiative to implement LaunchDarkly feature flags to reduce production incidents.",
            "Coached and mentored developers and automation engineers."
          ]
        },
        {
          title: "Developer Level 2",
          technologies: [
            "Angular",
            "Azure",
            "C#",
            "Entity Framework",
            "RabbitMQ",
            "REST",
            "SQL",
            "TypeScript",
          ],
          start: "Nov 2017",
          end: "Oct 2019",
          description: [
            "Developed an integration for our Octopus builds that used the Swagger documentation to create and publish an NPM package to speed up integrations between teams.",
            "Developed software used to simulate a game being played to test the math models for games. This ensured regulatory compliance and sped up time to market.",
            "Took over the development of the new casino lobby."
          ]
        },
        {
          title: "Developer Level 1",
          technologies: [
            "Angular",
            "Azure",
            "C#",
            "Entity Framework",
            "RabbitMQ",
            "REST",
            "SQL",
            "TypeScript",
          ],
          start: "Nov 2016",
          end: "Nov 2017",
          description: [
            "Developed a mobile application that was used to manage and find meeting rooms for our Durban office of 2500 people. This project won an award; see achievements section.",
            "Developed a platform used in the provisioning of Virtual Machines, reducing the time taken from 4-6 hours to 30 minutes.",
            "Spoke at a conference held by Derivco about using the Iconics Framework to develop a mobile application."
          ]
        },
        {
          title: "Junior Developer",
          technologies: [
            "Angular",
            "Azure",
            "C#",
            "Entity Framework",
            "RabbitMQ",
            "REST",
            "SQL",
            "TypeScript",
          ],
          start: "Oct 2015",
          end: "Nov 2016",
          description: [
            "Managed incident and ticket management software used internally.",
            "Upgraded legacy software to .NET Framework 4.6.2."
          ]
        }
      ]
    },
    {
      company: "CompRSA",
      link: "https://www.comprsa.com",
      badges: ["PE, South Africa"],
      about: "CompRSA is a software development company that provides software development services to businesses and organizations.",
      positions: [
        {
          title: "Junior Software Engineer",
          technologies: ["Bootstrap", "C#", "CSS", "JavaScript", "KnockoutJS", "REST", "SQL"],
          start: "Feb 2014",
          end: "Oct 2015",
          description: [
            "Helped develop a platform used to manage charitable donations in money and time for tax benefits.",
            "Created a monitoring solution using New Relic to monitor customer websites."
          ]
        }
      ]
    },
  ],
  interests: [
    "Software Architecture",
    "Software Development",
    "Blockchain",
    "Performance Optimization",
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
      title: "My Website",
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
      description: "I occasionally write about software development and other topics on Medium.com.",
      link: {
        label: "medium.com",
        href: "https://medium.com/@wezzcoetzee",
      },
    },
    {
      title: "What's Risk Management?",
      techStack: ["TypeScript", "Next.js", "Bun"],
      description:
        "A small tool to help traders manage their risk when trading.",
      link: {
        label: "whatsriskmanagement.com",
        href: "https://whatsriskmanagement.com",
      },
    },
    {
      title: "Solana DCA Bot",
      techStack: ["TypeScript", "NestJS", "Solana", "Bun"],
      description:
        "A bot that automates the process of buying a small amount of BTC on a regular basis.",
      link: {
        label: "Solana DCA Bot",
        href: "https://github.com/wezzcoetzee/solana-dca-bot",
      },
    },
    {
      title: "Email Verification",
      techStack: ["Go"],
      description:
        "A tool that helps you verify if emails exist at scale",
      link: {
        label: "Email Verification",
        href: "https://github.com/wezzcoetzee/email-verification",
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
        "An application for Bobtail dog food, where users can upload their purchases and claim insurance payouts.",
      link: {
        label: "bobtail.co.za",
        href: "https://portal.bobtail.co.za",
      },
    },
    {
      title: "Ultra Pet",
      techStack: ["Angular", "Azure", "C#", "NgRX", "SQL", "TypeScript"],
      description:
        "An application for Ultra Pet pet food, where users can upload their purchases to qualify for insurance benefits.",
      link: {
        label: "ultra-pet.co.za",
        href: "https://portal.ultra-pet.co.za",
      },
    },
    {
      title: "Yapper",
      techStack: ["Angular", "Azure", "C#", "NgRX", "SQL", "TypeScript"],
      description:
        "A social application used to track your dog's habits and share them with the community.",
      link: {
        label: "yapperrewards.com",
        href: "https://portal.yapperrewards.com",
      },
    },
  ],
} as const;
