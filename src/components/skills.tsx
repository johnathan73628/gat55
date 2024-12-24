'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { useState, useRef } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
  { name: 'React', level: 90, description: 'Building efficient and interactive user interfaces', color: 'bg-red-500' },
  { name: 'TypeScript', level: 85, description: 'Developing type-safe and scalable applications', color: 'bg-blue-500' },
  { name: 'Node.js', level: 80, description: 'Creating robust backend services and APIs', color: 'bg-yellow-500' },
  { name: 'CSS/Tailwind', level: 85, description: 'Crafting responsive and beautiful designs', color: 'bg-green-500' },
  { name: 'Database Design', level: 75, description: 'Designing efficient and scalable data structures', color: 'bg-purple-500' },
  { name: 'DevOps', level: 70, description: 'Implementing CI/CD pipelines and cloud infrastructure', color: 'bg-pink-500' },
];

const getProgressColor = (level: number) => {
  if (level > 80) return 'bg-primary';
  if (level > 60) return 'bg-secondary';
  return 'bg-destructive';
};

function SkillCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group p-6 ${skill.color} shadow-2xl rounded-lg transition-all duration-300 hover:shadow-2xl transform perspective-1000 relative`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glossy reflective border effect (5% less gloss) */}
      <div className={`absolute inset-0 border-2 rounded-lg bg-gradient-to-tl from-transparent via-white/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Reduced shimmer intensity (5% less gloss) */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-tr from-white/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 animate-shimmer`}
        style={{
          backgroundSize: '375% 375%',  // Slightly smaller gradient size for less gloss
          animationDuration: '1.4s',     // Slightly faster to reduce visual intensity
        }}
      />

      {/* 3D Depth & Glow Effect (5% less gloss) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{
          boxShadow: '0 0 28px rgba(0, 255, 76, 0)', // Slightly less intense glow
        }}
      />

      {/* Soft inner glow (5% less gloss) */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-t from-white/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div style={{ transform: "translateZ(75px)" }}>
        <h3 className="text-2xl font-semibold mb-4 text-foreground">
          {skill.name}
        </h3>
        <div className="relative">
          <Progress
            value={skill.level}
            className="h-3 mb-2"
            indicatorClassName={`${getProgressColor(skill.level)} transition-all duration-500`}
          />
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary/20 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? `${skill.level}%` : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-muted-foreground text-sm font-medium">
          Proficiency: {skill.level}%
        </p>
      </div>
    </motion.div>
  );
}

export function Skills() {
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
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div>
                    <SkillCard skill={skill} index={index} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
