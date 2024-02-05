"use client";
import { useState, useEffect } from "react";
import Rive from "@rive-app/react-canvas";

import Image from "next/image";
import Landing from "./components/Landing";
import Photography from "./components/Photography";
import PhotographyWide from "./components/PhotographyWide";
import Programming from "./components/Programming";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import AnimatedCursor from "react-animated-cursor";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
  // State to track whether to show the Photography component
  const [showPhotography, setShowPhotography] = useState(false);

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
    // Update the state based on window width
    const updateSize = () => {
      setShowPhotography(window.innerWidth < 800);
    };

    // Call updateSize initially and whenever the window resizes
    window.addEventListener("resize", updateSize);
    updateSize(); // Call initially to set the state based on current window size

    // Cleanup listener when component unmounts
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className="App">
        <AnimatedCursor
          innerSize={20}
          outerSize={50}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            '.hoverCursor'
          ]}
        />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing></Landing>
          {showPhotography && (
            <div className="h-[300vh]">
              <Photography></Photography>
            </div>
          )}
          {!showPhotography && <PhotographyWide></PhotographyWide>}
          <Programming></Programming>
          <Skills></Skills>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}
