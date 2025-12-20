import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const springConfig = { damping: 28, stiffness: 250, mass: 0.7 };

const CustomCursor: React.FC = () => {
  const [variant, setVariant] = useState('default');

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const width = useSpring(24, springConfig);
  const height = useSpring(24, springConfig);
  const borderRadius = useSpring('50%', springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target;

      if (!(target instanceof Element)) {
        setVariant('default');
        const defaultSize = 24;
        x.set(e.clientX - defaultSize / 2);
        y.set(e.clientY - defaultSize / 2);
        width.set(defaultSize);
        height.set(defaultSize);
        borderRadius.set('50%');
        return;
      }

      const hoverTarget = target.closest('[data-cursor-hover]');
      const isTextElement = target.closest('p, h2, h3') || (target.tagName === 'SPAN' && !target.closest('h1'));


      if (hoverTarget) {
        setVariant('hover');
        const rect = hoverTarget.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(hoverTarget);
        const padding = 8;
        
        x.set(rect.left - padding / 2);
        y.set(rect.top - padding / 2);
        width.set(rect.width + padding);
        height.set(rect.height + padding);
        borderRadius.set(computedStyle.borderRadius || '8px');
      } else if (isTextElement) {
        setVariant('text');
        const caretHeight = 24;
        const caretWidth = 2;
        x.set(e.clientX - caretWidth / 2);
        y.set(e.clientY - caretHeight / 2);
        width.set(caretWidth);
        height.set(caretHeight);
        borderRadius.set('1px');
      }
       else {
        setVariant('default');
        const defaultSize = 24;
        x.set(e.clientX - defaultSize / 2);
        y.set(e.clientY - defaultSize / 2);
        width.set(defaultSize);
        height.set(defaultSize);
        borderRadius.set('50%');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, width, height, borderRadius]);

  const cursorVariants = {
    default: {
      backgroundColor: '#ef444488',
      mixBlendMode: 'difference',
    },
    hover: {
      backgroundColor: '#ef444444',
      mixBlendMode: 'difference',
    },
    text: {
      backgroundColor: '#ef4444dd',
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={variant}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        x,
        y,
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export default CustomCursor;