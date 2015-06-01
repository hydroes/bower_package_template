exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/**/*.js'],
  /**
   * Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
   * tests are run in both firefox and chrome
   */
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }
  ],
  /**
   * This should point to your running app instance, for relative path resolution in tests.
   */
  baseUrl: 'http://localhost:9000/index.html'
}