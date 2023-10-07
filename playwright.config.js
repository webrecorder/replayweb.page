import { defineConfig } from '@playwright/test';
export default defineConfig({
  webServer: [
    {
      command: 'yarn run start-prod',
      url: 'http://127.0.0.1:9990',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'yarn run start-test-embed',
      url: 'http://127.0.0.1:8020',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ]
});
