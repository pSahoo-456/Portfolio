'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ 
  value, 
  suffix = '', 
  label, 
  duration = 2000 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(progress * value);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400 font-mono">
        {label}
      </div>
    </motion.div>
  );
}
