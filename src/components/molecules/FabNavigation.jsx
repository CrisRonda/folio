import PropTypes from "prop-types";
import Link from "next/link";
import { Box } from "../atoms";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
const Fab = styled(Box)`
  position: ${({ position }) => position};
  bottom: 0;
  z-index: 3000;
  ${({ left }) =>
    left
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  ${({ light, theme }) =>
    light
      ? css`
          /* background-color: ${theme.colors.textTitleInverse}; */
          color: white;
        `
      : css`
          /* background-color: ${theme.colors.link}; */
          color: ${theme.colors.link};
        `}
`;

Fab.defaultProps = {
  background: "transparent",
  borderRadius: 1,
  margin: 1,
  padding: 1,
};
const FabNavigation = ({ href, label, left, position, light }) => {
  const { locale } = useRouter();
  return (
    <Link href={href} locale={locale}>
      <a>
        <Fab left={left} position={position} light={light}>
          {label}
        </Fab>
      </a>
    </Link>
  );
};
FabNavigation.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  left: PropTypes.bool,
  position: PropTypes.string,
  light: PropTypes.bool,
};
FabNavigation.defaultProps = {
  href: "/ ",
  position: "fixed",
  left: false,
  light: false,
};
export default FabNavigation;
