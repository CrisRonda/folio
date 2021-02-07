import Contact from "../src/screens/Contact";
import LanguageButton from "../src/components/molecules/LanguageButton";
import FabNavigation from "../src/components/molecules/FabNavigation";
import { useIntl } from "react-intl";
import DownloadCCV from "../src/components/molecules/DownloadCCV";
const Page = () => {
  const { formatMessage: f } = useIntl();
  return (
    <>
      <DownloadCCV />
      <LanguageButton />
      <Contact />
      <FabNavigation left label={f({ id: "nextFolio" })} href="/folio" />
      <FabNavigation label={f({ id: "home" })} href="/" />
    </>
  );
};

export default Page;
