'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";
import ThemeStore from "../store";


export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const localTheme = ThemeStore((state) => state.theme);

  return (
    <div
      className="flex-row justify-center w-screen overflow-hidden"
      style={
        {
          color: localTheme.foreground}
      }
      
    >
       <span className=" relative left-4 md:left-10 text-xs">26.january.1996</span>
       <span className=" absolute  right-4 md:right-10 text-xs">based in Hamburg</span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        ref={ref}
       className="flex flex-row justify-center md:justify-start items-center w-full">
       
        <div className="w-full md:w-6/6 !text-xl md:!text-3xl p-4 md:p-10  leading-8"
        style={{color: localTheme.foreground}}
        >
        <TypingEffect text="Heyy I'm Moses KM" /> <br />

        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        > My journey into web development and design is closely related to my artistic background. What drew me in was the opportunity to merge my creative instincts with functional development, enabling me to craft visually stunning and impactful designs.</motion.p>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 4 }}
        >I’m on a path of continuous learning, always exploring new technologies and tools to refine my skills and achieve remarkable results. My role as a team player allows me to contribute effectively and assist others in reaching their goals.</motion.p>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 5 }}
         className="">I’m excited about the prospect of bringing my unique blend of art and development to create exceptional final products.</motion.p> 
        <br />
        <a target="_blank"  href="https://www.linkedin.com/in/moses-ka-mohs/">

        <TypingEffect duration={100} text="Let’s team up for a project !"/>
        </a>
    </div>

        </motion.div>
      
    </div>
  );
}
