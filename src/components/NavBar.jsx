
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = ({ aboutRef, techRef, eduRef, projRef, contactRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-extrabold text-6xl text-white  font-mono">F</h1>
      </div>
      <div className="hidden md:flex gap-3">
        <a className="border-b" href="#about" onClick={() => scrollToSection(aboutRef)}>About Me</a>
        <a className="border-b" href="#technologies" onClick={() => scrollToSection(techRef)}>Technologies</a>
        <a className="border-b" href="#education" onClick={() => scrollToSection(eduRef)}>Education</a>
        <a className="border-b" href="#projects" onClick={() => scrollToSection(projRef)}>Projects</a>
        <a className="border-b" href="#contact" onClick={() => scrollToSection(contactRef)}>Contact</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a className="transition hover:scale-110" href="https://github.com/fahadfakrul" target="blank"> <FaGithub ></FaGithub></a>
        <a className="transition hover:scale-110" href="https://linkedin.com/in/fahadfakrul" target="blank"><FaLinkedin></FaLinkedin></a>
        <a className="transition hover:scale-110"  href="https://twitter.com/fahadfakrul916" target="blank"><FaSquareXTwitter></FaSquareXTwitter></a>
      </div>
    </nav>
  );
};

export default NavBar;
