import React from 'react';
import { motion, Variants } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  blur?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  blur = true
}) => {
  const yOffset = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xOffset = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;
  
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      filter: blur ? 'blur(12px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-5%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
