'use client'

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';

const skills = [
  { name: 'React', level: 90, description: 'Building efficient and interactive user interfaces' },
  { name: 'TypeScript', level: 85, description: 'Developing type-safe and scalable applications' },
  { name: 'Node.js', level: 80, description: 'Creating robust backend services and APIs' },
  { name: 'CSS/Tailwind', level: 85, description: 'Crafting responsive and beautiful designs' },
  { name: 'Database Design', level: 75, description: 'Designing efficient and scalable data structures' },
  { name: 'DevOps', level: 70, description: 'Implementing CI/CD pipelines and cloud infrastructure' },
];

const getProgressColor = (level: number) => {
  if (level > 80) return 'bg-primary';
  if (level > 60) return 'bg-secondary';
  return 'bg-destructive';
};

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <TooltipProvider>
      <section id="skills" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Tooltip key={index} content={skill.description}>
                <motion.div
                  className="group p-6 bg-card shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {skill.name}
                  </h3>
                  <div className="relative">
                    <Progress
                      value={skill.level}
                      className={`h-3 mb-2 ${getProgressColor(skill.level)}`}
                    />
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-primary/20 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Proficiency: {skill.level}%
                  </p>
                </motion.div>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}

