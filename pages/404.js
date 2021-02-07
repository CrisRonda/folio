import Page from "../src/screens/404";
import LanguageButton from "../src/components/molecules/LanguageButton";
import DownloadCCV from "../src/components/molecules/DownloadCCV";

const ErrorPage = (props) => {
  return (
    <>
      <DownloadCCV />
      <LanguageButton light />
      <Page />
    </>
  );
};

export default ErrorPage;
