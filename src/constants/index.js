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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
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
    title: "Full-Stack Engineer",
    company_name: "InsureCert Systems Inc",
    icon: "/company/insurecert.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Nov 2022 - Present",
    points: [
      "Spearheaded the design and development of the AAMI Real Estate Website, improving user experience and functionality by 25% which contributed to a 10% increase in customer retention",
      "Developed custom, reusable React components for a library, enhancing development efficiency and consistency across projects by 30%",
      "Optimized MongoDB queries reducing load times and improving overall performance by 30% through a modified indexing strategy",
      "Integrated Stripe API to enable secure payment processing enhancing user trust and increasing transaction rates by 15%",
      "Mentored junior developers fostering their growth and increasing team efficiency by 20% through Agile practices and coding standard"
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Overture Law",
    icon: "/company/overture.png",
    iconBg: "rgb(230, 222, 221)",
    date: "Jan 2022 - Oct 2022",
    points: [
      "Developed a real-time collaborative platform using React, Node.js and WebSocket, facilitatin instance communication among users",
      "Constructed a progressive web application(PWA), enhancing mobile user experience and offline capabilities",
      "Established and upgraded RESTful APIs improving data transfer efficiency and increasing overall application performance by 25%",
      "Integrated Elasticsearch with Node.js applications for advanced search capabilities, significantly improving user query response times by 60%",
      "Supported 3 junior developers by sharing the best coding conventions and examples which helped reduce code review revisions by 40%"
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Goons of Balatroon",
    icon: "/company/goons.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Mar 2019 - Jan 2022",
    points: [
      "Streamlined the backend of the Goons of Balatroon NFT card game resulting in a 160%^ increase in the number of daily active users",
      "Built NFT management app streamlining backend processes and leading to a 25% rise in NFT transactions",
      "Implemented backend integrations to support interactive player statistics increasing user engagement by 30%",
      "Automated the CI/CD pipeline for multiple projects usign Jenkins and Docker, reducing deployment times by over 40%",
      "Colaborated effectively with cross-functional teams, leading to a 20% reduction in project delivery time"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Humming Bot",
    icon: "/company/humming.png",
    iconBg: "rgb(56, 62, 86)",
    date: "Feb 2017 - Feb 2019",
    points: [
      "Launched a website for crypto market makers for an open-source software company resulting in a 40% increase in website traffic",
      "Implemented server-side rendering with Next.js for the main product site, resulting in a 50% improvement in load times",
      "Redesigned the frontend onboarding process in collaboration with QA and marketing teams improving user retention by 40%",
      "Implemented analytics tools on the frontend to track user engagement leading to a 15% increase in active users",
      "Introduced Elixir in a microservides architecture for real-time data proecessing, improving throughput by 30%"
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