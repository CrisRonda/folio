import Page from "../src/screens/Home";
import LanguageButton from "../src/components/molecules/LanguageButton";
import FabNavigation from "../src/components/molecules/FabNavigation";
import { useIntl } from "react-intl";
const Example = () => {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <LanguageButton />
      <Page />
      <FabNavigation label={f({ id: "nextAboutMe" })} href="/about" />
    </>
  );
};
export default Example;
