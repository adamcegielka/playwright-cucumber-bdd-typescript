## playwright.config.ts

[TestOptions - playwright.dev](https://playwright.dev/docs/api/class-testoptions)

```javascript
import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 30000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        baseURL: 'http://www.automationpractice.pl',
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit' },
        },
    ],
}

export default config

```

run test:

`npx playwright test --config=paywright.config.ts --project=Chromium`
