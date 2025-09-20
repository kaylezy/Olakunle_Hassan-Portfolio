/**
 * Project Data Constants
 * 
 * Centralized configuration for portfolio projects and their details.
 * This file contains all project information, images, and metadata.
 */

// Project images
import EasyServe from '../assets/easyserve.jpg';
import RenergyHub from '../assets/renergyhub.jpg';
import Upgrade from '../assets/upgrade.jpg';
import UrlShortening from '../assets/UrlShorteningApp.jpg';
import GitRepoVue from '../assets/GitRepoVue.jpg';
import Crowdfunding from '../assets/crowdfund.jpg';

// Social links configuration
export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: 'github',
    url: 'https://github.com/kaylezy',
    label: 'GitHub Profile',
  },
  {
    id: 2,
    icon: 'twitter',
    url: 'https://twitter.com/iam_kaylezy',
    label: 'Twitter Profile',
  },
  {
    id: 3,
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/olakunle-hassan',
    label: 'LinkedIn Profile',
  },
];

// Contact information
export const CONTACT_INFO = {
  email: 'kunlex_042003@yahoo.com',
  phone: '+234 802 9732 493',
  location: 'Abule-Egba, Lagos, Nigeria',
};

// Technology stack
export const TECHNOLOGIES = {
  frontend: [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
  ],
  tools: [
    'VSCode Editor',
    'Git',
    'GitHub',
    'Vite',
    'Figma',
    'Sublime Text Editor',
    'CodeSandBox',
    'CodePen',
  ],
};

// Projects data
export const PROJECTS = [
  {
    id: 1,
    name: 'EasyServe',
    description: 'A revolutionary web application that seamlessly connects clients with skilled artisans. Whether you need a handyman, a tailor, or a tech expert, our solution makes it easy to find and collaborate with the perfect artisan for your needs.',
    technologies: 'NextJs with TypeScript and Tailwind CSS',
    image: EasyServe,
    github: 'https://github.com/EasyServe3/EasyserveApp_PWA',
    demo: 'https://www.easyserve.com.ng/',
    category: 'Full Stack',
    status: 'Live',
  },
  {
    id: 2,
    name: 'RenergyHub',
    description: 'A digital marketplace that connects sellers and buyers of renewable energy products, like solar panels, batteries, and wind turbines, facilitating secure transactions, reliable deliveries, and seamless purchasing.',
    technologies: 'Vue.js and JavaScript',
    image: RenergyHub,
    github: 'https://github.com/InternPulse/renergy-hub-frontend/tree/feature-base',
    demo: 'https://www.renergyhub.com.ng/',
    category: 'Frontend',
    status: 'Live',
  },
  {
    id: 3,
    name: 'Upgrade Landing Page',
    description: 'An elegant and modern landing page for a fintech platform, designed to showcase financial services and products with smooth animations and responsive design.',
    technologies: 'React.js and Tailwind CSS',
    image: Upgrade,
    github: 'https://github.com/kaylezy/FinTech-Landing-Page',
    demo: 'https://fintech-landingpage.vercel.app/',
    category: 'Frontend',
    status: 'Live',
  },
  {
    id: 4,
    name: 'CutFitt_URL',
    description: 'A powerful URL shortening service that allows you to shorten any long URL to a manageable and user-friendly link with advanced features like custom aliases and analytics.',
    technologies: 'Next.js with TypeScript and Tailwind CSS',
    image: UrlShortening,
    github: 'https://github.com/kaylezy/CutFitt_URL/',
    demo: 'https://cutfitt-url.vercel.app/',
    category: 'Full Stack',
    status: 'Live',
  },
  {
    id: 5,
    name: 'Vue GitRepo',
    description: 'A web application created to fetch GitHub repositories of users, built with Vue.js featuring advanced filtering and search functionality.',
    technologies: 'Vue.js and JavaScript',
    image: GitRepoVue,
    github: 'https://github.com/kaylezy/vue-github-repo-fetch',
    demo: 'https://vue-github-repo-fetch.netlify.app/',
    category: 'Frontend',
    status: 'Live',
  },
  {
    id: 6,
    name: 'Crowdfunding Landing Page',
    description: 'A modern crowdfunding platform landing page built with React and Tailwind CSS, featuring interactive pledge components and dynamic progress tracking.',
    technologies: 'React.js and Tailwind CSS',
    image: Crowdfunding,
    github: 'https://github.com/kaylezy/crowdfunding',
    demo: 'https://crowdfunding-lyart-beta.vercel.app/',
    category: 'Frontend',
    status: 'Live',
  },
];

// Detailed project information
export const PROJECT_DETAILS = {
  1: {
    description: [
      'Our platform is a revolutionary web application that seamlessly connects clients with skilled artisans. Whether you need a handyman, a tailor, or a tech expert, our solution makes it easy to find and collaborate with the perfect artisan for your needs.',
      'Our service is designed to simplify the process of discovering, hiring, and managing artisans through a user-friendly interface. Clients can effortlessly search for artisans based on their specific requirements and view detailed profiles showcasing their skills, experience, and reviews.',
      'Our platform is built with security and scalability in mind, ensuring that all transactions and communications are safe and reliable. We are committed to making the process of finding and hiring artisans as seamless and efficient as possible.',
    ],
    features: [
      'User-friendly interface for clients and artisans',
      'Search functionality to find artisans by location and skill',
      'Detailed artisan profiles with reviews and ratings',
      'Job request system for clients to connect with artisans',
      'Portfolio showcase for artisans to display their work',
      'Engagement management tools for artisans to track jobs and payments',
    ],
  },
  2: {
    description: [
      'Renergy Hub is a digital marketplace that connects sellers and buyers of renewable energy products, like solar panels, batteries, and wind turbines, facilitating secure transactions, reliable deliveries, and seamless purchasing.',
      'The platform empowers businesses and consumers to adopt sustainable energy solutions more easily by centralizing the sourcing, payment, and distribution of eco-friendly products.',
      'This project was a huge learning curve for me, working in collaboration with Designers, Product Managers, and Developers. From crafting user flows to brainstorming wireframes, setting up a design system, and ultimately HiFi design, it was an immersive and enriching experience.',
    ],
    features: [
      'A modern, intuitive design that streamlines the shopping experience',
      'A robust vendor portal for easy product uploads and management',
      'A comprehensive catalog showcasing diverse renewable energy solutions',
      'A seamless checkout process ensuring hassle-free transactions',
    ],
  },
  3: {
    description: [
      'An elegant and modern landing page for a fintech platform, designed to showcase financial services and products. The page features smooth animations, responsive design, and optimized performance.',
      'It includes interactive sections for service highlights, user testimonials, and call-to-action elements. The design follows current fintech industry trends while maintaining accessibility standards.',
    ],
    features: [
      'Responsive design optimized for all devices',
      'Interactive elements for engaging user experience',
      'Smooth animations and transitions for modern look and feel',
      'Call-to-action sections for user conversion and engagement',
    ],
  },
  4: {
    description: [
      'CutFitt_URL is a powerful URL shortening service built with Next.js and TypeScript. It offers advanced features like custom URL aliases, QR code generation, and detailed analytics.',
      'The application includes user authentication, allowing users to manage their shortened links. CutFitt_URL is your all-in-one solution for managing and optimizing your URLs, whether you\'re an individual, a small business, or a large enterprise.',
    ],
    features: [
      'Custom URL aliases for personalized short links',
      'QR code generation for easy sharing and tracking',
      'Detailed analytics to monitor link performance and engagement',
      'User authentication for secure link management and tracking',
    ],
  },
  5: {
    description: [
      'A Vue.js-based GitHub repository explorer that offers an elegant way to browse and search through GitHub repositories. The application features advanced filtering options, repository statistics visualization, and a clean, intuitive interface.',
      'It includes real-time search functionality, language-based filtering, and detailed repository information display. The app is optimized for both desktop and mobile use.',
    ],
    features: [
      'Real-time repository search functionality',
      'Language-based repository filtering',
      'Detailed repository information display',
      'Responsive design optimized for all devices',
    ],
  },
  6: {
    description: [
      'A modern crowdfunding platform landing page built with React and Tailwind CSS. The page showcases various crowdfunding campaigns, features interactive pledge components, and includes dynamic progress tracking.',
      'It implements modern design principles with smooth animations and transitions. The layout is fully responsive and optimized for all screen sizes, providing an engaging user experience.',
    ],
    features: [
      'Interactive pledge components for user engagement',
      'Dynamic progress tracking for campaign updates',
      'Modern design with smooth animations and transitions',
      'Fully responsive layout for all devices',
    ],
  },
};
