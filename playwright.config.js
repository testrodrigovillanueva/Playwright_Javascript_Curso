// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 20 * 1000,
  expect: {
    timeout: 30000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers: 30,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  //reporter: 'line',
  //reporter: 'list',
  //reporter: [['html', { outputFolder: 'Mis Reportes' }],
  // reporter: [['json', { outputFile: 'Reporte_Json.json' }]],
  //reporter: [['junit', { outputFile: 'Reporte_xml.xml' }]],
  reporter: [["html"],["line"], ["allure-playwright"]],
  // reporter: [
  //   ['list'],
  //   ['json', {  outputFile: 'reporte_json.json' }]
  // ],

  use: {    
    actionTimeout: 0,  
    headless: false,
    viewport: { width: 1850, height: 700 },
    browserName: 'chromium',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', //off, on, only-on-failure despues de falla 
    video: 'off', 
    // 'off'- No grabar video.
    // 'on'- Grabar video para cada prueba.
    // 'retain-on-failure'- Grabe video para cada prueba, pero elimine todos los videos de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Grabe video solo cuando vuelva a intentar una prueba por primera vez.
    trace: 'on',
    // 'off'- No registrar rastro.
    // 'on'- Registro de seguimiento para cada prueba.
    // 'retain-on-failure'- Registre el seguimiento de cada prueba, pero elimínelo de las ejecuciones de prueba exitosas.
    // 'on-first-retry'- Registre el seguimiento solo cuando vuelva a intentar una prueba por primera vez.
  },

//   projects: [
//     {
//       name: 'Desktop Chromium',
//       use: {
//         browserName: 'chromium',
//         viewport: { width: 1280, height: 720 },
//       },
//     },
//     {
//       name: 'Desktop Safari',
//       use: {
//         browserName: 'webkit',
//         viewport: { width: 1000, height: 720 },
//       }
//     },
//     {
//       name: 'Desktop Firefox',
//       use: {
//         browserName: 'firefox',
//         viewport: { width: 1800, height: 720 },
//       }
//     },
//     {
//       name: 'Mobile Chrome',
//       use: devices['Pixel 5'],
//     },
//     {
//       name: 'Mobile Safari',
//       use: devices['iPhone 12'],
//     },
//   ],
};

module.exports = config;
