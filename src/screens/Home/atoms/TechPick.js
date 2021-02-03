import styled from "styled-components";
import { Img } from "../../../components";
const TechPick = styled(Img)`
  /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
  object-fit: contain;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
TechPick.defaultProps = {
  height: [60, null, 80, 100],
  width: [60, null, 80, 100],
};

export default TechPick;
