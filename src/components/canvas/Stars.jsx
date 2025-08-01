import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 1200;

const Stars = () => {
  const ref = useRef({ rotation: { x: 0, y: 0, z: Math.PI / 4 } });
  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.2 });

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

const StarsCanvas = () => {
  const [showStars, setShowStars] = useState(false); // ✅ Use state instead of direct window check

  useEffect(() => {
    // ✅ Check screen size on mount
    if (typeof window !== "undefined" && window.innerWidth > 640) {
      setShowStars(true);
    }

    // ✅ Optional: Listen for resize and update dynamically (only if needed)
    const handleResize = () => {
      setShowStars(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showStars) return null; // ✅ Avoid rendering on small screens

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
