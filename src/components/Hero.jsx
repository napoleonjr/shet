import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div id="home" className="mt-20 border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -150 }}
              transition={{ duration: 1.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16"
            >
              Napoleon Taduran Jr.
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full stack, UI/UX
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
         
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
         
        
        </div>
      </div>
    </div>
  );
};

export default Hero;