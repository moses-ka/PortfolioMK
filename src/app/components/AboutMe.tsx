"use client";
import React from 'react';
import { motion } from 'framer-motion';


export default function AboutMe() {
    return (
        <motion.div className="flex-row justify-center text-white w-screen  overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className="flex flex-row justify-center md:justify-start items-center w-full">
                <p className="w-full md:w-5/6 text-base md:text-4xl p-4 md:p-10 glitch-container leading-8">
                     Heyy <span className="glitch-text effect-1" data-text="I'm Moses KM.">I'm Moses KM.</span>
                    <br /> As a creative problem solver, I thrive on turning <span className="glitch-text effect-1" data-text="challenges ">challenges</span> into <span className="glitch-text effect-1" data-text="opportunities. ">opportunities.</span>
                    <br />                    
                    Web Design and  Development are not just professions for me; they are my <span className="glitch-text  text-blue-400 effect-2" data-text="canvas.">canvas</span> where <span className="glitch-text effect-1" data-text="colors">colors</span> meet <span className="glitch-text effect-2" data-text="code,">
                        code,</span> blending functionality with aesthetics. <br />
                    My work is driven by a passion for creating seamless digital experiences <br /> that leave a 
                    <span className="glitch-text effect-1" data-text="lasting impression.">lasting impression.</span>
                </p>
            </div>
        </motion.div>
    );
}
