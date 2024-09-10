'use client';
import Image from 'next/image';
import project2 from '../../assets/project2.png';
import project from '../../assets/project.png';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import project1small from '../../assets/project1small.png';
import project2small from '../../assets/project2small.png';
import useStore from '../store';
export default function Projects() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const localTheme = useStore((state) => state.theme);

  useEffect(() => {
    // Set screen width on the client side
    setScreenWidth(window.innerWidth);

    // Optional: update on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="projects list" className="flex flex-col justify-center items-center w-full h-auto p-4">
      <div ref={ref1} id="project1" className="flex flex-col justify-center items-center w-full p-4">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: isInView1 ? 0 : -1000 }}
          transition={{ duration: 1 }}
          className="relative top-36 right-24 md:top-36 md:right-44 z-50"
        >
          <Image
            width={100}
            height={100}
            className="!max-w-[340px] !max-h-[100px]"
            alt="Figma Logo"
            src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
          />
        </motion.div>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: isInView1 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          className="relative top-10 left-24 md:top-10 md:left-44 z-50"
        >
          <Image
           className={localTheme.dark? "invert !max-w-[340px] !max-h-[100px] index-z-10 ": "!max-w-[340px] !max-h-[100px] index-z-10" }
            width={100}
            height={100}
            
            alt="Next JS Skill Logo"
            src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView1 ? 1 : 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={screenWidth > 720 ? project : project1small}
            alt="project1 photo"
            width={screenWidth > 720 ? 800 : 400}
            height={screenWidth > 720 ? 600 : 600}
            priority
          />
        </motion.div>
        <div className="relative bottom-12 right-36 z-20 md:bottom-10 md:right-96 bg-white animate-bounce 
        rounded-xl"
        style={
          {backgroundColor: localTheme.foreground}
        }>

          <svg 
          style={{fill: localTheme.background}}
           xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 24 24">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
          </svg>
        </div>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: isInView1 ? 0 : -1000 }}
          transition={{ duration: 1 }}
          className="relative left-68 bottom-32 md:left-56 md:bottom-44 h-46 w-64  rounded-3xl"
          style={{ backgroundColor: localTheme.foreground }}
        >
          <p className=" p-4 md:text-base text-xs"
          style={{ color: localTheme.background }}
          >
            FlexPro – Your Ultimate Gym Buddy
            A fitness app built with React, MongoDB, and Node.js.
            Redesigned to showcase my improved web design skills while delivering a smooth,
            functional experience to help users track their fitness goals.
          </p>
        </motion.div>
      </div>
      <div id="project2" className="flex flex-col justify-center items-center w-full h-full p-4">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: isInView2 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          className="relative left-24 top-32 md:top-32 md:left-44 z-50"
        >
          <Image
            width={100}
            height={100}
            className="!max-w-[340px] !max-h-[100px] index-10"
            alt="TypeScript Logo"
            src="https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000"
          />
        </motion.div>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: isInView2 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          className="relative top-12 right-20 md:top-10 md:right-44 z-50"
        >
         
          
          <Image
          
            width={100}
            height={100}
            className={`${localTheme.dark? "invert":'invert-0'}`}
            alt="Django Logo"
            src="https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png&color=000000"
          />
        
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView2 ? 1 : 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={screenWidth > 720 ? project2 : project2small}
            alt="project2"
            width={screenWidth > 720 ? 800 : 400}
            height={screenWidth > 720 ? 600 : 600}
            priority
          />
        </motion.div>
        <div className="relative bottom-12 right-36 z-20 md:bottom-10 md:right-96  animate-bounce 
        rounded-xl"
        style={{backgroundColor: localTheme.foreground}}
        >
          <svg 
          style={{fill: localTheme.background}}
           xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 24 24">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
          </svg>
        </div>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: isInView2 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          className="relative left-62 bottom-32 md:left-56 md:bottom-44 h-46 w-64  rounded-3xl"
          style={{ backgroundColor: localTheme.foreground }}
        >
          <p className=" p-4  text-xs md:text-base"
          style={{ color: localTheme.background }}
          >
            Anime T-Shirt Market
            A small anime-themed T-shirt marketplace with a Django back end and TypeScript front end.
            Designed to deliver a smooth, dynamic shopping experience for anime fans.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
