import { test, expect } from "@playwright/test";

test("same-domain embed is loading", async ({ page }) => {
  await page.goto("http://localhost:9990/embed.html");

  const res = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .frameLocator("iframe#twitter-widget-0")
    .locator("body");

  await expect(res).toContainText("Want to help");
});

test("docs page embed is loading", async ({ page }) => {
  await page.goto("http://localhost:9990/docs/embedding/");

  const res = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .frameLocator("iframe#twitter-widget-0")
    .locator("body");

  await expect(res).toContainText("Want to help");
});

test("cross-domain embed is loading", async ({ page }) => {
  await page.goto("http://localhost:8020/");

  const res = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .frameLocator("iframe#twitter-widget-0")
    .locator("body");

  await expect(res).toContainText("Want to help");
});

test("sandbox + cross-domain embed is loading", async ({ page }) => {
  await page.goto("http://localhost:8030/");

  const sandboxFrame = page.locator("iframe");
  await expect(await sandboxFrame.getAttribute("src")).toBe(
    "http://localhost:8020/index-sandbox.html",
  );

  const res = page
    .frameLocator("iframe")
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .frameLocator("iframe#twitter-widget-0")
    .locator("body");

  await expect(res).toContainText("Want to help");
});

test("require subdomain iframe", async ({ page }) => {
  // load directly, should be blocked
  await page.goto("http://localhost:8020/index-sandbox.html");

  const res = page.locator("replay-web-page");

  await expect(res).toContainText(
    "Sorry, due to security settings, this ReplayWeb.page embed only be viewed within a subdomain iframe.",
  );
});
