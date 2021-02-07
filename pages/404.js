import Page from "../src/screens/404";
import LanguageButton from "../src/components/molecules/LanguageButton";
import DownloadCCV from "../src/components/molecules/DownloadCCV";
import styled from "styled-components";

const ErrorPage = (props) => {
  return (
    <>
      <DownloadCCV />
      <LanguageButton light />
      <Page />
      <Credits href="https://skfb.ly/6CwsF" target="_blank" rel="noreferrer">
        Psyduck "Psyduck - Pokémon" by Malin Helene Rosenkrantz Ottesen is
        licensed under CC Attribution-NonCommercial-ShareAlike
      </Credits>
    </>
  );
};

const Credits = styled.a`
  position: fixed;
  bottom: 16px;
  left: 16px;
  color: white;
  z-index: 3000;
  font-size: 10px;
  width: 225px;
  :hover {
    color: white;
  }
`;

export default ErrorPage;
