export const browserstackConfig = {
  username: process.env.BROWSERSTACK_USERNAME || '',
  accessKey: process.env.BROWSERSTACK_ACCESS_KEY || '',

  browsers: [
    {
      browser: 'chrome',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '11',
      name: 'Chrome Latest - Windows 11',
    },
    {
      browser: 'firefox',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
      name: 'Firefox Latest - Windows 10',
    },
    {
      browser: 'safari',
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Ventura',
      name: 'Safari Latest - macOS Ventura',
    },
  ],

  getCdpUrl(capabilities: Record<string, string>): string {
    const caps = encodeURIComponent(JSON.stringify(capabilities))
    return 'wss://cdp.browserstack.com/playwright?caps=' + caps
  },
}