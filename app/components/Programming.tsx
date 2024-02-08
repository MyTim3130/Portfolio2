"use client";
import React from "react";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const Programming = () => {
  return (
    <>
      <section className="h-fit w-screen grid grid-cols-1 relative top-40">
        <div className="w-screen h-[50vh] flex justify-evenly items-center flex-col">
          <h2 className="text-5xl font-bold mb-10 mt-20 hoverCursor">
            Programming
          </h2>
          <span className="w-5/6 md:w-[50vw] text-center mb-20 hoverCursor">
            I&apos;ve been captivated by programming for nearly seven years,
            with a special love for web development. This field, with its
            endless potential for creativity and innovation, has always been
            where my passion lies.
          </span>
        </div>

        <div className="w-screen grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
        <Link href="https://spaceportfolio.timhausl.com/">

          <PinContainer
            title="spaceportfolio.timhausl.com"
            className="bg-[#c4aaff] rounded-xl hoverCursor"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Space Portfolio
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-black ">
                  A slick space-themed Portfolio website
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-[url(/images/spacePortfolio.png)]" />
            </div>
          </PinContainer>
          </Link>

          <PinContainer
            title="???"
            className="bg-[#c4aaff] rounded-xl hoverCursor"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Coming Soon
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-black ">
                  My first project with a big Client
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-[url(/images/cc-tProject.png)] blur-md" />
            </div>
          </PinContainer>


          <Link href="https://derduemmstefliegt.timhausl.com/">

          <PinContainer
            title="derduemmstefliegt.timhausl.com"
            className="bg-[#c4aaff] rounded-xl hoverCursor"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Der dümmste Fliegt
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-black ">
                  A fun little game you can play with your Friends in Person
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-[url(/images/derDuemssteFliegt.png)]" />
            </div>
          </PinContainer>
          </Link>

          <Link href="https://collab.timhausl.com/">
            <div>
              <PinContainer
                title="collab.timhausl.com"
                className="bg-[#c4aaff] rounded-xl hoverCursor"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    COLLAB
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-black ">
                      A real-time Creativity Platform where users can draw,
                      write and brainstorm their ideas. (Sign Up Required)
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-[url(/images/collab.png)]" />
                </div>
              </PinContainer>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programming;
