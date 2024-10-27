import { PROJECTS } from "../constants";
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img whileInView={{opacity: 1, x: 0}}
   initial={{ opacity: 0, x:-150 }}
   transition= {{duration: 2.5,}}
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded transition-transform duration-200 hover:scale-105"
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h2 initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition= {{duration: 1.5,delay:1.2}} className="mb-2 font-semibold text-xl">{project.title}</motion.h2>
              <motion.p  whileInView={{opacity: 1, y: 0}}
                initial={{ opacity: 0, y:-150 }}
                transition= {{duration: 1.5}}lassName="mb-4 text-neutral-400">{project.description}</motion.p>
              <div>
                {project.technologies.map((tech, index) => (
                  <motion.span initial={{x:100, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition= {{duration: 1.5,delay:1.2}}
                  key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;