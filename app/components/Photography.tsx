"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  useEffect(() => {
    gsap.to("#photographySection", {
      y: 1500,
      scrollTrigger: {
        trigger: "#photographySection",
        scrub: true,
        start: "top top",
        end: "+=3000",
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

      
      <p className="relative top-[170vh] w-[90vw]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ducimus
          debitis tempore nemo omnis inventore commodi exercitationem minima,
          nam sint sunt beatae pariatur quod, excepturi voluptate voluptates
          quo? Delectus, dolores.
        </p>
        </div>
    </>
  );
};

export default Photography;
