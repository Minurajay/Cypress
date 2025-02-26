const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});

// module.exports = {
//   defaultCommandTimeout: 10000, // Increases the default timeout for commands (e.g., cy.get())
//   responseTimeout: 60000,      // Increases the time to wait for responses (e.g., cy.wait(), cy.request())
//   requestTimeout: 10000,       // Changes timeout for requests (e.g., cy.request(), cy.wait())
//   pageLoadTimeout: 120000,     // Adjusts timeout for page loads (e.g., cy.visit())
// };

