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

export function Projects() {
  const projects = [
    {
      title: 'Website to Teach Coding',
      description:
        'A platform to teach coding concepts and programming languages interactively.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      tags: ['HTML', 'CSS', 'JS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Data Analysis',
      description:
        'Analyzed weather data to provide insights on patterns and forecasts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tags: ['Python', 'Data Analysis', 'Pandas', 'Matplotlib'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Mobile App for Analytics',
      description:
        'A mobile-first application that allows users to track and analyze various metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['React Native', 'Firebase', 'Analytics'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
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