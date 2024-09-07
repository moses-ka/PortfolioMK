'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";


export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="flex-row justify-center text-white w-screen overflow-hidden"
      
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        ref={ref}
       className="flex flex-row justify-center md:justify-start items-center w-full">
        <div className="w-full md:w-6/6 !text-2xl md:text-3xl p-4 md:p-10 glitch-container leading-8">
        <TypingEffect /> <br />
        <p>My journey into web development and design is deeply rooted in my artistic background. What drew me in was the opportunity to merge my creative instincts with functional development, enabling me to craft visually stunning and impactful designs.</p>
        <p>I’m on a path of continuous learning, always exploring new technologies and tools to refine my skills and achieve remarkable results. My role as a team player allows me to contribute effectively and assist others in reaching their goals.</p>
        <p className="cta">I’m excited about the prospect of bringing my unique blend of art and development to create exceptional final products. Let’s team up for a project!</p>
    </div>

        </motion.div>
      
    </div>
  );
}
