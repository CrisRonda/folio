import styled from "styled-components";
import { Img } from "../../../components";
const TechPick = styled(Img)`
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
