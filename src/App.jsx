/**
 * Main App Component
 *
 * This is the root component of the portfolio application.
 * It manages the overall layout, theme state, and renders all main sections.
 *
 * @component
 * @returns {JSX.Element} The main application component
 */

import { Suspense, lazy } from 'react';

// Components
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Loading from './components/Loading/Loading';

// Lazy loaded components
const Hero = lazy(() => import('./components/Hero/Hero'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));

// Skeleton components
import {
  HeroSkeleton,
  AboutSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
  SkeletonWrapper,
} from './components/Skeletons';

// Hooks
import ScrollReveal from './hooks/scrollView';
import useThemeSwitcher from './hooks/useThemeSwitcher';

// Inner App component
const AppContent = () => {
  const systemTheme = useThemeSwitcher();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="h-16 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
          }
        >
          <Navbar />
        </Suspense>
        <Loading />

        <main>
          <ScrollReveal>
            <SkeletonWrapper
              SkeletonComponent={HeroSkeleton}
              skeletonDelay={600}
            >
              <Suspense fallback={<HeroSkeleton />}>
                <Hero />
              </Suspense>
            </SkeletonWrapper>
          </ScrollReveal>

          <ScrollReveal>
            <SkeletonWrapper
              SkeletonComponent={AboutSkeleton}
              skeletonDelay={800}
            >
              <Suspense fallback={<AboutSkeleton />}>
                <About />
              </Suspense>
            </SkeletonWrapper>
          </ScrollReveal>

          <ScrollReveal>
            <SkeletonWrapper
              SkeletonComponent={ProjectsSkeleton}
              skeletonDelay={1000}
            >
              <Suspense fallback={<ProjectsSkeleton />}>
                <Projects />
              </Suspense>
            </SkeletonWrapper>
          </ScrollReveal>

          <ScrollReveal>
            <SkeletonWrapper
              SkeletonComponent={ContactSkeleton}
              skeletonDelay={700}
            >
              <Suspense fallback={<ContactSkeleton />}>
                <Contact />
              </Suspense>
            </SkeletonWrapper>
          </ScrollReveal>
        </main>

        <ScrollReveal>
          <Suspense
            fallback={
              <div className="h-32 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            }
          >
            <Footer />
          </Suspense>
        </ScrollReveal>
      </ErrorBoundary>
    </div>
  );
};

// Main App component
function App() {
  return <AppContent />;
}

export default App;
