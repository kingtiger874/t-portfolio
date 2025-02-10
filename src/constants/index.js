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
  angular,
  next,
  mysql,
  express,
  nest,
  java,
  docker,
  cogmento,
  CMS,
  onwardurl,
  EMSurl,
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
    title: "Java Developer",
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Java",
    icon: java,
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
    title: "Full-Stack Engineer|contract",
    company_name: "FloEver Health",
    icon: "/company/floever.PNG",
    iconBg: "rgb(230, 222, 221)",
    date: "Dec 2023 - Dec 2024",
    points: [
      "Overview: Built a HIPAA-compliant telemedicine platform to improve women’s healthcare accessibility through real-time video consultations and AI-driven health insights.",
      "Built Telemedicine Platform: Developed a HIPAA-compliant telemedicine platform using React.js, Node.js, and WebRTC, enabling secure real-time video consultations.",
      "AI Integration: Implemented AI-powered health insights by integrating pre-trained machine learning models to enhance early detection and personalized treatment plans.",
      "Data Visualization: Developed interactive dashboards (D3.js) for tracking patient data, improving data accessibility by 40% and enhancing clinical decision-making.",
      "Security & Compliance: Strengthened HIPAA-compliant authentication with OAuth2 and JWT, reducing unauthorized access by 30%."
    ],
  },
  {
    title: "Full-Stack Engineer",
    company_name: "Onward Delivery",
    icon: "/company/onward.PNG",
    iconBg: "rgb(230, 222, 221)",
    date: "May 2020 - Nov 2023",
    points: [
      "Overview: Developed a Real-time Supply Chain Optimization Platform that enhanced shipment tracking, utilized AI for demand forecasting, and automated data streaming for improved efficiency.",
      "Dashboard Development: Built Angular-based dashboards, improving real-time shipment tracking and reducing supply chain disruptions by 35%.",
      "Microservices & API Optimization: Developed Java Spring Boot microservices, reducing API response times and improving backend performance.",
      "Real-Time Data Processing: Integrated WebSockets and AWS Kinesis, reducing latency and ensuring immediate shipment updates.",
      "Database Performance: Optimized PostgreSQL queries and caching mechanisms, supporting 10M+ transactions per day."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Atomic Object",
    icon: "/company/atomic.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Jun 2017 - Feb 2020",
    points: [
      "Overview: Developed  several platforms and applications such as CMS platform, Employee Management System (EMS), eCommerce applications.",
      "Built E-Commerce Systems: Developed scalable platforms serving millions of users with Node.js, Express.js, and robust REST APIs.",
      "Built secure EMS platforms: Automated payroll, employee performance tracking, and HR data management with AI-driven analytics and user-friendly dashboards  with Java, Spring Boot and MongoDB.",
      "Developed custom CMS solutions: Enabled content creation, role-based access control, and multi-user collaboration with React, Node.js, and PostgreSQL.",
      "Client Collaboration: Worked directly with clients and business stakeholders to translate technical requirements into functional solutions, ensuring 100% on-time project delivery."
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
    name: "Global Supply Chain Optimization Platform",
    description:
      "Onward Delivery connects shippers with carriers to optimize bulky item transport using data-driven matching, real-time tracking, and digital proof of delivery, reducing costs and improving efficiency.",
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
    image: onwardurl,
    site_link: "https://goonsofbalatroon.com",
  },
  {
    name: "Contetn Management System Platform",
    description:
      "It provides features, documentation, tutorials, and a plugin marketplace for developers and content managers. The site supports users in API creation, content management, customization, and integrations.",
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
    image: CMS,
    site_link: "https://goonsofbal.com",
  },
  {
    name: "Employee Management Platform",
    description:
      "This allows you to track hours worked, manage benefits enrollment, and run payroll all from a single platform. No more data double entry and manual approval processes—just easy, accurate payroll.",
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
    image: EMSurl,
    site_link: "https://www.bamboohr.com/",
  },
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
    site_link: "https://www.onwarddelivery.com/.io",
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