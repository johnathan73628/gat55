import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}