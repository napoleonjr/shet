import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
       <motion.h1 
       
       
       
       className="my-20 text-center text-4xl">Get in Touch</motion.h1>
     <motion.div 
     whileInView={{opacity: 1, y: 0}}
     initial={{ opacity: 0, y:-100 }}
     transition= {{duration: 2.5}}
     
     className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="">{CONTACT.phoneNo}</p>
        <a href="https://mail.google.com/mail/u/0/#inbox" className="border-b">
            {CONTACT.email}
        </a>
     </motion.div>
        </div>
  )
}

export default Contact
