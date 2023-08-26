import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  await pageFixture.page.goto('https://bookcart.azurewebsites.net/');
});

Given('User click on the login link', async function () {
  await pageFixture.page.locator('//span[text()="Login"]').click();
  // await pageFixture.page.locator('.mat-focus-indicator.mat-button.mat-button-base.ng-star-inserted').click();
});

Given('User enter the username as {string}', async function (username) {
  await pageFixture.page
    .locator('input[formcontrolname="username"]')
    .type(username);
});

Given('User enter the password as {string}', async function (password) {
  await pageFixture.page
    .locator('input[formcontrolname="password"]')
    .type(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.locator('button[color="primary"]').click();
  // await pageFixture.page.locator('.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click();
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(2000);
});

Then('Login should be success', async function () {
  const textMessage = await pageFixture.page
    .locator(
      '//button[contains(@class,"mat-focus-indicator mat-menu-trigger")]//span[1]',
    )
    .textContent();
  console.log('Username: ' + textMessage);
});

When('Login should fail', async function () {
  const errorMessage = pageFixture.page.locator('mat-error[role="alert"]');
  await expect(errorMessage).toBeVisible();
});
