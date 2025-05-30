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

test("same-domain iframe embed is loading", async ({ page }) => {
  await page.goto("http://localhost:9990/iframe-test.html");

  const res = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .locator("body");

  await expect(res).toContainText("Outside iframe");

  const inside = res.frameLocator("iframe").locator("body");

  await expect(inside).toContainText("Inside iframe");
});

test("cross-domain iframe embed is loading", async ({ page }) => {
  await page.goto("http://localhost:8020/iframe-test-cross.html");

  const res = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .locator("body");

  await expect(res).toContainText("Outside iframe");

  const inside = res.frameLocator("iframe").locator("body");

  await expect(inside).toContainText("Inside iframe");
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

test("csp blocking in place", async ({ page }, workerInfo) => {
  await page.goto("http://localhost:9990/embed.html");

  const frame = page
    .locator("replay-web-page")
    .frameLocator("iframe")
    .locator("replay-app-main wr-item wr-coll-replay")
    .frameLocator("iframe")
    .locator(":root");

  const didNotFetch = await frame.evaluate(async () => {
    const blocked = async (win, url) => {
      try {
        const resp = await win.fetch(url);
        if (!resp.ok) {
          return 1;
        }
        return 0;
      } catch (e) {
        return 1;
      }
    };

    let block = 0;

    // blocks (1 - 3)
    block += await blocked(window, "https://webrecorder.net/");
    block += await blocked(window, "http://localhost:9990/ui.js");
    block += await blocked(window, "http://localhost:9990/sw.js");

    const iframe = document.createElement("iframe");
    iframe.src = "http://localhost:9990/static/wombat.js";
    document.body.appendChild(iframe);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // (4) still blocked from loading due to csp
    block += await blocked(iframe.contentWindow, "https://webrecorder.net/");

    // (5-6) blocked by csp policy, even though local
    block += await blocked(iframe.contentWindow, "http://localhost:9990/sw.js");

    // not blocked in FF
    block += await blocked(
      iframe.contentWindow,
      "http://localhost:9990/static/wombat.js",
    );

    return block;
  });

  const name = workerInfo.project.name;

  switch (name) {
    case "chrome":
      expect(didNotFetch).toBe(6);
      break;

    case "firefox":
      expect(didNotFetch).toBe(5);
      break;

    case "webkit":
      expect(didNotFetch).toBe(4);
      break;
  }
});
