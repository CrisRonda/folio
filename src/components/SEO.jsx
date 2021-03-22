import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ title, description, properties, urlAltern }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta name="robots" content="index, follow" />

    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    {/* Properties */}

    <link rel="dns-prefetch" href="https://cristian-ronda.tk/" />
    <link rel="preconnect" href="https://cristian-ronda.tk/" />
    <link rel="canonical" href={urlAltern} />
    <link rel="alternate" hrefLang="es-ec" href={urlAltern} />
    <link rel="alternate" hrefLang="x-default" href={urlAltern} />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
    <link rel="apple-touch-icon" href="/logo.png" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Head>
);
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlAltern: PropTypes.string,
};

SEO.defaultProps = {
  title: "Cristian Ronda",
  urlAltern: "",
  description: "",
};
export default SEO;
