import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import modern from "../assets/3d/modern.glb";

export function Island({ setCurrentStage, currentFocusPoint, ...props }) {
  const islandRef = useRef();
  const { camera } = useThree();

  const { scene: modernScene } = useGLTF(modern);

  useEffect(() => {
    camera.position.set(0, 1, 1, 20);
  }, [camera]);

  return (
    <group ref={islandRef} {...props}>
      <primitive object={modernScene} />
      <OrbitControls />
    </group>
  );
}
