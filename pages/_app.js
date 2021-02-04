import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import messages from "../messages";

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            style={{ width: "99% !important" }}
            variants={{
              pageInitial: {
                translateX: `-100vw`,
              },
              pageAnimate: {
                translateX: `0vw`,
                // transform: "scale(1)",
              },
              pageExit: {
                translateX: `100vw`,

                // filter: `invert()`,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
