import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, expect } from '@playwright/test';

let page: Page;

setDefaultTimeout(60 * 1000 * 2);

Given('user search for a {string}', async function (book) {
  await page.locator('input[type="search"]').type(book);
  await page.locator('mat-option[role="option"] span').click();
});

When('user add the book to the cart', async function () {
  await page.locator('//button[@color="primary"]').click();
});

Then('the cart badge should get updated', async function () {
  const countInCart = await page.locator('#mat-badge-content-0').textContent();
  expect(Number(countInCart?.length)).toBeGreaterThan(0);
});
