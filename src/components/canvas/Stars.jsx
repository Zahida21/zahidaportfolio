// ✅ Imports
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

// ✅ Number of stars (can lower this for small devices)
const NUM_STARS = 1200; // ⚠️ Consider lowering to 800 for small screens if performance issues persist

const Stars = () => {
  // ✅ UseRef for animated rotation
  const ref = useRef({
    rotation: { x: 0, y: 0, z: Math.PI / 4 },
  });

  // ✅ Generate random star positions inside a sphere
  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.2 });

  // ✅ Animate star field rotation
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// ✅ Conditionally render based on screen width
// Prevents crash/hang on very small screens (≤ 640px)
const StarsCanvas = () => {
  // ✅ Only show stars if screen is wide enough
  if (typeof window !== "undefined" && window.innerWidth < 640) {
    return null; // ✅ Skip rendering to save memory on small screens
  }

  return (
    <div className="stars-canvas-container">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
