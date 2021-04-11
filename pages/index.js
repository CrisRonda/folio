import Page from "../src/screens/Home";
import LanguageButton from "../src/components/molecules/LanguageButton";
import FabNavigation from "../src/components/molecules/FabNavigation";
import DownloadCCV from "../src/components/molecules/DownloadCCV";
import { useIntl } from "react-intl";
import useSEO from "../src/hooks/useSEO";
import SEO from "../src/components/SEO";

const Example = () => {
  const { formatMessage: f } = useIntl();
  const { seoData } = useSEO({
    seo_key_description: "seo_description_index",
    seo_key_title: "seo_title_index",
    route: "/",
  });
  return (
    <>
      <SEO {...seoData} />
      <DownloadCCV />
      <LanguageButton />
      <Page />
      <FabNavigation label={f({ id: "nextAboutMe" })} href="/about" />
    </>
  );
};
export default Example;
