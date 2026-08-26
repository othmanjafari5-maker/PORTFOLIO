import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// This is the only Three.js-specific piece: a mesh (shape) that
// rotates a little every frame.
function SpinningBox() {
  // useRef gives us a direct handle to the actual Three.js object,
  // so we can change its rotation/position imperatively inside
  // useFrame without triggering a React re-render.
  const meshRef = useRef();

  // useFrame runs once per rendered frame (usually ~60 times a second).
  // `delta` is the time in seconds since the last frame — using it
  // (instead of a fixed number) keeps the spin speed consistent
  // no matter how fast or slow the device renders.
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.4;
    meshRef.current.rotation.y += delta * 0.6;
  });

  return (
    <mesh ref={meshRef}>
      {/* geometry = the shape. args are the constructor arguments,
          same as `new THREE.BoxGeometry(1.2, 1.2, 1.2)` */}
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      {/* material = how the surface looks/reacts to light */}
      <meshStandardMaterial color="#E0913D" />
    </mesh>
  );
}

export default function Scene() {
  return (
    // Canvas sets up the scene, camera, and render loop for you.
    // It needs a parent with an explicit height (set in App.jsx) or
    // it collapses to 0px tall.
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      {/* meshStandardMaterial reacts to light, so we need at least one */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.8} />

      <SpinningBox />
    </Canvas>
  );
}