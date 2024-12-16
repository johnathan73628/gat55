import { Progress } from '@/components/ui/progress';

export function Skills() {
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
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}