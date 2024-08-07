import Github from "./assets/socials/github.png";
import Instagram from "./assets/socials/instagram.png";
import LinkedIn from "./assets/socials/linkedin.png";
import Twitter from "./assets/socials/twitter.png";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiVuedotjs,
  SiAngularjs,
  SiFlutter,
  SiMysql,
  SiVim,
  SiGit,
  SiDocker,
  SiSpringboot,
  SiWeb3Dotjs,
  SiOpenjdk,
  SiLinux,
} from "react-icons/si";

import { LuTextCursor } from "react-icons/lu";

export const homeData = {
  hello: "Greetings!",
  heading: "AKASH MADDURU",
  role: "An Experienced Full Stack Engineer",
  description:
    " with a passion for transforming concepts into robust digital solutions. My journey over the past two years at Artemis Network has been a thrilling exploration of the dynamic world of software development. I specialize in crafting end-to-end applications that seamlessly integrate cutting-edge technologies, delivering impactful solutions.",
};

export const aboutMe = {
  heading: "My Journey",
  description:
    "Embarking on my professional journey as a Full Stack Developer, I've immersed myself in the MERN stack. From shaping responsive user interfaces with React to orchestrating server-side logic with Node.js and Express.js, my tech odyssey has been an exhilarating ride.",
  content: [
    {
      company: "Axlr Data",
      role: "Full Stack Developer",
      description:
        "As a Backend Lead at Axlr Data, I am responsible for driving the development and optimization of backend systems while occasionally contributing to frontend tasks.",
      duration: "March 2024 - Current",
    },
    {
      company: "Artemis Network",
      role: "Software Engineer",
      description:
        "Contributing to the Arcade Gaming Platform and NFT Marketplace at Artemis Network. Designing and implementing robust architectures, building mobile apps, static websites, and various APIs. Leading the development of Telegram chatbots and optimizing application performance. Technologies include React, Flutter, Node.js, MongoDB, Python, Docker, AWS, and Azure.",

      duration: "Sep 2021 - Feb 2024",
    },
    {
      company: "AuxDynamics",
      role: "Co Founder",
      description:
        "Co-founded AuxDynamics, leading the team, mentoring interns, conducting code reviews, and approving PRs. Implemented intricate architectures for various products, contributing significantly to the company's growth.",
      duration: "Oct 2020 - Feb 2021",
    },
    {
      company: "CanvasBird",
      role: "Open Source Developer & Mentor",
      description:
        "Contributed significantly to CanvasBird as an Open Source Developer and Mentor during the WOC 2020 Hackathon. Led the design and implementation of a sophisticated DB-driven File Management System. Conducted code reviews, approved PRs, and provided guidance to students.",
      duration: "Nov 2020 - Jan 2021",
    },
    {
      company: "SCR, BZA",
      role: "Java J2EE Developer Intern",
      description:
        "Interned at SC Railway, Vijayawada, actively participating in the development of day-to-day features, contributing to codebase refactoring, and playing a crucial role in enhancing the existing system.",
      duration: "Jan 2021 - May 2021",
    },
  ],
};

export const techMe = {
  heading: "Tech Toolbox",
  content: [
    {
      heading: "Frontend Sorcery",
      description:
        "My forte lies in crafting captivating user experiences. Employing React, Angular, and Vue.js, I breathe life into ideas with pixel-perfect precision. User-centric design isn't just a buzzword—it's a philosophy I embody.",
    },
    {
      heading: "Backend Alchemy",
      description:
        "The backend is my playground, where I've honed my skills using Node.js, Express.js, Java, and Spring Boot. Need seamless data storage and retrieval? MongoDB is my go-to solution.",
    },
    {
      heading: "Blockchain Enthusiast",
      description:
        "Venturing into the fascinating realm of blockchain, I connect Ethereum smart contracts to React applications using web3.js. The decentralized future is an exciting frontier I actively explore.",
    },
    {
      heading: "Mobile Wizardry",
      description:
        "Mobile app development isn't just a skill; it's a passion. Flutter is my wand, enabling me to conjure cross-platform mobile applications that captivate users.",
    },
    {
      heading: "Funding Success",
      description:
        "My journey at Artemis Network has been marked by success. As a key player, I've significantly contributed to raising over 135000$ US Dollars in funding through the development of impactful MERN stack applications.",
    },
  ],
};

export const skills = {
  languages: [
    {
      name: "Javascript",
      icon: SiJavascript,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Java",
      icon: SiOpenjdk,
    },
    {
      name: "Rust",
      icon: SiRust,
    },
  ],
  frontend: [
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "Angular",
      icon: SiAngularjs,
    },
    {
      name: "Vue",
      icon: SiVuedotjs,
    },
    {
      name: "Flutter",
      icon: SiFlutter,
    },
    {
      name: "Web3",
      icon: SiWeb3Dotjs,
    },
  ],
  backend: [
    {
      name: "Node",
      icon: SiNodedotjs,
    },
    {
      name: "Express",
      icon: SiExpress,
    },
    {
      name: "Springboot",
      icon: SiSpringboot,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "MySQL",
      icon: SiMysql,
    },
  ],
  tools: [
    {
      name: "Git",
      icon: SiGit,
    },
    { name: "Linux", icon: SiLinux },
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "Vim",
      icon: SiVim,
    },
    {
      name: "70 WPM",
      icon: LuTextCursor,
    },
  ],
};

export const footerContent = {
  heading: "Get in Touch",
  description:
    "I'm always open to new opportunities, collaborations, and engaging discussions. Whether you have a project in mind, want to discuss technology trends, or just want to say hello, feel free to reach out.",
};

export const projects = [
  {
    name: "Amazon Clone",
    overview:
      "Crafted an ecommerce clone inspired by Amazon with a focus on replicating key features and providing a seamless shopping experience.",
    techStack: "Spring boot, Angular, Mysql",
    projectGoals: [
      "Replicate key features of Amazon.",
      "Create feature-packed shopping experience.",
    ],
    urls: [
      { app: "Frontend", url: "https://github.com/akashmrc98/ecom-client.git" },
      {
        app: "Backend",
        url: "https://github.com/akashmrc98/ecom-services.git",
      },
    ],
  },
  {
    name: "Inventory Management System",
    overview:
      "Developed an Inventory Management System to efficiently manage an organization's inventory and assets. Built using the MEVN stack.",

    techStack: "Node.js Express.js, Vue.js, Mongodb",
    projectGoals: [
      "Streamline inventory management processes.",
      "Ensure efficient tracking of organization assets.",
    ],
    urls: [
      {
        app: "Frontend",
        url: "https://github.com/akashmrc98/inventoryManagementSystemClient.git",
      },
      {
        app: "Backend",
        url: "https://github.com/akashmrc98/inventoryManagementSystemServer.git",
      },
    ],
  },
  {
    name: "CanvasBird Project",
    overview:
      "Contributed to the CanvasBird project, enhancing file management capabilities. Played a key role in implementing features to optimize file organization and access within the CanvasBird platform.",
    projectGoals: [
      "CanvasBird: Notion-inspired Efficiency.",
      "CanvasBird: Streamlining Collaborative Productivity.",
    ],
    urls: [
      {
        app: "App",
        url: "https://github.com/Canvasbird/canvasboard-backend.git",
      },
    ],
  },
  {
    name: "Online Grocery Store",
    overview:
      "Created an Online Grocery Store using the Django framework and Bootstrap. The project focused on providing a convenient platform for selling grocery items online.",
    techStack: "Django Bootstrap",
    projectGoals: ["An easy-to-use online platform for selling grocery items."],
    urls: [
      {
        app: "App",
        url: "https://github.com/akashmrc98/Gstore.git",
      },
    ],
  },

  {
    name: "Arch Linux Desktop Customization",
    overview:
      "Engaged in desktop customization for Arch Linux, utilizing dwm, polybar, and configuration scripts to implement window tiling managers.",
    techStack: "dwm polybar rofi...",
    projectGoals: [
      "Customize the desktop environment for Arch Linux.",
      "Implement efficient window tiling management with dwm.",
    ],
    urls: [
      {
        app: "Arch Setup",
        url: "https://github.com/akashmrc98/arch_setup.git",
      },
      {
        app: "Dot Files",
        url: "https://github.com/akashmrc98/dot_files.git",
      },
      {
        app: "Emacs Config",
        url: "https://github.com/akashmrc98/emacs_config.git",
      },
    ],
  },
];

export const socialData = [
  {
    url: "https://www.linkedin.com/in/akashmrc98/",
    icon: LinkedIn,
  },
  {
    url: "https://github.com/akashmrc98",
    icon: Github,
  },
  {
    url: "https://twitter.com/akash2rockzzz",
    icon: Twitter,
  },
  {
    url: "https://www.instagram.com/shanks98m/",
    icon: Instagram,
  },
];
