import PropTypes from "prop-types";
import { useIntl } from "react-intl";

const useSEO = ({ seo_key_title, seo_key_description, route, image }) => {
  const { formatMessage: f } = useIntl();
  const url = `https://cristian-ronda.tk${route}`;
  const seoData = {
    seo_key_title,
    description: f({ id: seo_key_description }),
    urlAltern: url,
    properties: [
      {
        property: "og:url",
        content: url,
      },
      {
        property: "og:title",
        content: f({ id: seo_key_title }),
      },
      {
        property: "og:description",
        content: f({ id: seo_key_description }),
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "twitter:url",
        content: url,
      },
      {
        property: "twitter:title",
        content: f({ id: seo_key_title }),
      },
      {
        property: "twitter:description",
        content: f({ id: seo_key_description }),
      },
      {
        property: "twitter:image",
        content: image,
      },
    ],
  };

  return { seoData };
};
useSEO.propTypes = {
  image: PropTypes.string,
};
useSEO.defaultProps = {
  image:
    "https://res.cloudinary.com/dzh1db41l/image/upload/v1616447391/Group_14_jbqgpd.png",
};
export default useSEO;
