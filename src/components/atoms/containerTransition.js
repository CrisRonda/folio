import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Box } from "./box";
export const ContainerTransition = ({ children, color }) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);
  return (
    <Container color={color} transition={transition}>
      {children}
    </Container>
  );
};
ContainerTransition.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
};
ContainerTransition.defaultProps = {
  color: "black",
};

const Container = styled(Box)`
  transition: all 1s ease-out;
  height: 100vh;
  ${({ transition, color }) =>
    transition
      ? css`
          background-color: ${color};
        `
      : css`
          background-color: white;
        `}
`;
