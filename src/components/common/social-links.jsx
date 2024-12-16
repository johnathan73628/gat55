import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { Icon: Github, href: '#', label: 'GitHub' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Mail, href: '#', label: 'Email' },
];

export function SocialLinks({ className = '' }) {
  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}