import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  mongodb,
  git,

  threejs,
  vue,
  next,
  mysql,
  express,
  nest,
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
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Nest",
    icon: nest,
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
    title: "Front-End Developer",
    company_name: "FinTech Innovations",
    icon: "/company/insurecert.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Jan 2023 - Dec 2024",
    points: [
      "Built Interactive Financial Tools: Developed dynamic dashboards using React.js and D3.js to display investment trends, market data, and portfolio analytics.",
      "Integrated Live Updates: Utilized WebSocket technology to enable seamless real-time data flow for stock prices and portfolio values.",
      "Enhanced Performance: Optimized rendering of extensive data sets with React Window, ensuring smooth interaction and fast load times.",
      "Responsive UI Design: Created device-agnostic, visually appealing user interfaces with Tailwind CSS and SCSS for consistent experiences.",
      "Collaborated Across Teams: Partnered with UI/UX designers to deliver user-friendly platforms tailored to retail and institutional clients.",
      "Ensured Data Integrity: Implemented advanced security measures aligned with fintech compliance standards to protect sensitive user information."

    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "CloudWorks Solutions",
    icon: "/company/overture.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Apr 2020 - Dec 2023",
    points: [
      "Developed Interactive Applications: Delivered scalable inventory and learning platforms featuring live data synchronization to boost user engagement and reduce latency.",
      "Optimized Cloud Performance: Integrated AWS CloudFront to accelerate content delivery and improve system responsiveness.",
      "Real-Time Synchronization: Implemented WebSockets for instant notifications and data updates, enhancing the user experience.",
      "Full-Stack Development: Built clean, maintainable solutions using Angular, Next.js, Node.js, and Tailwind CSS, meeting diverse project requirements."
    ],
  },
  {
    title: "Front-End & Back-End Developer",
    company_name: "GlobalTech Innovations",
    icon: "/company/goons.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Mar 2019 - Jan 2022",
    points: [
      "Designed Enterprise Platforms: Created dynamic employee management systems with React.js for efficient data handling and performance tracking.",
      "Developed APIs: Built secure RESTful APIs with Node.js and Express.js to streamline backend data operations.",
      "Improved State Management: Implemented complex state solutions using Redux Toolkit for consistent and reliable application behavior.",
      "Streamlined Data Queries: Leveraged GraphQL to optimize data fetching, enhance system performance, and reduce load times."
    ],
  },
  {
    title: "Junior Full-Stack Developer",
    company_name: "TechFlow Solutions",
    icon: "/company/humming.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Feb 2017 - Feb 2019",
    points: [
      "Built E-Commerce Systems: Developed scalable platforms serving millions of users with Node.js, Express.js, and robust REST APIs.",
      "Improved Efficiency: Enhanced site performance by reducing page load times 20% through lazy loading and optimized asset management.",
      "Collaborated with Senior Teams: Adopted clean coding practices, performance optimization techniques, and version control methodologies under senior developer mentorship."
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