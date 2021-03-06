import {
  Box,
  FadeInUpBox,
  Flex,
  StaggerWrap,
  Typography,
  ContainerTransition,
} from "../../components";
import { useIntl } from "react-intl";
import FabNavigation from "../../components/molecules/FabNavigation";
import styled, { css } from "styled-components";
import SEO from "../../components/molecules/SEO";
import Infinity from "./Infinity";

const About = () => {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <SEO />
      <ContainerTransition>
        <Flex
          flexDirection="column"
          py={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            style={{
              zIndex: 1,
              maxWidth: "85%",
              color: "white",
              padding: 10,
              overflow: "scroll",
            }}
          >
            <StaggerWrap childrenDelay={6} ease="backInOut">
              <FadeInUpBox yOffset={64} duration={2}>
                <Typography fontSize={6} py={2} fontWeight="bold">
                  {f({ id: "about.title" })}
                </Typography>
              </FadeInUpBox>
              <FadeInUpBox yOffset={48} duration={3}>
                <Typography
                  fontSize={3}
                  lineHeight={3}
                  style={{
                    wordBreak: "break-word",
                    textAlign: "justify",
                    whiteSpace: "pre-line",
                  }}
                >
                  {f({ id: "about.description" })}
                  <br />
                  {f({ id: "about.description1" })}
                  <br />
                  {f({ id: "about.description2" })}
                  <a
                    href="https://cristian-ronda.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {f({ id: "about.link" })}
                  </a>
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <Infinity />
        </div>
      </ContainerTransition>
    </>
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
