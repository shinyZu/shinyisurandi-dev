import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Keyboard = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/keyboard.glb");

  // Create a smooth tilting animation along the X-axis
  useFrame(({ clock }) => {
    if (group.current) {
      const elapsed = clock.getElapsedTime();
      group.current.rotation.x = 0.05 + Math.sin(elapsed) * 0.2; // adjust tilt angle as needed
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="keyboardfbx" scale={0.01}>
        <group
          name="Keyboard"
        //   position={[0.968, -20.717, -3.5]}
        //   rotation={[0.059, 0, 0]}
        //   scale={1.6}
        >
          <group name="keyboard" position={[0.605, 3.633, -2.405]}>
            <mesh
              name="keyboard_keyboard_0"
              castShadow
              receiveShadow
              geometry={nodes.keyboard_keyboard_0.geometry}
              material={materials.keyboard}
            />
            <mesh
              name="keyboard_keyboard_0_1"
              castShadow
              receiveShadow
              geometry={nodes.keyboard_keyboard_0_1.geometry}
              material={materials.keyboard}
            />
          </group>
          <mesh
            name="body_body_0"
            castShadow
            receiveShadow
            geometry={nodes.body_body_0.geometry}
            material={materials.body}
            position={[-0.605, -3.633, 2.405]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/keyboard.glb");

export default Keyboard;
