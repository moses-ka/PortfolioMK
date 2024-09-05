"use client";
import {motion} from "framer-motion";
 import Image from "next/image"
import { useState } from "react";
export default function Skills() {


  return (
    <>
      <ul
     
       className="flex flex-col  justify-center items-center text-white font-bold gap-6 ">
        <motion.div
        initial={{ x: '-100vw' }}  // Start from off-screen right
        animate={{ x: '100vw' }}  // Move off-screen left
        transition={{
          duration:  15,  // Slow down on hover, resume speed after hover
          repeat: Infinity, // Stop repeating on hover
          ease: "linear"
        }}
        
        whileHover={{
          scale: 1.5,              // Scale up the element on hover
        }}
         className="flex items-center justify-center gap-4 h-44">

        
        <li className="flex flex-col justify-center items-center    ">
                      <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px] "    
            alt="Figma Skill Logo"
            src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">Figma</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]       "
            alt="HTLM Skill Logo "
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"          />
          <span className="hidden md:inline-block m-2      ">HTML</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="CSS Skill Logo"
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2         ">CSS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="JavaScript Skill Logo"
            src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">JS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center             ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt=" Tailwind Skill Logo"
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2           duration-1000">Tailwind</span>
        </li>
        <li className="flex flex-col justfiy-center items-center        ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="SASS Skill Logo"
            src="https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">SASS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="BootStrap Skill Logo"
            src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">Bootstrap</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="Git Skill Logo"
            src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2        ">Git</span>
        </li>
        <li className="flex flex-col justfiy-center items-center           ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="React Skill Logo"
            src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">React</span>
        </li>
        </motion.div>
        <motion.div
          initial={{ x: '100vw' }}  // Start from off-screen right
      animate={{ x: '-100vw' }}  // Move off-screen left
      transition={{
        duration:  15,  // Slow down on hover, resume speed after hover
        repeat: Infinity,  // Repeat indefinitely
        ease: "linear"
      }}
      
      whileHover={{
        scale: 1.5,  // Scale up the element on hover

      }}
         className="flex justify-center items-center gap-4 h-44">

        <li className="flex flex-col justify-center items-center      ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" invert !max-w-[340px]  !max-h-[100px]    h  "
            alt="Next JS Skill Logo"
            src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">NextJS</span>
        </li>
        <li className="flex flex-col justify-center items-center  ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]    "
            alt="TypeScript Skill Logo"
            src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2         ">TypeScript</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]      "
            alt="ExpressJs Skill Logo"
            src="https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2    ">Express</span>
        </li>

        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]      "
            alt="NodeJs Skill Logo"
            src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">Node.js</span>
        </li>
        <li className="flex flex-col justify-center items-center    ">
                  <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="Python Skill Logo"
            src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">Python</span>
        </li>
        <li className="flex flex-col justify-center items-center    ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     invert"
            alt="Django Skill Logo"
            src="https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2          ">Django</span>
        </li>
        <li className="flex flex-col justfiy-center items-center           ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]     "
            alt="PostgressSQL Skill Logo"
            src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2        ">PostgreSQL</span>
        </li>
        <li className="flex flex-col justfiy-center items-center            ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]      "
            alt="MongoDB Skill Logo"
            src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
          />
          <span className="hidden md:inline-block m-2        ">MongoDB</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          ">
                     <Image
                     width={100}
                      height={100}
  
  
  
  
            className=" !max-w-[340px]  !max-h-[100px]      "
            alt="Supabase Skill Logo"
            src="https://supabase.com/dashboard/img/supabase-logo.svg"
            />
          <span className="hidden md:inline-block m-2        ">Supabase</span>
        </li>
            </motion.div>
      </ul>
    </>
  );
}
