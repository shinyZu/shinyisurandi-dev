import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import ComputerRoom from "../components/ComputerRoom";
import Developer from "../components/Developer";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const RotatingGroup = ({ children, rotate, rotationSpeed = 0.01 }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (rotate && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 }); // some very small device
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const [animationName, setAnimationName] = useState("idle");

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative">
      {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-mono text-white text-center">
          Hi, I'm Shiny <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag hero-text-gray_gradient">
          Bringing Ideas to Life Through Code.
        </p>
      </div> */}

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <motion.p
          className="sm:text-3xl text-2xl font-mono text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I'm Shiny{" "}
          <motion.span
            className="inline-block waving-hand"
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            👋
          </motion.span>
        </motion.p>

        <TypeAnimation
          sequence={[
            "Bringing Ideas to Life Through Code.",
            2000,
            "Full Stack Software Engineer",
            2000,
            "Passionate About Code, Focused on Impact.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="hero_tag hero-text-gray_gradient"
          cursor={true}
        />
      </div>

      {/* Three.js */}
      <div className="w-full h-full absolute inset-0">
        {/* uncomment to get the Control Panel */}
        {/* <Leva /> */}

        {/* a space for 3D scene - opens up a 3D environment in react - here no html elements are allowed*/}
        {/* <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              /> 
            </HeroCamera>

            {<group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas> */}

        {/* Testing 1 */}
        {/* <Canvas>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <RotatingGroup rotate={true} rotationSpeed={0.005}>
                <HackerRoom
                  position={[
                    sizes.deskPosition[0] - 3,
                    sizes.deskPosition[1],
                    sizes.deskPosition[2],
                  ]}
                  scale={sizes.deskScale}
                />
              </RotatingGroup>

              <RotatingGroup rotate={true} rotationSpeed={-0.005}>
                <Developer
                  position={[3, -3, 0]}
                  scale={3}
                  animationName={animationName}
                />
              </RotatingGroup>
            </HeroCamera>
          </Suspense>
        </Canvas> */}

        {/* Testing 2 */}
        {/* HackerRoom on the left */}
        <Canvas>
          <ambientLight intensity={4} />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <PerspectiveCamera makeDefault position={[0, 0, -20]} />
          {/* <OrbitControls enableZoom={true} minDistance={1} maxDistance={1000} /> */}

          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />

              <Developer
                position={[6, -5.8, 1]}
                scale={6}
                rotation={[0, -Math.PI / 3, 0]}
                animationName={animationName}
              />
            </HeroCamera>
          </Suspense>
        </Canvas>

        {/* Testing 3 */}
        {/* <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, -20]} />
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={true} minDistance={3} maxDistance={100} />

          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />
              <Developer
                position={[6, -5.8, 1]}
                scale={6}
                rotation={[0, -Math.PI / 3, 0]}
                animationName={animationName}
              />
            </HeroCamera>
          </Suspense>
        </Canvas> */}
      </div>

      {/* Button to the next section */}
      {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a
          href="https://shiny-isurandi-cv.tiiny.site/"
          className="w-fit"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            name="Let’s Work Together – View My CV"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div> */}

      {/* To NExt Page Triangle buttons */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="relative flex flex-col items-center gap-1">
          {/* Animated filled triangle bouncing inside */}
          <motion.div
            // animate={{ y: [28, -15, 28] }}
            animate={{ y: [128, 80, 128] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
            className="w-4 h-4 mb-0 pd-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#01a3a4]"
          />

          {/* Outlined triangle */}
          <motion.svg
            width="40"
            height="36"
            viewBox="0 0 40 36"
            // animate={{ y: [30, -15, 30] }}
            animate={{ y: [130, 80, 130] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
            className="block "
          >
            <polygon
              points="20,30 0,0 40,0"
              fill="none"
              stroke="#01a3a4"
              strokeWidth="4"
            />
          </motion.svg>

          {/* Optional second bouncing triangle for visual effect */}
          <motion.div
            // animate={{ y: [28, -17, 28] }}
            animate={{ y: [128, 80, 128] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
            // className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2d98da]"
            className="w-3 h-3 rounded-full bg-[#01a3a4] mb-1 "
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
