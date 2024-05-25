const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.dummyticket.com/',
    viewportHeight: 938,
    viewportWidth: 1520,
    chromeWebSecurity: false,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
