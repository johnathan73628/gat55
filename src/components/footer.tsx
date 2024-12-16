import { Github, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 max-w-screen-xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          {/* Copyright Text */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gilbert Anthony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
