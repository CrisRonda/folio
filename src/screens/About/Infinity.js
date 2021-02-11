import { Canvas, useFrame } from "react-three-fiber";
import PropTypes from "prop-types";
import { OrbitControls } from "drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars({ count, speedRotation, speedScale, dotColor, opacityDots }) {
  let group = useRef();
  let theta = 0;
  useFrame(() => {
    const r = Math.sin(THREE.Math.degToRad((theta += speedRotation)));
    const s = 3 * Math.cos(THREE.Math.degToRad(theta * speedScale));

    group.current.rotation.set(0, 0, r);
    group.current.scale.set(s, s, s);
  });
  const [geo, mat, vertices, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(dotColor),
      opacity: opacityDots,
      transparent: true,
    });
    const coords = new Array(count)
      .fill()
      .map((i) => [
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
      ]);
    return [geo, mat, vertices, coords];
  }, []);

  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  );
}

const Infinity = ({
  bg,
  starts,
  speedRotation,
  speedScale,
  dotColor,
  opacityDots,
}) => {
  return (
    <Canvas style={{ background: bg }}>
      <ambientLight intensity={5} />
      <pointLight />
      <OrbitControls />
      <Stars
        count={starts}
        speedScale={speedScale}
        speedRotation={speedRotation}
        dotColor={dotColor}
        opacityDots={opacityDots}
      />
    </Canvas>
  );
};
Infinity.propTypes = {
  bg: PropTypes.string,
  starts: PropTypes.number,
  speedRotation: PropTypes.number,
  speedScale: PropTypes.number,
  dotColor: PropTypes.string,
  opacityDots: PropTypes.number,
};
Infinity.defaultProps = {
  bg: "black",
  starts: 2000,
  speedRotation: 0.1,
  speedScale: 2,
  dotColor: "white",
  opacityDots: 0.3,
};

export default Infinity;
