import EasyServe from "../assets/easyserve.jpg";
import RenergyHub from "../assets/renergyhub.jpg";
import Upgrade from "../assets/upgrade.jpg";
import UrlShortening from "../assets/UrlShorteningApp.jpg";
import GitRepoVue from "../assets/GitRepoVue.jpg";
import Crowdfunding from "../assets/crowdfund.jpg";

export const projects = [
  {
    id: 1,
    name: "EasyServe",
    description:
      "Our platform is a revolutionary web application that seamlessly connects clients with skilled artisans. Whether you need a handyman, a tailor, or a tech expert, our solution makes it easy to find and collaborate with the perfect artisan for your needs.",
    technologies: "NextJs with typescrit and tailwindcss",
    image: EasyServe,
    github: "https://github.com/EasyServe3/EasyserveApp_PWA",
    demo: "https://www.easyserve.com.ng/",
  },
  {
    id: 2,
    name: "RenergyHub",
    description:
      "Renergy Hub is a digital marketplace that connects sellers and buyers of renewable energy products, like solar panels, batteries, and wind turbines, facilitating secure transactions, reliable deliveries, and seamless purchasing.",
    technologies: "Vue Js and Javascript",
    image: RenergyHub,
    github:
      "https://github.com/InternPulse/renergy-hub-frontend/tree/feature-base",
    demo: "https://www.renergyhub.com.ng//",
  },
  {
    id: 3,
    name: "Upgrade Landing Page",
    description:
      "An elegant and modern landing page for a fintech platform, designed to showcase financial services and products.",
    technologies: "React Js and Tailwindcss",
    image: Upgrade,
    github: "https://github.com/kaylezy/FinTech-Landing-Page",
    demo: "https://fintech-landingpage.vercel.app/",
  },
  {
    id: 4,
    name: "CutFitt_URL",
    description:
      "It is a Url Shortening service that allows you to shorten any long Url to a manageable and user-friendly link. ",
    technologies: "NextJs with typescrit and tailwindcss",
    image: UrlShortening,
    github: "https://github.com/kaylezy/CutFitt_URL/",
    demo: "https://cutfitt-url.vercel.app/",
  },
  {
    id: 5,
    name: "Vue GitRepo",
    description:
      "A web application created to fetch the github repositories of users, built with vuejs",
    technologies: "Vue Js and Javascript",
    image: GitRepoVue,
    github: "https://github.com/kaylezy/vue-github-repo-fetch",
    demo: "https://vue-github-repo-fetch.netlify.app/",
  },
  {
    id: 6,
    name: "Crowdfunding Landing Page",
    description:
      "This project is a landing page for a crowdfunding platform, from frontend mentor.",
    technologies: "React Js and Tailwindcss",
    image: Crowdfunding,
    github: "https://github.com/kaylezy/crowdfunding",
    demo: "https://crowdfunding-lyart-beta.vercel.app/",
  },
];

export const projectDetails = {
  1: {
    description: [
      "Our platform is a revolutionary web application that seamlessly connects clients with skilled artisans. Whether you need a handyman, a tailor, or a tech expert, our solution makes it easy to find and collaborate with the perfect artisan for your needs.",
      "\nOur service is designed to simplify the process of discovering, hiring, and managing artisans through a user-friendly interface. Clients can effortlessly search for artisans based on their specific requirements and view detailed profiles showcasing their skills, experience, and reviews. Artisans can showcase their portfolios, receive job requests, and manage their engagements all in one place.",
      "\nOur platform is built with security and scalability in mind, ensuring that all transactions and communications are safe and reliable. We are committed to making the process of finding and hiring artisans as seamless and efficient as possible.",
    ],

    features: [
      "User-friendly interface for clients and artisans,",
      "\nSearch functionality to find artisans by location and skill,",
      "\nDetailed artisan profiles with reviews and ratings,",
      "\nJob request system for clients to connect with artisans,",
      "\nPortfolio showcase for artisans to display their work,",
      "\nEngagement management tools for artisans to track jobs and payments.",
    ],
  },
  2: {
    description: [
      "Renergy Hub is a digital marketplace that connects sellers and buyers of renewable energy products, like solar panels, batteries, and wind turbines, facilitating secure transactions, reliable deliveries, and seamless purchasing. The platform empowers businesses and consumers to adopt sustainable energy solutions more easily by centralizing the sourcing, payment, and distribution of eco-friendly products. This project was a huge learning curve for me, working in collaboration with Designers, Product Managers, and Developers. From crafting user flows to brainstorming wireframes, setting up a design system, and ultimately HiFi design, it was an immersive and enriching experience.",
    ],
    features: [
      "A modern, intuitive design that streamlines the shopping experience,",
      "\nA robust vendor portal for easy product uploads and management,",
      "\nA comprehensive catalog showcasing diverse renewable energy solutions,",
      "\nA seamless checkout process ensuring hassle-free transactions.",
    ],
  },
  3: {
    description:
      "An elegant and modern landing page for a fintech platform, designed to showcase financial services and products. The page features smooth animations, responsive design, and optimized performance. It includes interactive sections for service highlights, user testimonials, and call-to-action elements. The design follows current fintech industry trends while maintaining accessibility standards.",
    feature: [
      "Responsive design optimized for all devices,",
      "\nInteractive elements for engaging user experience,",
      "\nSmooth animations and transitions for modern look and feel,",
      "\nCall-to-action sections for user conversion and engagement.",
    ],
    features: [
      "Responsive design optimized for all devices,",
      "\nInteractive elements for engaging user experience,",
      "\nSmooth animations and transitions for modern look and feel,",
      "\nCall-to-action sections for user conversion and engagement.",
    ],
  },
  4: {
    description:
      "CutFitt_URL is a powerful URL shortening service built with Next.js and TypeScript. It offers advanced features like custom URL aliases, QR code generation, and detailed analytics. The application includes user authentication, allowing users to manage their shortened links. CutFitt_URL is your all-in-one solution for managing and optimizing your URLs, whether you're an individual, a small business, or a large enterprise. Experience the convenience and efficiency of CutFitt_URL and take control of your link management today",
    features: [
      "Custom URL aliases for personalized short links,",
      "\nQR code generation for easy sharing and tracking,",
      "\nDetailed analytics to monitor link performance and engagement,",
      "\nUser authentication for secure link management and tracking.",
    ],
  },
  5: {
    description:
      "A Vue.js-based GitHub repository explorer that offers an elegant way to browse and search through GitHub repositories. The application features advanced filtering options, repository statistics visualization, and a clean, intuitive interface. It includes real-time search functionality, language-based filtering, and detailed repository information display. The app is optimized for both desktop and mobile use.",
    features: [
      "Real-time repository search functionality,",
      "\nLanguage-based repository filtering,",
      "\nDetailed repository information display,",
      "\nResponsive design optimized for all devices.",
    ],
  },
  6: {
    description:
      "A modern crowdfunding platform landing page built with React and Tailwind CSS. The page showcases various crowdfunding campaigns, features interactive pledge components, and includes dynamic progress tracking. It implements modern design principles with smooth animations and transitions. The layout is fully responsive and optimized for all screen sizes, providing an engaging user experience.",
    features: [
      "Interactive pledge components for user engagement,",
      "\nDynamic progress tracking for campaign updates,",
      "\nModern design with smooth animations and transitions,",
      "\nFully responsive layout for all devices.",
    ],
  },
};
