// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROMIUM_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../coverage/text-editor'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    restartOnFileChange: true,
    browsers: ['ChromiumHeadlessCustom'],
    customLaunchers: {
      ChromiumHeadlessCustom: {
        base: 'ChromiumHeadless',
        flags: [
          // required to run without privileges in Docker
          '--no-sandbox',
          '--headless',
          '--disable-translate',
          '--disable-extensions',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          // Should speed up tests
          '--proxy-server=\'direct://\'',
          '--proxy-bypass-list=*'
        ]
      }
    },
    singleRun: true,
  });
};
