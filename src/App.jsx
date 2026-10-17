import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { QASection } from './components/QASection';
import { Education } from './components/Education';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference, default to dark for this portfolio
    const storedTheme = localStorage.getItem('theme');
    const shouldBeDark = storedTheme !== null ? storedTheme === 'dark' : true;
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-foreground">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <QASection />
        <Education />
        <Leadership />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
