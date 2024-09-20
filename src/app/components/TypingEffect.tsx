'use client';
import  { useState, useEffect,useRef } from 'react';
import { useInView,motion } from 'framer-motion';

type TypingEffectProps = {
  text: string;
  duration ?: number;
};

const TypingEffect = (props: TypingEffectProps) => {
  const { text,duration } = props;
  const textToType = text
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, duration? duration:100); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex,animate]);
  return (
    <div className="typeEffect">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
       ref={ref}
        className=" !text-2xl md:!text-4xl   "
        >{typedText}</motion.p>
    </div>
  );
};

export default TypingEffect;