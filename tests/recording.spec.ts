import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto("https://www.google.com/?gws_rd=ssl");

  // Click [aria-label="検索"]
  await page.locator('[aria-label="検索"]').click();

  // Fill [aria-label="検索"]
  await page.locator('[aria-label="検索"]').fill("1+1");

  // Press Enter
  await page.locator('[aria-label="検索"]').press("Enter");
  await expect(page).toHaveURL("https://www.google.com/search?q=1%2B1&");
});
