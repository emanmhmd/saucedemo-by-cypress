const { defineConfig } = require("cypress");

module.exports = {
  "parallel": {
    "defaultManager": "local",
    "processes": 3
  },
  "video": true,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          const version = parseInt(browser.majorVersion)
          if (version >= 112) {
            launchOptions.args.push('--headless=new')
          }
        }
    
        return launchOptions
      })
    },
  },
};
