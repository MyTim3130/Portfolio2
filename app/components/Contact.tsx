'use client'
import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" h-[40vh] z-20 w-screen absolute mt-14 bg-white wavesGradient"></div>
      <section className="h-[100dvh] w-screen flex justify-center items-center mt-72 flex-col" id="ContactMe">
        <h2 className="absolute z-10 text-5xl lg:text-9xl font-extrabold mix-blend-difference mb-96 hoverCursor">
          CONTACT ME
        </h2>
        <video
        playsInline 
          controls={false}
          disablePictureInPicture
          autoPlay
          loop
          muted
          className="z-0 absolute h-screen w-screen object-cover rotate-180 saturate-50"
        >
          <source src="/images/waves.mp4" type="video/mp4" />{" "}
        </video>
        <div className="z-50 h-[40vh] flex flex-col justify-between relative top-52">
      <div className="flex flex-col md:flex-row h-[40vh] justify-evenly items-center relative md:top-10 md:h-fit w-screen z-50 bottom-40 font-bold text-xl">
          <span className="hoverCursor">TIN.HAUSLKRAMPER@GMAIL.COM</span>
          <span className="hoverCursor">+43 660 133 0906</span>
          <span className="hoverCursor">
            <a href="https://www.instagram.com/my__tim_/">INSTAGRAM</a>
          </span>

          <span className="hoverCursor">
            <a href="https://discord.com/">DISCORD: mydim</a>
          </span>
        </div>
        <div className="w-screen h-20vh flex justify-center items-center z-50 bottom-5">
          <span className="hoverCursor">
            <a href="https://github.com/MyTim3130">GITHUB</a>
          </span>
        </div>
        </div>
  
      </section>
    </>
  );
};

export default Contact;
