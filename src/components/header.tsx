import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary">
              Home
            </a>
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}