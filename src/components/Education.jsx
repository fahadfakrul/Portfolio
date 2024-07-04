import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}} className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div  whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:1}}
          transition={{duration:1}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:100 , opacity:1}}
          transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{education.field}</h6>
            <p>{education.institution}</p>
            <p className="text-neutral-400">{education.graduate}</p>
            <p className="text-neutral-400">{education.grade}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
