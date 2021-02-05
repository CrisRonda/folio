import Page from "../src/screens/404";
import LanguageButton from "../src/components/molecules/LanguageButton";

const ErrorPage = (props) => {
  return (
    <>
      <LanguageButton light />
      <Page />
    </>
  );
};

export default ErrorPage;
