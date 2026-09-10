import { useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/layout/SEO';
import Preloader from './components/ui/Preloader';
import Starfield from './components/effects/Starfield';
import FlyingShip from './components/effects/FlyingShip';
import Moon from './components/effects/Moon';
import CustomCursor from './components/effects/CustomCursor';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { useViewportHeight } from './hooks/useViewportHeight';
import './styles/global.css';

function AppContent() {
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const finePointer = useMemo(
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    []
  );

  useViewportHeight();
  useGsapAnimations();

  return (
    <>
      <SEO />
      <Preloader />
      <Starfield reduced={reduced} />
      <Moon />
      <div id="progress" aria-hidden="true" />
      <CustomCursor reduced={reduced} finePointer={finePointer} />
      <Navigation />
      <FlyingShip reduced={reduced} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero reduced={reduced} finePointer={finePointer} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}
