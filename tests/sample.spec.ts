// sample.spec.ts
import { test, expect } from "@playwright/test";

test.describe("サンプルテスト", () => {
  test("トップページのテストサンプル", async ({ page }) => {
    await page.goto("https://donation.yahoo.co.jp/");
    await expect(page).toHaveTitle(
      /Yahoo!ネット募金 - クレジットカード、Ｔポイントで手軽に社会貢献！/
    );

    await expect(
      page.locator(
        "#__layout > div > div > div > main > section.mainVisual > div > p"
      )
    ).toHaveText(
      "クレジットカードは100円から、Ｔポイントは1ポイントから寄付できます。"
    );

    await page.locator("#search > form > input").fill("基金");

    await page.click("#search > form > button");

    await expect(page).toHaveURL(
      "https://donation.yahoo.co.jp/search?query=%E5%9F%BA%E9%87%91"
    );

    await expect(page.locator("#result > h1")).toHaveText("検索結果");
  });
});

test.describe("Tポイントのテスト", () => {
  test.beforeAll(async () => {
    const page = await context.newPage();
    await page.goto("https://donation.yahoo.co.jp/detail/1630001");

    // Interact with login form
    await page.locator("text=ログイン").click();
    await page.locator('input[name="login"]').fill(YID);
    await page.click("#btnNext");
    await page.locator('input[name="password"]').fill(パスワード);
    await page.locator("#btnSubmit").click();
  });

  test("Tポイントのシナリオテストサンプル", async ({ page }) => {
    await page.goto("https://donation.yahoo.co.jp/");
    await page.click("#donate > a");
    await page.click("#pay_tab > li:nth-child(2) > a");
  });
});
