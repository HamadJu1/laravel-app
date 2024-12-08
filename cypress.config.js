const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    retries: 2,
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    videosFolder: 'tests/cypress/videos',
    screenshotsFolder: 'tests/cypress/screenshots',
    fixturesFolder: 'tests/cypress/fixture',
    viewportHeight: 1080,
    viewportWidth: 1920,
    e2e: {
        setupNodeEvents(on, config) {
            return require('./tests/cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'https://acc.stage.silkysystems.com/',
        specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'tests/cypress/support/index.js',
    },
    env: {
        "authServerTokenUrl": "https://127.0.0.1:8000/",
        "email": "HMD",
        "password": "12345",
        "authUrl": "http://127.0.0.1:8000/",
        "baseUrl": "http://127.0.0.1:8000/",
    },
    projectId: "ddanji",
})
