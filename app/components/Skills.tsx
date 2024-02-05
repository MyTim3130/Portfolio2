import React from "react";
import Rive from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Skills = () => {
  return (
    <>
      <section className="mt-10 h-screen w-screen flex justify-center items-center flex-col relative top-56 ">
        <div className="h-[10vh] w-screen bg-gradient-to-b from-black to-transparent absolute z-[1000] top-0"></div>

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
            <div className="grid grid-cols-3 w-screen h-fit gap-10 text-lg mt-11 md:text-3xl content-center">
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  React
                </span>
              </div>
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  NextJS
                </span>
              </div>
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  TypeScript
                </span>
              </div>
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  Figma
                </span>
              </div>
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  Photoshop
                </span>
              </div>
              <div>
                <span className="w-fit hover:drop-shadow-glow text-white transition-all duration-300">
                  Illustrator
                </span>
              </div>
            </div>
          </motion.h1>
        </LampContainer>
      </section>
    </>
  );
};

export default Skills;
