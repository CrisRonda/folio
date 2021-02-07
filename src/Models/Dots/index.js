import { Canvas } from "react-three-fiber";
import Model from "./Model";
import Proptypes from "prop-types";

const Dots = ({ play, duration }) => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
      <Canvas
        orthographic
        colorManagement={false}
        camera={{ position: [0, 0, 100], zoom: 20 }}
      >
        <Model duration={duration} play={play} />
      </Canvas>
    </div>
  );
};
Dots.propTypes = {
  play: Proptypes.bool,
  duration: Proptypes.number,
};
Dots.defaultProps = {
  play: false,
  duration: 0,
};
export default Dots;
