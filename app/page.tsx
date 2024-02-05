"use client";
import { useState, useEffect } from "react";
import Rive from '@rive-app/react-canvas';

import Image from "next/image";
import Landing from "./components/Landing";
import Photography from "./components/Photography";
import Programming from "./components/Programming";
import Skills from "./components/Skills";

export default function Home() {
  // State to track whether to show the Photography component
  const [showPhotography, setShowPhotography] = useState(false);

  useEffect(() => {
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
      <Landing></Landing>
      {showPhotography && (
        <div className="h-[300vh]">
          <Photography></Photography>
        </div>
      )}
  
      <Programming></Programming>
      <Skills></Skills>
    </>
  );
}
