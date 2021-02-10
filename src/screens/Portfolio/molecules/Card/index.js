import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Typography } from "../../../../components";

const Card = ({ title, photo, problem, solution, techs, info }) => {
  return (
    <Flex
      flexDirection="column"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Typography lineHeight={4} fontWeight="bold" fontSize={6}>
        {title}
      </Typography>
      <Typography fontSize={2}>{problem}</Typography>
      <Image loading="lazy" src={photo} alt={title} />
      <Typography
        width={"70%"}
        style={{ whiteSpace: "pre-line" }}
        textAlign="justify"
        fontSize={2}
      >
        {solution}
      </Typography>
      <Flex justifyContent="center" flex={1} alignItems="center">
        <TechImage src={info.icon} alt={info.label} />
        <Link href={info.link} target="_blank" rel="noreferer">
          {info.label}
        </Link>
      </Flex>
      <Flex
        justifyContent="center"
        flex={1}
        alignItems="center"
        flexWrap="wrap"
      >
        {techs.map(({ alt, img }, i) => (
          <Flex key={i} m={2} flexDirection="column">
            <TechImage src={img} alt={alt} loading={"lazy"} />
            <Typography fontSize={2}>{alt}</Typography>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const Image = styled.img`
  height: 400px;
  width: auto;
  max-width: 600px;
  object-fit: fill;
  margin: 16px;
  transition: all 0.6s ease;
  @media (max-width: 620px) {
    height: 350px;
    width: auto;
    max-width: 280px;
  }
`;

const TechImage = styled.img`
  width: auto;
  object-fit: contain;
  height: 28px;
  margin: 4px;
`;

const Link = styled.a`
  font-size: 16px;
  color: white;
  font-weight: bold;
  :hover {
    color: white;
  }
`;
Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  problem: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  info: PropTypes.shape().isRequired,
};
export default Card;
