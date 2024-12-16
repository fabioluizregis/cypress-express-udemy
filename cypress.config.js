const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    env: {
      baseURL: 'http://localhost:3000/',
      apiURL: 'http://localhost:3333/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
