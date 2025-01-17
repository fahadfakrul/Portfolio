import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import My_resume from "../assets/pdfs/Fahad Resume.pdf"
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex items-center justify-between flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
             variants={container(0)}
             initial="hidden"
             animate="visible"
             
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl"
            >
              Fahad
            </motion.h1>
            <motion.span variants={container(0.5)}
             initial="hidden"
             animate="visible" className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              <Typewriter
            words={['MERN Stack Web Developer', ' Front End Developer', 'Programmer', 'Explorer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
            </motion.span>
            <motion.p variants={container(1)}
             initial="hidden"
             animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
           <a href={My_resume} download="My resume.pdf" target='_blank'> <button className="border border-[#931CC1] rounded-full p-3 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent transition hover:scale-105">My Resume</button></a>
          </div>
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-[500px] lg:p-8">
          <div className="flex  justify-center">
            <motion.img initial={{x:100, opacity:0}}
            animate={{x:0 , opacity:1}}
             transition={{duration: 1, delay: 1.2}} src={profilePic} className="rounded-full" alt="Fahad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
