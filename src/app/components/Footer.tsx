'use client'
import React from 'react'
import ThemeStore from "../store";
import { motion } from 'framer-motion'


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
                        <p className='text-right text-xl md:text-2xl'>
                            &copy; 2024 Moses KM
                        </p>
                        <p className='text-xl md:text-2xl '>
                            Design and Developed by Moses KM
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}
