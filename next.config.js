const withTM = require("next-transpile-modules")(["drei", "three"]);
const withPlugins = require("next-compose-plugins");

const nexConfig = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
};

module.exports = withPlugins([withTM], nexConfig);
