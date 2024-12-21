import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS/Tailwind', level: 85 },
  { name: 'Database Design', level: 75 },
  { name: 'DevOps', level: 70 },
];

export function Skills() {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width) * 2 - 1; // Normalize [-1, 1]
    const y = ((clientY - top) / height) * 2 - 1; // Normalize [-1, 1]

    currentTarget.style.transform = `rotateX(${y * -15}deg) rotateY(${x * 15}deg)`;
  };

  const resetTransform = (e) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50 dark:bg-muted/80">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-primary">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group p-4 bg-white dark:bg-black shadow-lg rounded-lg perspective-1000 transition-colors duration-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTransform}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-center text-foreground dark:text-primary">
                {skill.name}
              </h3>
              <Progress
                value={skill.level}
                className="h-2 bg-muted-foreground dark:bg-muted/60 mb-4"
              />
              <p className="text-muted-foreground dark:text-gray-400 text-center">
                Proficiency: {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
