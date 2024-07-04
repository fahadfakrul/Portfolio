import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}} className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
        About Me
       
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:1}}
          transition={{duration:0.5}} className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </motion.div>
        </div>
        <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:100 , opacity:1}}
          transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            
          </div>{" "}
          <div className="flex flex-wrap gap-4 text-neutral-400">
                <div className="" ><span className="text-center text-4xl text-[#931CC1] ">1+</span>
                <p className="text-sm">Years of Experience</p>
                </div>
                <div className="" ><span className="text-center text-4xl text-[#931CC1] ">10</span>
                <p className="text-sm">Complete Projects</p>
                </div>
                <div className="" ><span className="text-center text-4xl text-[#931CC1] ">12+</span>
                <p className="text-sm">Languages And Frameworks</p>
                </div>
               
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
