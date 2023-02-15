// @ts-check
const { devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
   
    timeout: 5000
  },
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
    baseURL:"https://demoqa.com/radio-button",    
    navigationTimeout: 60000,
    actionTimeout: 50000, 
    headless: false,
    viewport: { width: 1800, height: 800 },
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', //off, on, only-on-failure despues de falla 
    video: 'on', 
    // 'off'- No grabar video.
    // 'on'- Grabar video para cada prueba.
    // 'retain-on-failure'- Grabe video para cada prueba, pero elimine todos los videos de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Grabe video solo cuando vuelva a intentar una prueba por primera vez.
    trace: 'retain-on-failure',
    // 'off'- No registrar rastro.
    // 'on'- Registro de seguimiento para cada prueba.
    // 'retain-on-failure'- Registre el seguimiento de cada prueba, pero elimínelo de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Registre el seguimiento solo cuando vuelva a intentar una prueba por primera vez.
  },

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ],


};

module.exports = config;
