import { useIntl } from "react-intl";
import styled from "styled-components";
const DownloadCCV = () => {
  const { formatMessage: f } = useIntl();
  const onClick = () =>
    window.open(
      "https://drive.google.com/file/d/112ZHoT4wste6NzFrrh5lf-mvpYIH4A_h/view?usp=sharing",
      "_blank"
    );

  return <Button onClick={onClick}>⇣⇣{f({ id: "downloadCV" })}⇣⇣</Button>;
};

const Button = styled.button`
  position: fixed;
  display: flex;
  top: 16px;
  left: 16px;
  z-index: 3000;
  cursor: pointer;
  padding: 4px;
  font-size: 16px;
  border-radius: 8px;
  color: #5e5656;
  background-color: transparent;
  transition: all 0.5s ease-out;
  border: none;
  outline: none;
  :hover {
    background-color: black;
    color: white;
  }
`;
DownloadCCV.propTypes = {};
DownloadCCV.defaultProps = {};
export default DownloadCCV;
