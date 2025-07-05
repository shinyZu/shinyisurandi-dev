import React, { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { preinit } from "react-dom";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectsCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction == "previous") {
        return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="c-space my-20">
      <p className="head-text">Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* spotlight  */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover round-xl"
            />
          </div>

          {/* logo */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-15 h-11 shadow-sm"
            />
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText text-justify">{currentProject.desc}</p>
          </div>

          {/*  Tech Logo + Link - container*/}
          <div className="flex items-center justify-between flex-wrap gap-5">
            {/* Tech logos container */}
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            {/* Link to Project */}
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 z-10"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>View Project</p>
              <img
                // src="assets/arrow-up.png"
                src="assets/proj-link-arrow.png"
                alt="arrow-up"
                // className="w-5 h-5"
                className="w-5 h-5 invert object-contain brightness-0"
              />
            </a>
          </div>

          {/* Navigable Arrows Buttons  */}
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="assets/left-arrow.png"
                alt="left-arrow"
                className="src"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="assets/right-arrow.png"
                alt="right-arrow"
                className="src"
              />
            </button>
          </div>
        </div>

        {/* 3D Computer Model with Project Demo */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            {/* utility that center the 3D model on the screen */}
            <Center>
              {/* Suspense is used to show something while the model is loading */}
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// border-2 border-green-500
