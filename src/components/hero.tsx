"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const socialButton = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const gradientBg = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const Aurora = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
        fill="url(#aurora-gradient-1)"
        initial={{ d: 'M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z' }}
        animate={{
          d: [
            'M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z',
            'M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z',
            'M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'easeInOut',
        }}
      />
      <motion.path
        d="M0,600 Q250,500 500,600 T1000,600 L1000,1000 L0,1000 Z"
        fill="url(#aurora-gradient-2)"
        initial={{ d: 'M0,600 Q250,500 500,600 T1000,600 L1000,1000 L0,1000 Z' }}
        animate={{
          d: [
            'M0,600 Q250,500 500,600 T1000,600 L1000,1000 L0,1000 Z',
            'M0,600 Q250,700 500,600 T1000,600 L1000,1000 L0,1000 Z',
            'M0,600 Q250,500 500,600 T1000,600 L1000,1000 L0,1000 Z',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: 'easeInOut',
        }}
      />
      <defs>
        <linearGradient id="aurora-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
          <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
        </linearGradient>
        <linearGradient id="aurora-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <Aurora />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div variants={item} className="relative">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Gilbert Anthony
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A passionate frontend developer crafting beautiful and functional web
            experiences. Specialized in React, Node.js, and modern web technologies.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex gap-4">
            <Button
              className="group relative overflow-hidden transition-all duration-300"
              size="lg"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden transition-all duration-300 border-2"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-6">
            {[{ icon: Github, href: '#' }, { icon: Linkedin, href: '#' }, { icon: Mail, href: '#' }].map(
              (social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialButton}
                  initial="rest"
                  whileHover="hover"
                  className="relative p-2 rounded-full bg-background/10 backdrop-blur-sm border border-border/50 transition-colors hover:border-primary/50"
                >
                  <social.icon className="h-6 w-6 transition-colors hover:text-primary" />
                </motion.a>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Background without rotation */}
      <motion.div
        variants={gradientBg}
        animate="animate"
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-purple-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </motion.div>
    </section>
  );
}
