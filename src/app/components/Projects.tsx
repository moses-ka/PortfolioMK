"use client";
import Image from "next/image"
import project2 from "../../assets/project2.png"
import project from "../../assets/project.png"
import { easeIn, motion,useInView } from 'framer-motion';
import { useRef } from 'react';


export default function Projects() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  return (
   
      <div id="projects list" className="flex flex-col justify-center
       items-center w-full h-auto p-4">
        <div
          ref={ref1}
         id="project1" className=" flex flex-col justify-center
         items-center w-full  p-4"
        >
          <motion.div
          initial={{ x: '-100vw' }}  
          animate={{ x: isInView1 ? 0 : -1000 }}
          transition={{ duration: 1 }}
           className="  relative top-36 right-44  z-50">
          <img

            
  
             className=" !max-w-[340px]  !max-h-[100px] "    
              alt="Figma  Logo"
              src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
            />
          
          </motion.div>
          <motion.div 
          initial={{ x: '100vw' }}
          animate={{ x: isInView1 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          
          className="  relative top-10 left-44 z-50 ">
          <img
  
  
  
            className=" invert !max-w-[340px]  !max-h-[100px]  index-z-10"
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
            
          <Image  src={project} alt="project1" width={800} height={400} 
          priority/>
          </motion.div>
           <div className=" relative bottom-10 animate-bounce right-96 bg-white rounded-3xl  ">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
            </svg>

          </div>
          <motion.div 
          initial={{ x: '-100vw' }}
          animate={{ x: isInView1 ? 0 : 1000 }}
          transition={{ duration: 1 }}
           className=" relative  left-56 bottom-44 h-46 w-64 
          bg-white rounded-3xl 
           ">
           
            <p className="text-black p-4">
              Project 1 is a project that I worked on for a client. It was a
              website that was built with React and Tailwind CSS. The website
              was built with a mobile-first approach and was responsive on all
              devices.
            </p>
          </motion.div>
          
        </div>
        <div id="project2" className=" flex flex-col justify-center
         items-center w-full h-full p-4">
          <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: isInView2 ? 0 : 1000 }}
          transition={{ duration: 1 }}
          


           className="  relative top-36 left-44 z-50 ">

          <img
  
  
  
             className=" !max-w-[340px]  !max-h-[100px]  index-10"   
             alt="TypeScript  Logo"
             src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000"
            />
          
          </motion.div>
          <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: isInView2 ? 0 : -1000 }}
          transition={{ duration: 1 }}
           className="  relative top-10 right-44 z-50 ">
          <img
  
  
  
             className=" !max-w-[340px]  !max-h-[100px]     invert"
             alt="Django Skill Logo"
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
            

          <Image  src={project2} alt="project1" width={800} height={400}  />
          </motion.div>
          <div className=" relative bottom-10 right-96 bg-white animate-bounce rounded-3xl  ">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
            </svg>
          </div>
          <motion.div 
           initial={{ x: '100vw' }}
          animate={{ x: isInView2 ? 0 : 1000 }}
          transition={{ duration: 1 }}
            className=" relative  left-56 bottom-44 h-46 w-64
          bg-white rounded-3xl 
           ">
            <p className="text-black p-4">
              Project 2 is a project that I worked on for a client. It was a
              website that was built with React and Tailwind CSS. The website
              was built with a mobile-first approach and was responsive on all
              devices.
            </p>
          </motion.div>
         </div>
      </div>
 
  )
}

