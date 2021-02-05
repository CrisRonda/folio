import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Box } from "./box";
export const ContainerTransition = ({ children, initialColor, endColor }) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);
  return (
    <Container
      endColor={endColor}
      initialColor={initialColor}
      transition={transition}
    >
      {children}
    </Container>
  );
};
ContainerTransition.propTypes = {
  children: PropTypes.any.isRequired,
  initialColor: PropTypes.string,
  endColor: PropTypes.string,
};
ContainerTransition.defaultProps = {
  initialColor: "white",
  endColor: "black",
};

const Container = styled(Box)`
  transition: all 1s ease-out;
  height: 100vh;
  ${({ transition, initialColor, endColor }) =>
    transition
      ? css`
          background-color: ${endColor};
        `
      : css`
          background-color: ${initialColor};
        `}
`;
