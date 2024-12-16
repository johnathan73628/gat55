import { Code2, Palette, Rocket } from 'lucide-react';
import { SectionTitle } from '@/components/common/section-title';
import { FeatureCard } from './feature-card';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'I write clean, maintainable, and efficient code following best practices and industry standards.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description:
      'I create beautiful and intuitive user interfaces that provide excellent user experiences.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'I optimize applications for maximum speed and scalability.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}