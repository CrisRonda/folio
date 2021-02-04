import { addDecorator } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import messages from "../messages";

const getMessages = (locale) => messages[locale];

setIntlConfig({
  locales: ["en", "es"],
  defaultLocale: "en",
  getMessages,
});

addDecorator(withIntl);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
