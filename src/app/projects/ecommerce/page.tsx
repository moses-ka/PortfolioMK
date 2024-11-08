'use client'
import { motion } from "framer-motion";
import ThemeStore from "../../store";
import Image from "next/image";
import project2B from "../../../assets/project2.png";
import project2small from "../../../assets/project2small.png";
import { RiExternalLinkLine } from "react-icons/ri";

import { useEffect,useState } from "react";

export default function Page() {
  const localTheme = ThemeStore((state) => state.theme);
  const [screenWidth, setScreenWidth] = useState(0);
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
            className="!text-3xl md:!text-4xl flex justify-center items-center gap-4"
            style={{
              color: localTheme.foreground,
            }}
          >
            <RiExternalLinkLine />

            <a href="https://ecommerce-m-k.vercel.app/">
            E-commerce Anime T-Shirt Market
            </a>
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className=" w-6/6 md:w-5/6">
            <Image
              width={800}
              height={800}
              className="w-full h-full object-cover"
              alt="Background Image"
              src={screenWidth > 720 ? project2B : project2small}
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




              className={`${localTheme.dark ? 'invert !max-w-[340px]  !max-h-[100px] ' : '!max-w-[340px]  !max-h-[100px] '}`}
              alt="Django Skill Logo"
              src="https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png&color=000000"
            />
            <span className="hidden md:inline-block m-2          ">Django</span>
          </li>
          
        </motion.div>
          <div className=" w-6/6 md:w-5/6 flex flex-col justify-center items-center gap-10 !text-xl md:!text-3xl p-4   leading-8 ">
            <p className="">I developed a full-stack e-commerce platform specializing in anime-themed t-shirts. </p>
            <p><strong> My main goal </strong> was to get better at working with TypeScript, state management, and Django for the back end—and I achieved it.</p>
            <p>
              <strong >For the backend </strong>, I used Django along with the Django REST Framework. I stuck with SQLite since it comes bundled with Django, which made setup straightforward. I implemented authentication to secure the platform and hosted everything on PythonAnywhere. To ensure the API was solid, I tested it thoroughly using Postman.
            </p>
            <p> <strong>

            
              On the frontend</strong>, I built the application using React with TypeScript, managing the state with Redux. Styling was done using Tailwind CSS, which allowed for rapid development and responsiveness. I went for a minimalist design because I prefer simplicity over overly complicated interfaces. Menus are collapsible and can be toggled with a single click, keeping the focus on showcasing the products.

              The platform is fully responsive and includes a dark mode that adapts based on the user's system settings.

            </p>
            <p><strong>One of the challenges </strong>  I faced was integrating Django with the REST Framework to build out the backend system. Working with Redux for state management in a project of this scale was also a learning curve. However, tackling these challenges helped me improve my skills significantly in both areas.

               </p>
            <p> Overall, this project not only allowed me to create something I'm passionate about but also helped me enhance my proficiency with TypeScript, state management, and Django.</p>
          </div>

        </div>
      </div>
    </>
  );
}
