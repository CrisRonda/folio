import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default MyApp;
