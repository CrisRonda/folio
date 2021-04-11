import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import messages from "../messages";
import { AnimateSharedLayout } from "framer-motion";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps, router }) {
  const { locale, events } = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <AnimatePresence>
          <AnimateSharedLayout type="crossfade">
            <main style={{ width: "100% !important" }}>
              <Component {...pageProps} />
            </main>
          </AnimateSharedLayout>
        </AnimatePresence>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
