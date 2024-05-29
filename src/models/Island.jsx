import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useKeyPress } from "react-use";

import islandScene from "../assets/3d/land.glb";

export function Island({ setCurrentStage, currentFocusPoint, ...props }) {
  const islandRef = useRef();
  const { camera } = useThree();

  const { scene } = useGLTF(islandScene);

  return (
    <mesh ref={islandRef} {...props}>
      <primitive object={scene} />
      <OrbitControls />
    </mesh>
  );
}
