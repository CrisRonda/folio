import Page from "../src/screens/About";
import LanguageButton from "../src/components/molecules/LanguageButton";
import DownloadCCV from "../src/components/molecules/DownloadCCV";

const Example = (params) => (
  <>
    <DownloadCCV />
    <LanguageButton light />
    <Page />
  </>
);
export default Example;
