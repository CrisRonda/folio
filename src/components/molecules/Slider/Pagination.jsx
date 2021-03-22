import styled, { css } from "styled-components";
import { Box } from "../../atoms";
import { Flex } from "../../atoms/flex";

const Pagination = ({
  paginate,
  content,
  activeBullet,
  setActiveBullet,
  setPage,
}) => {
  if (typeof window !== "undefined") {
    document.addEventListener("keydown", ({ key }) => {
      if (key === "ArrowRight") {
        paginate(1);
      }
      if (key === "ArrowLeft") {
        paginate(-1);
      }
    });
  }
  return (
    <Flex position="relative" alignItems="center" style={{ zIndex: 1 }}>
      <Arrow left onClick={() => paginate(-1)}>
        {"<"}
      </Arrow>
      <ContainerBullets>
        {content.map((item) => (
          <Bullet
            key={item.id}
            onClick={() => {
              setPage([item.id, 0]);
              setActiveBullet(item.id);
            }}
            bg={activeBullet === item.id ? "white" : "text"}
          />
        ))}
      </ContainerBullets>

      <Arrow onClick={() => paginate(1)}>{">"}</Arrow>
    </Flex>
  );
};

Pagination.propTypes = {};
Pagination.defaultProps = {};
const Arrow = styled(Box)`
  position: fixed;
  font-size: 4rem;
  ${({ left }) =>
    left
      ? css`
          top: 50%;
          left: -8px;
        `
      : css`
          top: 50%;
          right: -8px;
        `}

  cursor: pointer;
`;
Arrow.defaultProps = {
  color: "white",
  fontSize: 2,
  fontWeight: 2,
  p: 2,
};
const ContainerBullets = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.4s ease;
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 30%;
    left: 8px;
  }
`;
const Bullet = styled(Box)`
  cursor: pointer;
`;
Bullet.defaultProps = {
  display: "inline-block",
  borderRadius: 2,
  height: 20,
  width: 20,
  m: 1,
};
export default Pagination;
