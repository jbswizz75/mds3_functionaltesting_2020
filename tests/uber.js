module.exports = {
  'Open Website Uber': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.title('Uber – Augmentez vos revenus en conduisant ou commandez une course dès maintenant')
  },

  'Check block login in the header wrapper': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('#sign-in')
      .assert.elementPresent('#signup')
  },

  'Check login block in two sections': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#sign-in')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('//a[@data-tracking-name="cta-login-ride"]')
      .assert.elementPresent('//a[@data-tracking-name="cta-login-drive"]')
      .useCss()
  },

  'Check login chauffeur section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#sign-in')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('//a[@data-tracking-name="cta-login-drive"]')
      .useCss()
  },

  'Check login passenger section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#sign-in')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('//a[@data-tracking-name="cta-login-ride"]')
      .useCss()
  },

  'Check Registration block in two sections': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#signup')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('//a[@aria-label="Devenez chauffeur"]')
      .assert.elementPresent('//a[@aria-label="Commandez une course"]')
      .useCss()
  },

  'Check Registration block with Devenir Professional section': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('#\\/signup\\/')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .click('//a[@aria-label="Devenez chauffeur"]')
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .useCss()
  }

    browser.end();
  }
}