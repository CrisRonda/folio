import { useState } from "react";
import styled from "styled-components";
import { ContainerTransition, Typography, Flex } from "../../components/index";
import Dots from "../../Models/Dots";
import { MotionSlider } from "../../components/molecules/Slider/";
import useContent from "./hooks/useContent";
import Card from "./molecules/Card";
import SEO from "../../components/molecules/SEO";

const values = {
  0: {
    play: false,
    duration: 1,
    label: "▶️",
  },
  1: {
    play: true,
    duration: 7,
    label: "▶️x2",
  },
  2: {
    play: true,
    duration: 3.5,
    label: "▶️x3",
  },
  3: {
    play: true,
    duration: 1.2,
    label: "🛑",
  },
};

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const onClickButton = () => setIndex((bef) => (bef >= 3 ? 0 : (bef += 1)));
  const enablePlay = values[index].play;
  const { content } = useContent();
  return (
    <>
      <SEO />
      <ContainerTransition>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            overflow: "scroll",
            justifyItems: "center",
          }}
        >
          <PlayButton onClick={onClickButton}>
            <Typography fontSize={3} color="black">
              {values[index].label}
            </Typography>
          </PlayButton>
          <Flex
            flexDirection="column"
            py={4}
            justifyContent="center"
            alignItems="center"
            m="auto"
          >
            <MotionSlider content={content} Component={Card} />
          </Flex>
          {enablePlay && <Dots {...values[index]} />}
        </div>
      </ContainerTransition>
    </>
  );
};

const PlayButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  top: 32px;
  left: 32px;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease;
  cursor: pointer;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transform: scale(1.5);
  }
  :active {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;
export default Portfolio;
