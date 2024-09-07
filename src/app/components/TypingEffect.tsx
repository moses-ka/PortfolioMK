'use client';
import  { useState, useEffect,useRef } from 'react';
import { useInView,motion } from 'framer-motion';

const TypingEffect = () => {
  const textToType = "Hello, I'm Moses KM";
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <div className="typeEffect">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
       ref={ref}
        className=" text-2xl md:text-4xl   "
        >{typedText}</motion.p>
    </div>
  );
};

export default TypingEffect;