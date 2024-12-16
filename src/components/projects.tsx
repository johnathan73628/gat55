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
      tags: ['HTML', 'CSS', 'JS',],
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
            <Card key={index} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
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
