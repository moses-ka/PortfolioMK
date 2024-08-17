import Image from "next/image";
import ParticlesEffect from "./components/particlesEffect";
import AboutMe from "./components/AboutMe";
export default function Home() {
  return (
    <>
    
    <section id="Hero" className=" h-full">
      <ParticlesEffect  />
    </section>
    <section id="AboutMe" className=" absolute  top-3/4 md:top-full right-0 overflow-hidden  w-full">
      <AboutMe />

    </section>
    </>
  );
}
