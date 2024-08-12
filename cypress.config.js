const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  watchForFileChanges: false,
  retries: {
    runMode: 2,
    openMode: 1,
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-reports",
    overwrite: false,
    charts: true,
    html: false,
    json: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    timestamp: "ddmmyyyy_HH-MM-ss",
  },
})
