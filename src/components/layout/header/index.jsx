import { Navigation } from './navigation';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Header() {
  const { isScrolled } = useHeaderScroll();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}