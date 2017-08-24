// Karma configuration
// Generated on Sat May 13 2017 20:26:03 GMT+0530 (India Standard Time)

module.exports = function(config) {

  var appBase    = 'src/';       // transpiled app JS and map files
  //var appAssets  = '/base/app/'; // component assets fetched by Angular's compiler

  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = 'src/testing/'; // transpiled test JS and map files
  var testingSrcBase = 'src/testing/'; // test source TS files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-htmlfile-reporter')
    ],

    client: {
      builtPaths: [appBase, testingBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      //fix to run test cases in PhantomJS
      'node_modules/systemjs/dist/system-polyfills.src.js',
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
      //added ngx-mydatepicker dependencies
      { pattern: 'node_modules/ngx-mydatepicker/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/ngx-mydatepicker/**/*.js.map', included: false, watched: false },
      { pattern: appBase + '/systemjs.config.js', included: false, watched: false },
      { pattern: appBase + '/systemjs.config.extras.js', included: false, watched: false },
        'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels
      //added primeng dependencies
      { pattern: 'node_modules/primeng/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/primeng/**/*.js.map', included: false, watched: false },
      // transpiled application & spec code paths loaded via module imports
      { pattern: appBase + '**/*.js', included: false, watched: true },
      { pattern: testingBase + '**/*.js', included: false, watched: true },


      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },
      { pattern: appBase + '**/!(units).html', included: false, watched: true },

      // Added these mappings only for debugging by opening the dev tools
      { pattern: appBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testingBase + '**/*.js.map', included: false, watched: false}
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for modules fetched by SystemJS
      '/base/src/node_modules/': '/base/node_modules/'
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'kjhtml', 'html'],
    htmlReporter: {
      outputFile: 'src/tests/reports/units.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'SP3 Apps',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    captureTimeout: 60000,
    browserNoActivityTimeout: 100000,
    browsers: ['PhantomJS'],  //Chrome or PhantomJS.  PhantomJS is a must in CI
    singleRun: true
  })
}
