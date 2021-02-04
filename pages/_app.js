import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import messages from "../messages";
import { AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <AnimatePresence>
          <AnimateSharedLayout type="crossfade">
            <div style={{ width: "100% !important" }}>
              <Component {...pageProps} />
            </div>
          </AnimateSharedLayout>
        </AnimatePresence>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
