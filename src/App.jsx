import { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const eduRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
      <div className="container mx-auto px-8">
        <NavBar
        aboutRef={aboutRef}
        techRef={techRef}
        eduRef={eduRef}
        projRef={projRef}
        contactRef={contactRef}></NavBar>
        <Hero></Hero>
        <div id="about" ref={aboutRef}><About /></div>
        <div id="technologies" ref={techRef}><Technologies /></div>
        <div id="education" ref={eduRef}><Education /></div>
        <div id="projects" ref={projRef}><Projects /></div>
        <div id="contact" ref={contactRef}><Contact /></div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
