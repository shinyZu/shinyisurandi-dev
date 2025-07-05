import { Canvas } from "@react-three/fiber";
import React, { useState, Suspense } from "react";
import { calculateSizes, workExperiences } from "../constants";

import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/CanvasLoader";
import BusinessWomen from "../components/BusinessWomen.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera.jsx";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idlewithtablet");

  const isSmall = useMediaQuery({ maxWidth: 440 }); // some very small device
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section id="experience" className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Work Experience</h3>

        <div className="work-container">
          {/* Left - 3D  Custom Avatar */}
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={4} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3.5}
                  scale={3.8}
                  section="dev"
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Right - Experience Content */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({
                  id,
                  title,
                  company,
                  href,
                  duration,
                  desc,
                  icon,
                  animation,
                }) => (
                  <div
                    key={id}
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idlewithtablet")}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      {/* company logos */}
                      <div className="work-content_logo">
                        <a href={href} target="_blank" rel="noreferrer">
                          <img
                            src={icon}
                            alt="company-logo"
                            className="w-full h-full"
                          />
                        </a>
                      </div>
                      {/* horizontal bars wbetween logos */}
                      <div className="work-content_bar" />
                    </div>

                    {/* experience details */}
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{title}</p>
                      <p className="text-sm pt-1">{company}</p>
                      <p className="text-sm mb-5 pt-1">{duration}</p>
                      <p className="group-hover:text-white transition ease-in-out duration-500 text-justify">
                        {desc}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// https:/models.readyplayer.me/686686576a4c7e0949f5b6c8.glb
