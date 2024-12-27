import { useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'Website to Teach Coding',
      description:
        'A platform to teach coding concepts and programming languages interactively.',
      image: '/gat55/assets/1.jpg',
      tags: ['HTML', 'CSS', 'JS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Data Analysis',
      description:
        'Analyzed weather data to provide insights on patterns and forecasts.',
      image: '/gat55/assets/2.jpg',
      tags: ['Python', 'Data Analysis', 'Pandas', 'Folium'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Mobile App for Analytics',
      description:
        'A mobile-first application that allows users to track and analyze various metrics.',
      image: '/gat55/assets/3.jpg',
      tags: ['React Native', 'Firebase', 'Analytics'],
      github: '#',
      demo: '#',
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2, // Increase duration for smoother animation
            delay: index * 0.1,
            ease: 'expo.out', // Use a gentler easing function
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              scrub: 1, // Synchronizes animation with scroll
            },
          }
        );
      }
    });
  }, []);
  

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="overflow-hidden group relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="transition-colors duration-300 group-hover:bg-background/95">
                <CardTitle className="transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="transition-colors duration-300 group-hover:bg-background/95">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 rounded-md text-sm transition-all duration-300 hover:bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between transition-colors duration-300 group-hover:bg-background/95">
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
a