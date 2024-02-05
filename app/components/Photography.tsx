"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  useEffect(() => {
    gsap.to("#photographySection", {
      y: 0,
      scrollTrigger: {
        trigger: "#photographySection",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=1400",
      },
    });

    gsap.fromTo(
      "#imagesLeft",
      { x: -2000 },
      {
        x: 600,
        scrollTrigger: {
          trigger: "#photographySection",
          start: "top bottom",
          end: "+=3000",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      "#imagesRight",
      { x: 3500 },
      {
        x: -1200,
        scrollTrigger: {
          trigger: "#photographySection",
          start: "top bottom",
          end: "+=3000",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section
        className="h-screen w-screen overflow-hidden flex flex-col items-center justify-evenly"
        id="photographySection"
      >
        <h2 className="text-[10vw]" id="photoTitle">
          Photography
        </h2>

        <div className="flex flex-col gap-5 h-fit w-fit" id="imagesLeft">
          <div className="w-fit h-fit flex gap-5">
            <div className="bg-[url(/images/left1.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left2.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left3.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left4.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left5.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left6.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left7.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/left8.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
          </div>

          <div className="w-fit h-fit flex gap-5" id="imagesRight">
            <div className="bg-[url(/images/right1.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right2.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right3.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right4.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right5.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right6.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right7.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
            <div className="bg-[url(/images/right8.webp)] bg-cover h-[50vw] w-[50vw] rounded-xl" />
          </div>
        </div>
      
      </section>
      <div className="w-screen h-fit flex justify-center items-center">

      
      <p className="w-[90vw]">
      Photography has always been more than just a hobby to me;
              it&apos;s been a lifelong passion. From capturing the simplest
              moments to exploring the depths of artistic expression through a
              lens, every click has been a step in my journey of discovery and
              joy. It&apos;s a way to see the world, to freeze time, and to tell
              stories without words.
        </p>
        </div>
    </>
  );
};

export default Photography;
