import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <section className="h-screen w-screen flex justify-center items-center">
        <Image
          className="h-[70vw] w-[70vw] lg:h-[40vw] lg:w-[40vw] xl:w-[30vw] xl:h-[30vw] absolute opacity-0 hover:opacity-100 transition-all z-50 hoverCursor"
          src="/images/heroFront.png"
          height={1000}
          width={1000}
          alt="Missing Image"
          
        />
        <div className="flex flex-col justify-evenly items-center absolute text-4xl sm:text-6xl lg:text-8xl text-center font-extrabold mix-blend-difference">
          <h1 className="z-0">Tim</h1>
          <span>Developer & Student</span>
          <span>Austria 2024</span>
        </div>
        <Image
          className="h-[70vw] w-[70vw] lg:h-[40vw] lg:w-[40vw] xl:w-[30vw] xl:h-[30vw] -z-10 saturate-0"
          src="/images/heroBack.png"
          height={1000}
          width={1000}
          alt="Missing Image"
        />
        
      </section>
      <div className="w-screen flex justify-center items-center relative bottom-20">
          Scroll -{'>'}
        </div>
      <section className="w-screen h-[40vh] flex justify-center items-center text-center">
        <p className="w-[60vw] md:w-[30rem] hoverCursor">
          Hello! I&apos;m <b className="text-lg">Tim</b>, a 17-year-old enthusiast from Austria, deeply
          engrossed in the world of <b className="text-lg">IT and Web Development</b>. I&apos;m currently
          immersing myself in coding and design, eager to unlock <b className="text-lg">new
          possibilities</b> and innovative solutions in this dynamic field.
        </p>
    
      </section>
    </>
  );
};

export default Landing;
