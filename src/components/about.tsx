import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Code2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-muted-foreground">
                  I write clean, maintainable, and efficient code following best
                  practices and industry standards.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Palette className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <p className="text-muted-foreground">
                  I create beautiful and intuitive user interfaces that provide
                  excellent user experiences.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">
                  I optimize applications for maximum speed and scalability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}