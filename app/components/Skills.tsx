import React from 'react'
import Rive from '@rive-app/react-canvas';
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Skills = () => {
  return (<>
   

     <section className='mt-10 h-screen w-screen flex justify-center items-center flex-col relative top-56'>
        
     <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Skills
        
 <div className='grid grid-cols-3 w-screen h-fit gap-5 text-lg mt-11 md:text-3xl'>
    <span>React</span>
    <span>NextJS</span>
    <span>TypeScript</span>
    <span>Figma</span>
    <span>Photoshop</span>
    <span>Illustrator</span>
   
 </div>
      </motion.h1>
    </LampContainer>

     </section>

  </>
  )
}

export default Skills