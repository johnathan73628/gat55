import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket, Brain, Target, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000],
    },
  }),
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: -5,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const cards = [
  {
    icon: Brain,
    title: 'Problem Solving',
    description: 'Tackling complex challenges with innovative solutions and strategic thinking.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Building scalable applications with maintainable and efficient code structures.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on delivering high-quality results that exceed expectations.',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful and intuitive interfaces that delight users.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed, efficiency, and exceptional user experience.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Rapid development without compromising on quality or best practices.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      id="about" 
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/30"
      ref={containerRef}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        style={{ opacity, scale }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Passionate about creating exceptional digital experiences through innovative technology solutions
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-border/50 backdrop-blur-sm bg-background/80 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="mb-6 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <card.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>

                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}