'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function Typewriter({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetween = 2000 
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-cyan font-mono text-xl md:text-2xl lg:text-3xl"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-cyan ml-1"
      >
        |
      </motion.span>
    </span>
  );
}
