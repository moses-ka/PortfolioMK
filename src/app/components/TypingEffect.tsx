'use client';
import { useState, useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

type TypingEffectProps = {
  text: string;
  duration?: number;
};

const TypingEffect = (props: TypingEffectProps) => {
  const { text, duration } = props;
  const textToType = text;
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return; // Don't run if the element is not in view

    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Clear interval once done typing
      }
    }, duration ? duration : 100); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval); // Ensure interval cleanup
    };
  }, [currentIndex, textToType, isInView, duration]); // Add dependencies for proper re-render

  return (
    <div className="typeEffect">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        ref={ref}
        className="!text-2xl md:!text-4xl"
      >
        {typedText}
      </motion.p>
    </div>
  );
};

export default TypingEffect;
