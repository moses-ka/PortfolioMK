'use client'
import { motion } from "framer-motion";
import ThemeStore from "../../store";
import Image from "next/image";
import project1P from '../../../assets/project.png'
import project1small from '../../../assets/project1small.png'
import { useEffect, useState } from "react";
export default function Page() {
    const localTheme = ThemeStore((state) => state.theme);
    const [screenWidth, setScreenWidth] = useState<number>(0);
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
        <>
            <div
                className="w-full p-10 h-full overflow-hidden  "
                style={{
                    backgroundColor: localTheme.background,
                    color: localTheme.foreground,
                }}
            >

                <div className="flex flex-col justify-normal items-center gap-10">
                    <h1
                        className="text-4xl"
                        style={{
                            color: localTheme.foreground,
                        }}
                    >
                        Flex Pro Fitness Web App
                    </h1>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className=" w-6/6 md:w-5/6">
                        <Image
                            width={800}
                            height={800}
                            className="w-full h-full object-cover"
                            alt="Background Image"
                            src={screenWidth > 720 ? project1P : project1small}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: '-100vw' }}  // Start from off-screen right
                        animate={{ x: '100vw' }}  // Move off-screen left
                        transition={{
                            duration: 15,  // Slow down on hover, resume speed after hover
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
                                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" />
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

                        <li className="flex flex-col justify-center items-center    ">
                            <Image
                                width={100}
                                height={100}




                                className={`${localTheme.dark ? 'invert !max-w-[340px]  !max-h-[100px] ' : '!max-w-[340px]  !max-h-[100px] '}`}
                                alt="Node Js Skill Logo"
                                src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                            />
                            <span className="hidden md:inline-block m-2          ">Node Js</span>
                        </li>
                        <li className="flex flex-col justfiy-center items-center            ">
                            <Image
                                width={100}
                                height={100}




                                className={`${localTheme.dark ? "invert" : 'invert-0'}`}
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
                                alt="MongoDB Skill Logo"
                                src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
                            />
                            <span className="hidden md:inline-block m-2        ">MongoDB</span>
                        </li>

                    </motion.div>
                    <div className=" w-6/6 md:w-5/6 flex flex-col justify-center items-center gap-10 !text-xl md:!text-3xl p-4   leading-8 ">
                        <p className="">I developed Flex Pro, a full-stack web app that I'm pretty proud of. For the backend, I used Node.js with Express and MongoDB. The app's architecture is built on microservices, with APIs for each component, which made everything modular and scalable. </p>
                        <p><strong> My main goal </strong>was to get better at working with microservices architecture and modern frontend development—and I definitely achieved that. Now, with the redesign, I'm excited to apply my new UI/UX skills to make it even better.</p>
                        <p>
                            <strong >For the backend </strong> I focused on creating a microservices architecture using Node.js and Express. Each microservice handles a specific part of the app and communicates through well-defined APIs. I chose MongoDB for the database because it offers great flexibility and scalability, which is perfect for handling diverse data types. This setup made the system more efficient and easier to maintain.
                        </p>
                        <p> <strong>


                            On the frontend</strong>,I worked with React and Tailwind CSS to create a responsive and clean user interface. I also used React Query to minimize API calls and boost performance, making the app faster and more efficient.

                            Lately, since I'm taking UI/UX design courses, I'm redesigning Flex Pro to make it more user-focused and to improve the overall UI. The goal is to enhance the user experience and make the app even more intuitive.

                        </p>
                        <p><strong>One of the challenges </strong>  One of the main challenges was designing and implementing the microservices architecture. Ensuring that all the services communicated effectively without causing any bottlenecks required a lot of planning and testing. Working with React Query on the frontend to minimize API calls was also tricky at first, but it paid off by significantly boosting the app's performance.

                        </p>
                        <p> <strong>Overall</strong> Working on Flex Pro has been a rewarding experience. I achieved my goal of improving my skills in microservices architecture and modern frontend development. The project allowed me to tackle real-world challenges and come up with effective solutions. With the ongoing redesign, I'm looking forward to making the app even better by enhancing the user experience and applying my newfound UI/UX design skills.</p>
                    </div>

                </div>
            </div>
        </>
    );
}
