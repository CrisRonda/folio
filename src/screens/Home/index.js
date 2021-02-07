import styled, { css } from "styled-components";
import { picsList } from "../../utils/list";
import {
  Box,
  ContainerTransition,
  FadeInUpBox,
  Flex,
  GridTemplate,
  ScaleBox,
  StaggerWrap,
  Typography,
} from "../../components";
import { rand } from "../../utils";
import TechPick from "./atoms/TechPick";
import { useIntl } from "react-intl";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/molecules/SEO";

const MainHeading = styled(Typography)``;
MainHeading.defaultProps = {
  as: "h1",
  fontWeight: 2,
  color: "black",
  fontSize: [6, null, 10, 11],
  lineHeight: [3, null, 6, 8],
};

const Home = () => {
  const { formatMessage: f } = useIntl();
  const [data, setData] = useState(picsList);
  const { isSM } = useMediaQuery();
  const constraintsRef = useRef(null);
  const config = {
    type: "spring",
    damping: 100,
    stiffness: 100,
  };

  useEffect(() => {
    if (isSM) {
      const filter = picsList.filter((i) => i !== null);
      setData(filter);
    } else {
      setData(picsList);
    }
  }, [isSM]);

  return (
    <>
      <SEO />
      <ContainerTransition initialColor="black" endColor="white">
        <Flex
          flexDirection="column"
          width={"100vw"}
          height={"calc(100vh - 64px)"}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            style={{
              zIndex: 1,
              alignSelf: "center",
            }}
          >
            <StaggerWrap childrenDelay={0.2} ease="backInOut">
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragConstraints={{ left: 0, right: 0, bottom: 12 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                transition={config}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
              >
                <MainHeading mt={1} mb={["20px", null, "30px", "40px"]}>
                  <FadeInUpBox yOffset={64} duration={1}>
                    Cristian Ronda
                  </FadeInUpBox>
                </MainHeading>
              </motion.div>
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragConstraints={{ left: 0, right: 0, bottom: 12 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                transition={config}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
              >
                <FadeInUpBox yOffset={48} duration={1}>
                  <Typography color="black" fontSize={5}>
                    {f({ id: "welcome" })}
                  </Typography>
                </FadeInUpBox>
              </motion.div>
            </StaggerWrap>
          </Box>
        </Flex>
        {/* <Flex justifyContent="center" style={{ overflowX: "hidden" }}> */}
        <GridTemplate>
          {data.map((item, key) =>
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
        {/* </Flex> */}
      </ContainerTransition>
    </>
  );
};

export default Home;
