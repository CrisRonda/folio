import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import styled from "styled-components";
const DownloadCCV = () => {
  const { formatMessage: f } = useIntl();
  const router = useRouter();
  const { locale } = router;
  const isES = locale === "es";

  const onClick = () =>
    window.open(
      isES ? process.env.NEXT_PUBLIC_CCV_ES : process.env.NEXT_PUBLIC_CCV_EN,
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
    transform: scale(1.1);
    color: #bdb7b7;
  }
`;
DownloadCCV.propTypes = {};
DownloadCCV.defaultProps = {};
export default DownloadCCV;
