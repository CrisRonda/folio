import * as React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Box } from "../../atoms/box";
import { MotionBox } from "../../atoms/motion-box";
import { Flex } from "../../atoms/flex";
import Pagination from "./Pagination";

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export const MotionSlider = ({ content, Component }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeBullet, setActiveBullet] = useState(0);
  const i = page;
  const paginate = (newDirection) => {
    if (page + newDirection < content.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      setActiveBullet(page + newDirection);
    }
    if (page + newDirection === content.length) {
      setPage([0, 0]);
      setActiveBullet(0);
    }
    if (page + newDirection === -1) {
      setPage([content.length - 1, 0]);
      setActiveBullet(content.length - 1);
    }
  };
  const onDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < swipeConfidenceThreshold) {
      paginate(-1);
    } else if (swipe > -swipeConfidenceThreshold) {
      paginate(1);
    }
  };

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        <MotionBox
          position="relative"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ flex: 1, width: "100%", height: "100%" }}
          transition={{
            x: {
              type: "tween",
              stiffness: 800,
              damping: 100,
              duration: 0.1,
            },
            opacity: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
        >
          <Slider>
            <Component {...content[i]} />
          </Slider>
        </MotionBox>
      </AnimatePresence>
      <Pagination
        paginate={paginate}
        content={content}
        activeBullet={activeBullet}
        setActiveBullet={setActiveBullet}
        setPage={setPage}
      />
    </>
  );
};
const Slider = styled(Box)``;
Slider.defaultProps = {
  p: 3,
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
