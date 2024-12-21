import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import Loader from '@/components/Loader'; // Import the Loader component

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Set timeout for loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        {loading && <Loader />} {/* Show loader while loading */}
        
        <Header />
        <main>
          {!loading && (
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
