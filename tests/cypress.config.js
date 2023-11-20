const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    browser: 'chrome',
    baseUrl: 'http://webapp:3000',
    specPattern: 'cypress/e2e/features/**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    screenshotsFolder: 'cypress/reports/screenshots',
    video: false,
  },
});
