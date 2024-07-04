import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
      transition={{duration:1.5}} className="my-20 text-center bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div  whileInView={{x:0 , opacity:1}}
          initial={{x:-100 , opacity:1}}
          transition={{duration:1}}  className="w-full lg:w-1/4 lg:mr-5">
            <img
              className="mb-6 rounded"
              src={project.image}
              alt={project.title}
              width={300}
              height={150}
            />
          </motion.div>
          <motion.div whileInView={{x:0 , opacity:1}}
          initial={{x:100 , opacity:1}}
          transition={{duration:1}} className=" w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#931CC1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
