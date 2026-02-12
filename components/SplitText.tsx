import React from 'react';
import { motion, Variants } from 'framer-motion';

import { ReactNode } from 'react';

interface SplitTextProps {
  children: ReactNode;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ children, className = '' }) => {
  // If children is a string, split into letters. If not, wrap as a single span.
  let letters: ReactNode[];
  if (typeof children === 'string') {
    letters = children.split('');
  } else {
    // For ReactNode, wrap as a single span for animation
    letters = [children];
  }

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className + " font-mono text-center text-6xl font-bold tracking-wider text-gray-300 md:text-8xl"}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {typeof letter === 'string' ? (letter === ' ' ? '\u00A0' : letter) : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default SplitText;