import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 * see https://playwright.dev/docs/api/class-testoptions
 */
export default defineConfig({

  //Vai executar au carregar o playwright
  //globalSetup: "./global-setup.ts", //dados precarregados

  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //----------------------------------------------------------------------------------------------------------
    // Basic Options
    //----------------------------------------------------------------------------------------------------------
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via browserContext.storageState(). */
    //storageState: 'storage-state.json',


    //----------------------------------------------------------------------------------------------------------
    // Emulation Options
    //----------------------------------------------------------------------------------------------------------
    /* Emulates 'prefers-colors-scheme' media feature, supported values are 'light', 'dark', 'no-preference'. */
    colorScheme: 'dark',

    /* Specify user locale, for example en-GB, de-DE, etc. Locale will affect navigator.language value, Accept-Language request header */
    /* Defaults to the system default locale. */
    //locale: 'en-US',

    /* Changes the timezone of the context. */
    /* Ref.: https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt */
    //timezoneId: 'America/Sao_Paulo',

    /* geolocation */
    //geolocation: { longitude: 12.492507, latitude: 41.889938, accuracy: 0 },

    /* A list of permissions to grant to all pages in this context */
    //permissions: ['notifications'],

    /* Emulates consistent viewport for each page. Defaults to an 1280x720 viewport. Use null to disable the consistent viewport emulation. */
    viewport: {
      width: 1366,
      height: 768
    },

    /* Name of the browser that runs tests. Defaults to 'chromium'. */
    browserName: 'chromium',

    /* Whether to run browser in headless mode. More details for Chromium and Firefox. Defaults to true unless the devtools option is true. */
    headless: false,

    /* Specifies if viewport supports touch events. Defaults to false. */
    hasTouch: false,

    /* Whether the meta viewport tag is taken into account and touch events are enabled. isMobile is a part of device, so you don't actually need to set it manually. Defaults to false */
    isMobile: false,

    /* Whether or not to enable JavaScript in the context. Defaults to true. */
    //javaScriptEnabled: true,



    //----------------------------------------------------------------------------------------------------------
    // Network Options
    //----------------------------------------------------------------------------------------------------------
    /*Whether to emulate network being offline. Defaults to false. */
    //offline: false,

    /* Timeout for each navigation action in milliseconds. Defaults to 0 (no timeout). */
    //navigationTimeout: 3000,

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    //actionTimeout: 0,

    /*Credentials for HTTP authentication. If no origin is specified, the username and password are sent to any servers upon unauthorized responses. */
    // httpCredentials: {
    //   username: 'user',
    //   password: 'pass',
    // },

    /*Whether to ignore HTTPS errors when sending network requests. Defaults to false. */
    ignoreHTTPSErrors: true,

    /* An object containing additional HTTP headers to be sent with every request. Defaults to none. */
    // extraHTTPHeaders: {
    //   // We set this header per GitHub guidelines.
    //   Accept: 'application/vnd.github.v3+json',
    //   // Add authorization token to all requests.
    //   // Assuming personal access token available in the environment.
    //   Authorization: `token ${process.env.API_TOKEN}`,
    // },

    /* Network proxy settings. */
    // proxy: {
    //   server: 'http://myproxy.com:3128',
    //   bypass: 'localhost',
    // },

    acceptDownloads: false,

    /* Toggles bypassing page's Content-Security-Policy. Defaults to false. */
    bypassCSP: false,


    //----------------------------------------------------------------------------------------------------------
    // Recording Options
    //----------------------------------------------------------------------------------------------------------
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry', //so gera caso precisar retentar ou falhar

    /* Whether to record video for each test. Defaults to 'off'. */
    video: 'on-first-retry', //so gera caso precisar retentar ou falhar

    /* Whether to automatically capture a screenshot after each test. Defaults to 'off'. */
    screenshot: 'only-on-failure', //so gera caso precisar retentar ou falhar


    //----------------------------------------------------------------------------------------------------------
    // Other Options
    //----------------------------------------------------------------------------------------------------------
    /* Whether to allow sites to register Service workers. Defaults to 'allow'. */
    serviceWorkers: 'allow',

    /* Custom attribute to be used in page.getByTestId(). data-testid is used by default. */
    //testIdAttribute: 'pw-test-id',

    //----------------------------------------------------------------------------------------------------------
    // More browser and context options
    //----------------------------------------------------------------------------------------------------------
    /* Deixa a execução do teste mais lento, para poder acompanhar */
    launchOptions: {
      slowMo: 500,
    },



  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'Edge',
      use: {
        // Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
        channel: 'msedge',
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
