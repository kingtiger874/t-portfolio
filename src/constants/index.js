import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  mongodb,
  git,

  threejs,
  python,
  aws,
  vue,
  next,
  mysql,
  express,
  nest,
  java,
  docker,
  cogmento,
  goons,
  humming,
  proper,
  diyar,
  travel,
  vikid,
  rent,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "Mobile Developer",
  //   icon: mobile,
  // },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next",
    icon: next,
  },
  // {
  //   name: "Vue",
  //   icon: vue,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Cohere Health",
    icon: "/company/insurecert.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Dec 2023 - Dec 2024",
    points: [
      "Contributed to the development of the Cohere Unify Platform, leveraging AI and machine learning to streamline prior authorization processes and improve patient access to quality care.",
      "Designed and implemented scalable RESTful APIs and backend systems using Node.js, Express, Python, and Java, enabling real-time integration between health plans and care providers.",
      "Built predictive analytics features using TensorFlow and Python, allowing health plans to create data-driven care paths and pre-approve patients for services proactively.",
      "Developed user-friendly interfaces with React and Angular, providing healthcare providers with seamless tools to manage prior authorizations efficiently.",
      "Enhanced system performance and scalability by deploying a microservices architecture on AWS, utilizing Docker and Kubernetes for containerization and orchestration.",
      "Secured sensitive healthcare data by implementing multi-factor authentication, encryption mechanisms, and ensuring compliance with HIPAA and industry data standards."
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "ScienceSoft ",
    icon: "/company/overture.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Jun 2020 - Nov 2023",
    points: [
      "Delivered a Cloud-Based Financial Data Analytics Platform and an AI Financial Fraud Detection System, using Java, Python, JavaScript/TypeScript, Angular, React, AWS, PostgreSQL, MySQL, and AI technologies to meet financial industry needs.",
      "Designed a financial data analytics platform capable of real-time processing and reporting, utilizing Apache Spark, Hadoop, and Kafka, with interactive dashboards built in React and Angular to streamline insights for financial institutions.",
      "Built an AI-driven fraud detection system for real-time anomaly detection, leveraging Torch, TensorFlow, and Keras, significantly improving fraud prevention accuracy.",
      "Integrated the Ethereum blockchain for secure transaction tracking and implemented smart contracts with Solidity, ensuring transparency and trust in real-time financial operations.",
      "Migrated systems to AWS, utilizing serverless architectures (Lambda), containerized services with Docker, and secure data storage with PostgreSQL and MySQL, ensuring scalability and high availability for real-time applications."
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Fjorge ",
    icon: "/company/goons.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Jul 2015 - Mar 2020",
    points: [
      "Delivered custom CMS platforms, Employee Management Systems (EMS), eCommerce applications, and ADA-compliant websites using Java, Angular, Node.js, AWS, and AI technologies to meet diverse client needs.",
      "Designed CMS platforms with custom plugins, AI-powered search features, and intuitive UI/UX elements, streamlining content workflows and enhancing usability for clients across industries.",
      "Migrated legacy systems to AWS, leveraging serverless architectures (Lambda) and Docker to improve scalability and reduce costs.",
      "Configured and maintained CI/CD pipelines, enabling efficient deployments, improved performance, and scalability for applications handling high traffic volumes.",
      "Worked closely with cross-functional teams, including UI/UX designers and solutions architects, to deliver client-focused solutions, contributing to Fjorge’s 5.0-star Clutch rating for exceptional project outcomes."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
    name: "Rajesh Venugopal",
    designation: "Direct of Engineering",
    company: "Ingram Micro",
    image: "/CTOs/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Alex does.",
    name: "Chris Brown",
    designation: "Project Manager",
    company: "Dapper Labs",
    image: "/CTOs/5.jpg",
  },
  {
    testimonial:
      "After Alex optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Alexei Gura",
    designation: "CTO",
    company: "America's Frontline Doctors",
    image: "/CTOs/3.jpg",
  },
];


const projects = [
  {
    name: "Cogmento CRM",
    description:
      "This platform offers a comprehensive CRM solution that helps businesses manage customer relationships, sales, and marketing efforts through a user-friendly interface and various tools.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Django",
      //   color: "green-text-gradient",
      // },
    ],
    image: cogmento,
    site_link: "https://cogmento.com",
  },
  {
    name: "Goons of Balatroon",
    description:
      "This website showcases an NFT card game, featuring gameplay mechanics and community engagement through various interactive elements and events.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Node",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Web3",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "IMX",
      //   color: "green-text-gradient",
      // },
    ],
    image: goons,
    site_link: "https://goonsofbalatroon.com",
  },
  {
    name: "HummingBot.io",
    description:
      "Hummingbot is an open-source platform that allows users to build and run cryptocurrency trading bots, providing tools for algorithmic trading and liquidity mining across different exchanges.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Gatsby",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Web3",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "PixiJS",
      //   color: "green-text-gradient",
      // },
    ],
    image: humming,
    site_link: "https://hummingbot.io",
  },
  {
    name: "Properstar Estate",
    description:
      "Properstar is a property rental platform that connects users with real estate listings, offering a variety of properties for rent and sale in different locations, along with helpful search features.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Express",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Contentful",
      //   color: "pink-text-gradient",
      // },
    ],
    image: proper,
    site_link: "https://www.properstar.com",
  },
  {
    name: "Diyar News",
    description:
      "This real estate development in Bahrain features a master-planned community with residential, commercial, and recreational spaces designed to promote a luxurious lifestyle.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Gatsby",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Contentful",
      //   color: "pink-text-gradient",
      // },
    ],
    image: diyar,
    site_link: "https://www.diyar.bh",
  },
  // {
  //   name: "Traveling Girls",
  //   description:
  //   "TravelGirls is a travel companion website that connects men with women looking for travel partners, focusing on romantic connections and shared travel experiences.",
  //     tags: [
  //       {
  //         name: "Angular",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "Node.js",
  //         color: "green-text-gradient",
  //       }
  //     ],
  //   image: travel,
  //   site_link: "https://www.travelgirls.com",
  // },
  {
    name: "Vikids Women",
    description:
    "This site offers parenting and child development resources, providing advice on topics like adolescent relationships and children's poetry to support parents and educators.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Ruby",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Medium",
      //   color: "pink-text-gradient",
      // },
    ],
    image: vikid,
    site_link: "https://www.vikids.ru",
  },
  {
    name: "Rent Furnished",
    description:
      "Wunderflats is an online platform for renting furnished apartments in Germany, designed to help tenants find temporary housing while offering landlords a way to connect with verified renters.",
    tags: [
      // {
      //   name: "React",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Node",
      //   color: "green-text-gradient",
      // }
    ],
    image: rent,
    site_link: "http://wunderflats.com",
  },
];

export { services, technologies, experiences, testimonials, projects };