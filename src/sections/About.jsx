import React, { useState, useRef, useEffect, Suspense } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Keyboard from "../components/Keyboard";
import CanvasLoader from "../components/CanvasLoader";

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shinysirichandra@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;

    // Set initial point of view to your location
    globe.pointOfView(
      {
        lat: location.lat,
        lng: location.lng,
        altitude: 1.5, // adjust zoom level (1.5 = farther, 0.2 = close)
      },
      1000 // animation duration (ms)
    );

    const animate = () => {
      const controls = globe.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1; // adjust speed as needed
      }
      globe.scene().rotation.y += 0.0005; // optional fine-tuned manual rotation
    };

    // Start animation loop
    const interval = setInterval(animate, 30);

    return () => clearInterval(interval); // cleanup
  }, []);

  const location = {
    lat: 6.3,
    lng: 80.55,
  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* 1 - Profile Image*/}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1-profile2.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-container"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Shiny</p>
              <p className="grid-subtext text-justify">
                With 2 years of experience, I have honed my skills in both
                frontend and backend dev, creating dynamic and responsive
                websites.
              </p>
            </div>
          </div>
        </div>

        {/* 2 - Tech Stack*/}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/tech/techstack.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-container"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext text-justify">
                Java | SpringBoot | MySQL | JavaScript | ReactJS | ExpressJS |
                NodeJS | MongoDB | Linux | AWS ...
              </p>
            </div>
          </div>
        </div>

        {/* 3 - Globe*/}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                htmlElementsData={[location]}
                htmlElement={(d) => {
                  const el = document.createElement("img");
                  el.src =
                    "https://cdn-icons-png.flaticon.com/512/684/684908.png";
                  el.style.width = "20px";
                  el.style.height = "20px";
                  el.style.cursor = "pointer";
                  el.style.transform = "translate(-50%, -50%)";
                  el.title = "I'm here!";
                  el.style.cursor = "pointer";
                  // el.style.position = "absolute";

                  // Attach click event properly
                  setTimeout(() => {
                    el.addEventListener("click", () => {
                      globeRef.current?.pointOfView(
                        {
                          lat: d.lat,
                          lng: d.lng,
                          altitude: 0.1,
                        },
                        1500
                      );
                    });
                  }); // Delay to ensure element is mounted

                  el.addEventListener("click", () => {
                    alert("Icon clicked!");
                  });

                  return el;
                }}

                // labelsData={[
                //   {
                //     lat: 5.95,
                //     lng: 80.5,
                //     text: "I'm here!",
                //     color: "white",
                //     size: 100,
                //   },
                // ]}
              />

              {/* Test zoom button */}
              {/* <button
                onClick={() => {
                  globeRef.current?.pointOfView(
                    { lat: 5.95, lng: 80.5, altitude: 0.1 },
                    1500
                  );
                }}
              >
                Zoom to Location
              </button> */}
            </div>
            <div>
              <p className="grid-headtext">
                I work seamlessly across time zones and locations
              </p>
              <p className="grid-subtext">
                Based in Galle, Sri Lanka, I’m open to remote opportunities
                worldwide and highly adaptable to cross-time-zone collaboration.
              </p>
              <a
                href="https://shiny-isurandi-cv.tiiny.site/"
                className="w-fit"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  name="Hire Me? - View Resume"
                  btnType="cv"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 4 - Passion for Coding*/}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="assets/keyboard3.jpeg"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-container"
            /> */}
            <Canvas>
              <ambientLight intensity={0} />
              <directionalLight position={[-10, 80, 5]} />
              {/* utility that center the 3D model on the screen */}
              <Center>
                {/* Suspense is used to show something while the model is loading */}
                <Suspense fallback={<CanvasLoader />}>
                  <group
                    scale={2}
                    position={[2, 1, -1.2]}
                    rotation={[0.8, 0.2, 0]}
                  >
                    <Keyboard />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext text-justify">
                I’m driven by a deep love for problem-solving and building
                meaningful solutions through code. Programming isn’t just a
                profession—it’s my passion. I thrive on exploring new
                technologies, pushing my boundaries, and continuously enhancing
                my skills.{" "}
                <span className="font-bold">
                  This website is a result of that same passion
                </span>
                . A personal project where I’ve combined creativity,
                functionality, and code to showcase who I am and what I do.
              </p>
            </div>
          </div>
        </div>

        {/* 5 - Contact Email*/}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopyEmail}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white hover:text-white-700 ">
                  shinysirichandra@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
