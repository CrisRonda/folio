import Portfolio from "../src/screens/Portfolio";
import LanguageButton from "../src/components/molecules/LanguageButton";
import FabNavigation from "../src/components/molecules/FabNavigation";
import { useIntl } from "react-intl";
const Page = () => {
  const { formatMessage: f } = useIntl();
  return (
    <>
      <LanguageButton light />
      <Portfolio />
      <FabNavigation left label={f({ id: "nextAboutMe" })} href="/about" />
      <FabNavigation label={f({ id: "nextContact" })} href="/contact" />
    </>
  );
};

export default Page;
