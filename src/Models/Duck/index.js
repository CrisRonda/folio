import DuckModel from "./Model";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";

const Duck = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
      }}
    >
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[40, 40, 20]} />
        <OrbitControls />
        <Suspense fallback={<p>Cargando...</p>}>
          <DuckModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Duck;
