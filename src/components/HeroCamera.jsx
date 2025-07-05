import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // for mobile devices
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta); // current position, target position, smooth time

    // for desktop devices
    // if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        // [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        [-state.pointer.y / 3, state.pointer.x, 0],
        0.25,
        delta
      ); // current position, target position, smooth time
    // }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1.0 : 1.2}>
      {children}
    </group>
  );
};

export default HeroCamera;
