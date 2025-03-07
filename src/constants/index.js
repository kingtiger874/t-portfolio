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
    title: "Senior Full Stack Engineer",
    company_name: "Oracle",
    icon: "/company/oracle.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Oct 2023 - Feb 2025",
    points: [
      "Directed a small team to revamp distributed API gateways and integrate enhanced frontend monitoring solutions using Java, Spring Boot, and Angular.",
      "Reengineered caching and load-balancing strategies, which resulted in annual savings of up to $500K and bolstered transaction throughput for systems managing 1M+ daily transactions.",
      "Mentored team members on advanced microservices methodologies and best practices.",
    ],
  },
  {
    title: "Java Backend Engineer",
    company_name: "Oracle",
    icon: "/company/oracle.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Mar 2022 - Sep 2023",
    points: [
      "Designed and developed 10+ microservices-based backend systems using Java, Spring, and Python, enhancing scalability, maintainability, and system resilience.",
      "Optimized Oracle SQL queries and indexing, reducing query execution time by 17%.",
      "Collaborated seamlessly with frontend and DevOps teams in a remote/hybrid environment, optimizing backend integration and accelerating deployment workflows.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "FloEver Health",
    icon: "/company/floever.PNG",
    iconBg: "rgb(230, 222, 221)",
    date: "Sep 2023 - Oct 2024",
    points: [
      "Led a HIPAA-compliant telemedicine platform with React.js, Spring Boot, and WebRTC, securing real-time video consultations.",
      "Developed FHIR-compliant RESTful APIs using Java, Spring Boot, and PostgreSQL for seamless data exchange.",
      "Architected microservices-based healthcare solutions on AWS, optimizing system scalability and fault tolerance.",
      "Designed D3.js dashboards, enhancing clinical decision-making efficiency by 30%.",
      "Mentored 2 junior developers in API security and cloud deployment."
    ],
  },
  {
    title: "Java Software Developer",
    company_name: "Onward Delivery",
    icon: "/company/onward.PNG",
    iconBg: "rgb(230, 222, 221)",
    date: "May 2020 - Feb 2022",
    points: [
      "Migrated a supply chain system by migrating Java 8 to Java 17 using Spring Boot, enhancing maintainability, security, and performance, and transitioned 100K+ lines of code with zero downtime.",
      "Developed backend APIs using REST & GraphQL, enabling modern frameworks to integrate seamlessly and improving system response time by 40%.",
      "Implemented custom Kafka serializers/deserializers for structured message encoding, enabling real-time data processing with Apache Spark.",
      "Designed and developed user interfaces for the supply chain platform using React & Next.js, improving UI performance and accessibility.",
      "Boosted frontend performance by implementing lazy loading, code splitting, and state management with React Context & Redux, improving page load speed by 35%.",
      "Implemented Redis caching and Nginx reverse proxy, reducing server response times by 40% and enhancing content load times."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Atomic Object",
    icon: "/company/atomic.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Jun 2018 - Apr 2020",
    points: [
      "Designed and implemented diverse platforms and applications, including a CRM platform, a microservices-based ERP, and various eCommerce solutions.",
      "Enhanced server-side rendering with Express and Node.js, boosting SEO and performance for e-commerce product pages, leading to increased user engagement and conversions.",
      "Implemented an AI-powered chatbot using TensorFlow, Python, and NLP, enhancing user interaction and automating customer support on e-commerce platforms.",
      "Designed and implemented RESTful and GraphQL APIs with Spring Boot, enabling seamless data exchange across HR, finance, and inventory modules in an enterprise ERP system, improving integration and operational efficiency.",
    ],
  },
  {
    title: "Front End Development Intern",
    company_name: "Disney Interactive",
    icon: "/company/disney.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Jun 2017 - Dec 2017",
    points: [
      "Assisted in creating responsive web pages using HTML and CSS for internal tools and platforms.",
      "Worked on enhancing the user interface (UI) and ensuring accessibility across web platforms.",
      "Collaborated with senior developers to test and troubleshoot website functionality and user experience."
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
    site_link: "https://www.onwarddelivery.com/",
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