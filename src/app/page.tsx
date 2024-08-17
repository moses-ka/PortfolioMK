import ParticlesEffect from "./components/particlesEffect";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <body className="flex flex-row justify-center items-center w-screen overflow-hidden">
        <section id="Hero" className="w-full lg:h-[800px] md:h-[760px] h-[460px] overflow-hidden">
          <ParticlesEffect />
        </section>
     
        <section id="AboutMe" className="w-full h-full">
          <AboutMe />
        </section>
        
        <section id="Skills" className="w-full h-96 mt-10 overflow-hidden">
          <Skills />
        </section>
      </body>
    </>
  );
}
