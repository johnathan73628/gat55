import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  hover: {
    rotateY: 15,
    rotateX: -10,
    scale: 1.05,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 150,
    },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
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
              description:
                'I specialize in optimizing applications for maximum speed, scalability, and performance.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group perspective-1000"
            >
              <Card
                className="overflow-hidden relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <item.icon className="h-12 w-12 mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Background Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
