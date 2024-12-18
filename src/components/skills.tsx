import { useInView } from 'react-intersection-observer';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animations when 10% of the element is visible
    triggerOnce: true, // Run the animation only once
  });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'Database Design', level: 75 },
    { name: 'DevOps', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div ref={ref} className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 opacity-0 translate-y-4 ${
                inView ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{
                transitionDelay: `${index * 100}ms`, // Staggered animation
              }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium group-hover:text-blue-500 transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-muted-foreground group-hover:text-blue-500 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
              <Progress
                value={inView ? skill.level : 0} // Grow the bar when visible
                className={`h-2 transition-all duration-1000 group-hover:scale-105 group-hover:bg-blue-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

