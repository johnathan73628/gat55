import { ThemeProvider } from '@/components/theme/theme-provider';
import { Layout } from '@/components/layout';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;