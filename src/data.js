import Github from "./assets/socials/github.png";
import Instagrap from "./assets/socials/instagram.png";
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
  SiFlask,
  SiWeb3Dotjs,
  SiOpenjdk,
} from "react-icons/si";

import { LuTextCursor } from "react-icons/lu";

export const homeData = {
  hello: "Greetings!",
  heading: "AKASH MADDURU",
  role: "An Experienced Full Stack Developer",
  description:
    " with a passion for transforming concepts into robust digital solutions. My journey over the past two years at Artemis Network has been a thrilling exploration of the dynamic world of software development. I specialize in crafting end-to-end applications that seamlessly integrate cutting-edge technologies, delivering impactful solutions.",
};

export const aboutMe = {
  heading: "My Journey",
  description:
    "Embarking on my professional journey as a Full Stack Developer, I've immersed myself in the MERN stack. From shaping responsive user interfaces with React to orchestrating server-side logic with Node.js and Express.js, my tech odyssey has been an exhilarating ride.",
  content: [
    {
      title: "Artemis Network - A Crypto Startup",
      description:
        "During my two years at Artemis Network, a dynamic crypto startup, I played a pivotal role in the development of end-to-end applications using the MERN stack. I contributed significantly to raising over 1 Crore through successful MERN stack applications. My expertise includes building UI apps with React, developing APIs with Express.js, and occasional use of Python Flask for specific needs.",
    },
    {
      title: "Expanding Technology Stack",
      description:
        "In addition to my primary focus on the MERN stack, I expanded my tech stack to include Spring Boot for Java-based backend development. I explored frontend technologies such as Angular and Vue.js. My hands-on experience with DevOps concepts streamlined the development and deployment processes.",
    },
    {
      title: "Mobile App Development with Flutter",
      description:
        "As part of my versatile skill set, I delved into mobile app development using Flutter, ensuring cross-platform compatibility and engaging user experiences. This allowed me to contribute to the diverse technological landscape at Artemis Network.",
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
        "My journey at Artemis Network has been marked by success. As a key player, I've significantly contributed to raising over 1 Crore in funding through the development of impactful MERN stack applications.",
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
      name: "Web3 JS",
      icon: SiWeb3Dotjs,
    },
  ],
  backend: [
    {
      name: "Node JS",
      icon: SiNodedotjs,
    },
    {
      name: "Express JS",
      icon: SiExpress,
    },
    {
      name: "Springboot",
      icon: SiSpringboot,
    },
    {
      name: "Flask",
      icon: SiFlask,
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
    "Ready to embark on the next tech adventure? Let's connect! Feel free to reach out via email (akashmadduru@gmail.com) or phone (+919494535327). Connect with me on [LinkedIn](LinkedIn Link).",
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
    url: "",
    icon: Twitter,
  },
  {
    url: "",
    icon: Instagrap,
  },
];
