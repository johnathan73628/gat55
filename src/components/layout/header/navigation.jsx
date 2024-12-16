const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map(({ href, label }) => (
        <a key={href} href={href} className="hover:text-primary">
          {label}
        </a>
      ))}
    </nav>
  );
}