import styled from "styled-components";
import { picsList } from "../../utils/list";
import {
  Box,
  Container,
  FadeInUpBox,
  Flex,
  GridTemplate,
  ScaleBox,
  StaggerWrap,
  Typography,
} from "../../components";
import { rand } from "../../utils";
import TechPick from "./atoms/TechPick";

const MainHeading = styled(Typography)``;
MainHeading.defaultProps = {
  as: "h1",
  fontWeight: 2,
  color: "textTitle",
  fontSize: [6, null, 10, 11],
  lineHeight: [3, null, 6, 8],
};

const Home = () => {
  return (
    <Box>
      <Container>
        <Flex
          flexDirection="column"
          height={"calc(100vh - 64px)"}
          justifyContent="center"
          alignItems="center"
        >
          <Box style={{ zIndex: 1 }}>
            <StaggerWrap childrenDelay={0.2} ease="backInOut">
              <MainHeading mt={1} mb={["20px", null, "30px", "40px"]}>
                <FadeInUpBox yOffset={64} duration={1}>
                  Cristian Ronda
                </FadeInUpBox>
                {/* <FadeInUpBox yOffset={64} duration={1}>
                  Desarrollador
                </FadeInUpBox> */}
              </MainHeading>
              <FadeInUpBox yOffset={48} duration={1}>
                <Typography fontSize={[4, null, 5]}>
                  Bienvenido a mi web, soy desarrollador de aplicaciones web y
                  multiplataforma.
                </Typography>
              </FadeInUpBox>
            </StaggerWrap>
          </Box>
        </Flex>
        <Flex justifyContent="center" style={{ overflowX: "hidden" }}>
          <GridTemplate>
            {picsList.map((item, key) =>
              item !== null ? (
                <Box key={key} pt={key % 2 === 0 ? 4 : 0} textAlign="center">
                  <ScaleBox duration={1} delayOrder={rand(1, 12)}>
                    <TechPick src={item.src} alt={item.alt} />
                  </ScaleBox>
                </Box>
              ) : (
                <Box key={key} />
              )
            )}
          </GridTemplate>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
