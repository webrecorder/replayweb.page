import { defineConfig } from '@playwright/test';
export default defineConfig({
  reporter: process.env.CI ? 'github' : 'list',
  webServer: [
    {
      command: 'yarn run start-prod',
      url: 'http://127.0.0.1:9990',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'yarn run test-start-embed',
      url: 'http://127.0.0.1:8020',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'yarn run test-start-sandbox',
      url: 'http://127.0.0.1:8030',
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    }
  ]
});
