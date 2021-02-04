import PropTypes from "prop-types";
import {
  Box,
  FadeInUpBox,
  Flex,
  StaggerWrap,
  Typography,
} from "../../components";
import { useIntl } from "react-intl";
import FabNavigation from "../../components/molecules/FabNavigation";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";

const About = () => {
  const [black, setBlack] = useState(false);
  const { formatMessage: f } = useIntl();
  useEffect(() => {
    setBlack(true);
  }, []);
  return (
    <Container black={black}>
      <Flex
        flexDirection="column"
        height={"calc(100vh - 64px)"}
        justifyContent="center"
        alignItems="center"
      >
        <Box style={{ zIndex: 1 }}>
          <StaggerWrap childrenDelay={0.2} ease="backInOut">
            <FadeInUpBox yOffset={64} duration={1}>
              {f({ id: "about.title" })}
            </FadeInUpBox>
            <FadeInUpBox yOffset={48} duration={1}>
              <Typography
                fontSize={[4, null, 5]}
                style={{ wordBreak: "break-word" }}
              >
                {f({ id: "about.description" })}
              </Typography>
            </FadeInUpBox>
          </StaggerWrap>
        </Box>
      </Flex>
      <FabNavigation
        position="absolute"
        label={f({ id: "home" })}
        href="/"
        left
        light
      />
      <FabNavigation
        position="absolute"
        label={f({ id: "nextFolio" })}
        href="/folio"
        light
      />
    </Container>
  );
};

const Container = styled(Box)`
  transition: all 1s ease-out;
  height: 100vh;
  ${({ black }) =>
    black
      ? css`
          background-color: black;
        `
      : css`
          background-color: white;
        `}
`;
export default About;
