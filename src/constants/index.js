import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  mathwork,
  CompileVortex,
  eduskill,
  mongodb,
  express,
  photoshop,
  figma,
  Bootstrap,
  wandernest,
  Ecommerce,
  gemini,
  passwordManager,
  weatherwidget,
  taskmanager,
  amazon,
  netflix,
  twitter,
  nextgen,
  github,
  devdesign,
  Nike,
  FoodApp,
  landingpage,
  PizzaHut,
  BurgerPoster,
  CoffePoster,
  tshirt,
  minimalposter,
  letterpad,
  badge,
  
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
    title: "Projects", 
    },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  // { title: "C", icon: c },
  { title: "Mongodb", icon: mongodb },
  { title: "Express", icon: express },
  { title: "Reactjs", icon: reactjs },
  { title: "Nodejs", icon: nodejs },
  {title: "Tailwind CSS", icon: tailwind },
  {title: "Photoshop", icon: photoshop },
  {title: "Figma", icon: figma },
  // { title: "C++", icon: cpp },
  // { title: "Python", icon: python },
  // { title: "Java", icon: java },
  
];

export const technologies = [
  // { name: "C++", icon: cpp },
  // { name: "Python", icon: python },
  // { name: "Java", icon: java },
  // { name: "C", icon: c },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  // { name: "Three JS", icon: threejs },
  { name: "Bootstrap", icon: Bootstrap },

  { name: "git", icon: git },
];

export const experiences = [
  
  {
    title: "Multidisciplinary Designer & Developer",
    company_name: "Freelance | Remote",
    icon: devdesign, // e.g., designDevIcon
    iconBg: "#161329",
    date: " 2022 - Present",
    points: [
      "Balancing creativity with technical expertise to deliver visually striking and functional designs.",
      "Currently working with clients to craft compelling UI/UX, brand identities, and web solutions.",
      "Combining graphic design and full-stack development to create unified digital experiences.",
      "Collaborated directly with clients to understand requirements, provide creative solutions, and deliver on tight deadlines."
    ],
  },
  {
    title: "Freelance Graphic Designer",
    company_name: "Design Projects",
    icon:photoshop, // e.g., graphicIcon
    iconBg: "#161329",
    date: "2023 - 2024",
    points: [
      "Designed custom posters, logos, t-shirts, and badge designs tailored to client needs.",
      "Created engaging branding materials including business cards and letterheads.",
      "Handled end-to-end design process — from concept ideation to final delivery.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Web Projects",
    icon: github, // e.g., webIcon
    iconBg: "#161329",
    date: "2022 - 2024",
    points: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Built responsive, high-performance websites tailored to user needs and business goals.",
      "Delivered real-world projects including landing pages, portfolio sites.",
      "Focused on creating user-friendly layouts with a clean, modern aesthetic and optimized performance.",
    
    ],
  },

];

export const projects = [
  {
    name: "WanderNest",
    description:
      "A full-stack travel listing platform built with the MERN stack, allowing users to create, edit, and review travel destinations.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
    ],
    image: wandernest,
    source_code_link: "https://github.com/Zahida21/wandernest",
  },

  {
   name: "E-Commerce Website",
    description:
      "A mini e-commerce platform featuring product listings, cart functionality, and a checkout process built using the MERN stack.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/Zahida21/E-Commerce-Website",
  },
   {
    name: "Password Manager",
    description:
      "A secure MERN Stack application that allows users to store, edit, and delete passwords using local storage and REST APIs.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
      { name: "Local Storage", color: "orange-text-gradient" },
    ],
    image: passwordManager,
    source_code_link: "https://github.com/Zahida21/PasswordManager",
  },
{
    name: "Weather Widget",
    description:
      "A React-based widget that displays real-time weather information using OpenWeather API with responsive design and geolocation support.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "API Integration", color: "green-text-gradient" },
      { name: "OpenWeather", color: "pink-text-gradient" },
    ],
    image: weatherwidget,
    source_code_link: "https://github.com/Zahida21/Weather-Widget",
  },
 {
    name: "Task Manager",
    description:
      "A responsive React application for managing daily tasks with features to add, update, delete, and mark tasks as completed using React hooks.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "State Management", color: "pink-text-gradient" },
    ],

    image: taskmanager,
    source_code_link: "https://github.com/Zahida21/To-do-list-in-React",
  },
  {
    name: "NextGen-Hire",
    description:
      "A MERN Stack platform that connects companies with fresh tech talent by streamlining the interview process and improving hiring efficiency.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
      { name: "Node.js", color: "yellow-text-gradient" },
    ],
    image: nextgen, 
    source_code_link: "https://github.com/Zahida21/NextGen-Hire",
  },
    {
  name: "Gemini AI Clone",
    description:
      "A front-end clone of Gemini AI, replicating its layout, interactions, and responsive design using React components and CSS animations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: gemini,
    source_code_link:
      "https://github.com/Zahida21/gemini-clone",
  },
  {
    name: "Amazon Clone",
    description:
      "A static clone of Amazon's landing page using HTML and CSS showcasing layout structuring and responsive design.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: amazon,
    source_code_link: "https://github.com/Zahida21/Clone-Series-UI-Replications",
  },
  {
    name: "Netflix Clone",
    description:
      "A replica of Netflix’s homepage UI, built using HTML and CSS with a focus on responsive layout and modern styling.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: netflix,
    source_code_link: "https://github.com/Zahida21/Clone-Series-UI-Replications",
  },
  {
    name: "X (Twitter) Clone",
    description:
      "A front-end UI clone of Twitter (X) built with modern CSS and layout practices, highlighting interactive UI components.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: twitter,
    source_code_link: "https://github.com/Zahida21/Clone-Series-UI-Replications",
  },

 {
  name: "Nike Landing Page Redesign",
  description:
    "Redesigned a modern, high-impact landing page for Nike focused on clean visuals, product highlights, and intuitive layout—crafted to boost brand engagement and user experience.",
  tags: [
    { name: "Figma", color: "blue-text-gradient" },
    { name: "Photoshop", color: "pink-text-gradient" },
    { name: "Illustrator", color: "yellow-text-gradient" },
  ],
  image: Nike, // Make sure to import this image
},
{
  name: "Food Delivery App UI",
  description:
    "Designed a mobile-friendly UI for a food delivery app with user-centric features, seamless navigation, and appealing visuals to enhance the ordering experience.",
  tags: [
    { name: "Figma", color: "blue-text-gradient" },
    { name: "Photoshop", color: "pink-text-gradient" },
    { name: "Illustrator", color: "yellow-text-gradient" },
  ],
  image: FoodApp, // Make sure to import this image
},
{
  name: "Landing Page Web Design",
  description:
    "Crafted a clean and responsive web landing page layout optimized for conversions, with compelling visual hierarchy, call-to-action sections, and brand consistency.",
  tags: [
    { name: "Figma", color: "blue-text-gradient" },
    { name: "Web Design", color: "green-text-gradient" },
    { name: "UI/UX", color: "pink-text-gradient" },
  ],
  image: landingpage, // Make sure to import this image
},
{
  name: "Food Ordering Website UI",
  description:
    "Developed an engaging web interface for a food ordering platform, featuring intuitive menus, user flows, and a visually pleasing structure for easy browsing and checkout.",
  tags: [
    { name: "Figma", color: "blue-text-gradient" },
    { name: "UI Design", color: "green-text-gradient" },
    { name: "UX Research", color: "pink-text-gradient" },
  ],
  image: PizzaHut, // Make sure to import this image
},

{
  name: "Minimal Business Poster",
  description:
    "A clean, professional business poster design created to convey brand messaging with minimal visual clutter. Ideal for corporate use, this design emphasizes clarity and modern aesthetics.",
  tags: [
    { name: "Photoshop", color: "blue-text-gradient" },
    { name: "Illustrator", color: "green-text-gradient" },
    { name: "Graphic Design", color: "pink-text-gradient" },
  ],
  image: minimalposter,
},
{
  name: "Letter Pad Design",
  description:
    "A sleek and professional letter pad layout designed for branding consistency across business correspondence. Combines elegance with readability using precise alignment and clean fonts.",
  tags: [
    { name: "Photoshop", color: "blue-text-gradient" },
    { name: "Illustrator", color: "green-text-gradient" },
    { name: "Stationery Design", color: "pink-text-gradient" },
  ],
  image: letterpad,
},
{
  name: "Button Badge Design",
  description:
    "Creative and visually striking button badge design suitable for events, branding, or giveaways. Features bold typography and a compact layout tailored for circular formats.",
  tags: [
    { name: "Photoshop", color: "blue-text-gradient" },
    { name: "Illustrator", color: "green-text-gradient" },
    { name: "Merch Design", color: "pink-text-gradient" },
  ],
  image: badge,
},
{
  name: "Coffee Poster Design",
  description:
    "An artistic and moody poster capturing the rich aroma and warmth of coffee—designed to evoke comfort and sophistication for café promotions or social media.",
  tags: [
    { name: "Photoshop", color: "pink-text-gradient" },
    { name: "Illustrator", color: "yellow-text-gradient" },
    { name: "Poster Design", color: "green-text-gradient" },
  ],
  image: CoffePoster, // Import this image
},
{
  name: "Savory Burger Showcase",
  description:
    "A visually striking poster highlighting a juicy, mouth-watering burger—crafted to grab attention and drive appetite for restaurant or delivery marketing.",
  tags: [
    { name: "Photoshop", color: "pink-text-gradient" },
    { name: "Food Design", color: "green-text-gradient" },
    { name: "Illustrator", color: "yellow-text-gradient" },
  ],
  image: BurgerPoster, // Import this image
},
{
  name: "T-Shirt Design",
  description:
    "Trendy and customized T-shirt design crafted for casual wear and merchandise. Balances artistic flair with print-ready formatting for apparel branding or personal expression.",
  tags: [
    { name: "Photoshop", color: "blue-text-gradient" },
    { name: "Illustrator", color: "green-text-gradient" },
    { name: "Apparel Design", color: "pink-text-gradient" },
  ],
  image: tshirt,
},

];


