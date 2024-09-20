'use client';
import ParticlesEffect from "./components/particlesEffect";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ThemeStore from "./store";
import { useEffect, useState } from "react";
import LoadingAnimation from "./loadingAnimation";
export default function Page() {
  const theme = ThemeStore((state) => state.theme);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(loading)
  return (
    <>
      {loading && <LoadingAnimation />}
      <div className="flex flex-col justify-center items-center w-full p-2 h-full overflow-hidden"
      
      style={{ backgroundColor:theme.background ,
        color:theme.foreground 
        }}
      >
        <div id="Hero" className="w-full overflow-hidden  md:h-[560px] h-[290px] ">
          <ParticlesEffect />
        </div>

        <section id="AboutMe" className="w-screen overflow-hidden h-full">
          <AboutMe />
        </section>

        <section id="Skills" className="w-full h-96 overflow-hidden mt-10 ">
          <Skills />
        </section>
        <section id="Projects" className="w-full overflow-hidden h-full mt-10 ">
          <Projects />
        </section>


      </div>
    </>
  );
}
