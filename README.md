# Olakunle Hassan - Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional projects and skills as a Frontend Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Interactive Animations**: Framer Motion animations and scroll-triggered effects
- **Contact Form**: Integrated Formspree contact form with validation
- **Project Showcase**: Detailed project portfolio with live demos
- **Performance Optimized**: Fast loading with Vite build system
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Vitest** - Testing framework
- **PropTypes** - Runtime type checking

### Third-party Services
- **Formspree** - Contact form handling
- **TSParticles** - Particle effects
- **Aceternity UI** - UI components

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About/           # About section
│   ├── AceternityUI/    # UI components
│   ├── Contact/         # Contact form
│   ├── ErrorBoundary/   # Error handling
│   ├── Footer/          # Footer component
│   ├── Hero/            # Hero section
│   ├── HireMeModal/     # Modal component
│   ├── Loading/         # Loading component
│   ├── Navbar/          # Navigation
│   ├── Projects/        # Projects showcase
│   ├── reusable/        # Reusable components
│   └── test/            # Test files
├── constants/           # Application constants
│   ├── projects.js      # Project data
│   └── theme.js         # Theme configuration
├── hooks/               # Custom React hooks
│   ├── iconSlider.jsx   # Icon slider animation
│   ├── projectDetails.js # Project data (legacy)
│   ├── scrollView.jsx   # Scroll reveal animation
│   ├── typewriter.jsx   # Typewriter effect
│   ├── useScrollToTop.jsx # Scroll to top hook
│   └── useThemeSwitcher.jsx # Theme management
├── lib/                 # Utility functions
│   └── utils.js         # Helper functions
├── assets/              # Static assets
└── main.jsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kaylezy/olakunle-hassan-portfolio.git
cd olakunle-hassan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🎨 Customization

### Adding New Projects

1. Add project images to `src/assets/`
2. Update `src/constants/projects.js` with project details
3. The Projects component will automatically display new projects

### Modifying Theme

1. Update theme constants in `src/constants/theme.js`
2. Modify Tailwind configuration in `tailwind.config.js`
3. Update component styles as needed

### Contact Form

The contact form uses Formspree. To configure:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the `FORMSPREE_ENDPOINT` in `src/components/Contact/Contact.jsx`

## 🧪 Testing

Run tests with:
```bash
npm run test
```

The project uses Vitest for testing with React Testing Library.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Olakunle Hassan**
- Email: kunlex_042003@yahoo.com
- LinkedIn: [olakunle-hassan](https://www.linkedin.com/in/olakunle-hassan)
- GitHub: [kaylezy](https://github.com/kaylezy)
- Twitter: [@iam_kaylezy](https://twitter.com/iam_kaylezy)

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Formspree](https://formspree.io/) for form handling

---

⭐ Star this repository if you found it helpful!