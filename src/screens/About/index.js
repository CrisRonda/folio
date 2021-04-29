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
import SEO from "../../components/SEO";
import Infinity from "./Infinity";
import useSEO from "../../hooks/useSEO";

const About = () => {
  const { formatMessage: f } = useIntl();
  const { seoData } = useSEO({
    seo_key_description: "seo_description_contact",
    seo_key_title: "seo_title_contact",
    route: "/contact",
  });
  return (
    <>
      <SEO {...seoData} />
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
                <img
                  src={process.env.NEXT_PUBLIC_PHOTO_URL}
                  style={{
                    minWidth: 250,
                    minHeight: 250,
                    width: "25vw",
                    height: "25vw",
                    borderRadius: "50%",
                    marginBottom: 16,
                    marginTop: 16,
                  }}
                />
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
