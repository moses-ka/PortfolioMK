'use client'
import React from 'react'
import ThemeStore from "../store";
import { motion } from 'framer-motion'
import { RiExternalLinkLine } from "react-icons/ri";


export default function Footer() {
    const localTheme = ThemeStore((state) => state.theme);

    return (
        <section className='h-96 w-full flex justify-center items-center p-10'
            style={{ backgroundColor: localTheme.background, color: localTheme.foreground }}
        >
            <div>
                <div>
                    <div className="group flex flex-col items-center justify-start h-full">
                        
                        <motion.button
                            className="relative px-6 py-3 font-semibold text-6xl md:text-9xl    rounded-2xl  "
                            style={{ backgroundColor: localTheme.background, color: localTheme?.foreground }}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            onClick={() => {
                                
                            }}
                        
                        >
                                <a className='inline' href="https://www.linkedin.com/in/moses-ka-mohs/">



                            Get In Touch

                        </a>
                        </motion.button>
                        <hr className={`w-full h-4 rounded-full  group-hover:w-10 transition-all  duration-1000  `}
                            color={localTheme.foreground} />
                    </div>
                    <div>
                        <div className='text-center text-xl md:text-2xl'>
                          <div className='flex justify-end items-center p-4 gap-2'>
                           <RiExternalLinkLine size={24} className='inline m-2 ' />
                          <a href="https://github.com/moses-ka" target="_blank" rel="noopener noreferrer">
                           GitHub</a>
                          </div>
                        </div>
                        <p className='text-xl md:text-2xl '>
                            Design and Developed by Moses KM
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}
