import { SocialLinks } from '@/components/common/social-links';

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <SocialLinks className="mb-4" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Gilbert Anthony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}