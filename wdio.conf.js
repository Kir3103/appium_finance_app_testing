exports.config = {
    runner: 'local',
    specs: [
        './test/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        automationName: 'UiAutomator2',
        deviceName: 'myDevice',
        app: require('path').resolve('./app/finance.apk'),
    }],

    port: 4723,
    path: '/wd/hub',

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },
    before: async function (capabilities, specs) {
        await browser.url('http://localhost:4723/wd/hub')
    },
    after: async function (result, capabilities, specs) {
        await browser.reloadSession()
    },
}
