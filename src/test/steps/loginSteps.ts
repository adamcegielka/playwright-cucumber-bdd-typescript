import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://bookcart.azurewebsites.net/');
});

Given('User click on the login link', async function () {
  await page.locator('//span[text()="Login"]').click();
  // await page.locator('.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted').click();
});

Given('User enter the username as {string}', async function (username) {
  await page.locator('input[formcontrolname="username"]').type(username);
});

Given('User enter the password as {string}', async function (password) {
  await page.locator('input[formcontrolname="password"]').type(password);
});

When('User click on the login button', async function () {
  await page.locator('button[color="primary"]').click();
  // await page.locator('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click();

});

Then('Login should be success', async function () {
  const textMessage = await page.locator('//button[contains(@class,"mat-focus-indicator mat-menu-trigger")]//span[1]').textContent();
  console.log('Username: ' + textMessage);
  await browser.close();
});

When('Login should fail', async function () {
  const errorMessage = page.locator('mat-error[role="alert"]');
  await expect(errorMessage).toBeVisible();
  await browser.close();
});
