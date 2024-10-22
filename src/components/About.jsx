import profilePic from "../assets/ok.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
const About = () => {
    return (
      <motion.div className="border-b border-neutral-900 pb-4 ">
         <h1  className="my-20 text-center text-4xl"> About
            <span className="text-neutral-500 "> Me </span>
         </h1>
         <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                 <motion.img whileInView={{opacity: 1, x: 0}}
   initial={{ opacity: 0, x:-150 }}
   transition= {{duration: 1.5}} className="rounded-2xl" src= {profilePic} alt="ok" />
            </div>
          
            
            
            
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                <motion.p 
                whileInView={{opacity: 1, y: 0}}
                initial={{ opacity: 0, y:-150 }}
                transition= {{duration: 1.5}}
                
                
                
                className="my-2 max-w-xl py-9">{ABOUT_TEXT}</motion.p>
              </div>
            </div>
            




         </div>
         </motion.div>
    )
  }
  
  export default About