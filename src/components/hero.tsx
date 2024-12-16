import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Gilbert Anthony
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            A passionate frontend developer crafting beautiful and functional web
            experiences. Specialized in React, Node.js, and modern web technologies.
          </p>
          <div className="mt-8 flex gap-4">
            <Button>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>
          <div className="mt-8 flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}