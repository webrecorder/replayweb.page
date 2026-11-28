/* eslint-env node */
import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  reporter: process.env.CI ? "github" : "list",

  timeout: 60_000,
  expect: { timeout: 60_000 },

  workers: process.env.CI ? 1 : undefined,
  retries: process.env.CI ? 1 : 0,
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },

  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: [
    {
      command: "yarn run test-start-prod",
      url: "http://127.0.0.1:9990",
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "yarn run test-start-embed",
      url: "http://127.0.0.1:8020",
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: "yarn run test-start-sandbox",
      url: "http://127.0.0.1:8030",
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
