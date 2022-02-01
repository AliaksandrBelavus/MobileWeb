exports.config = {
  seleniumAddress: "http://127.0.0.1:4723/wd/hub",

  capabilities: {
    browserName: "chrome",
    platformName: "Android",
    deviceName: "myDevice",
  },

  specs: ["../specs/*.js"],

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
