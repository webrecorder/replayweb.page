import { test, expect } from '@playwright/test';
import { createServer } from "http-server";


test("same-domain embed is loading", async ({ page }) => {
  await page.goto("http://localhost:9990/embed.html");

  const res = page.locator("replay-web-page").frameLocator("iframe").locator("replay-app-main wr-coll wr-coll-replay").frameLocator("iframe").frameLocator("iframe#twitter-widget-0").locator("body");

  await expect(res).toContainText("Want to help");
});


test("cross-domain embed is loading", async ({ page }) => {
  await page.goto("http://localhost:8020/");

  const res = page.locator("replay-web-page").frameLocator("iframe").locator("replay-app-main wr-coll wr-coll-replay").frameLocator("iframe").frameLocator("iframe#twitter-widget-0").locator("body");

  await expect(res).toContainText("Want to help");
});
