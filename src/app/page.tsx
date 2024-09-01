import ParticlesEffect from "./components/particlesEffect";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen overflow-hidden h-full">
        <div id="Hero" className="w-screen  lg:h-[800px] md:h-[760px] h-[460px] ">
          <ParticlesEffect />
        </div>
     
        <section id="AboutMe" className="w-full h-full">
          <AboutMe />
        </section>
        
        <section id="Skills" className="w-full h-96 mt-10 ">
          <Skills />
        </section>
        <section id="Projects" className="w-full h-full mt-10 ">
          <Projects />
        </section>
        

      </div>
    </>
  );
}
