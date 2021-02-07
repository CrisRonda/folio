import styled from "styled-components";
import { Box } from "../../atoms";
import { Flex } from "../../atoms/flex";

const Pagination = ({
  paginate,
  content,
  activeBullet,
  setActiveBullet,
  setPage,
}) => {
  return (
    <Flex position="relative" alignItems="center" style={{ zIndex: 1 }}>
      <Arrow onClick={() => paginate(-1)}>{"<"}</Arrow>

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

      <Arrow onClick={() => paginate(1)}>{">"}</Arrow>
    </Flex>
  );
};

Pagination.propTypes = {};
Pagination.defaultProps = {};
const Arrow = styled(Box)`
  cursor: pointer;
`;
Arrow.defaultProps = {
  color: "white",
  fontSize: 2,
  fontWeight: 2,
  p: 2,
};
const Bullet = styled(Box)`
  cursor: pointer;
`;
Bullet.defaultProps = {
  display: "inline-block",
  borderRadius: 1,
  height: 12,
  width: 12,
  m: 1,
};
export default Pagination;
