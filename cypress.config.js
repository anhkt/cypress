
const { defineConfig } = require("cypress");
require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

module.exports = defineConfig({
  env: process.env,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
    specPattern: 'cypress/api-test/**/**.cy.{js,jsx,ts,tsx}',
    reporter: "mochawesome"
  },
});
;
