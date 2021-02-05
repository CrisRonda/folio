import styled from "styled-components";
import NextLink from "next/link";

export const Link = ({ children, href = "/" }) => (
  <NextLink href={href}>
    <StyledLink>{children}</StyledLink>
  </NextLink>
);

const StyledLink = styled.a`
  transition: all 0.5s ease;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;
Link.defaultProps = {
  as: "a",
  color: "link",
};
