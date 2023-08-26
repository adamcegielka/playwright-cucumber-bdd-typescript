import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';
import { pageFixture } from './pageFixture';

let browser: Browser;
let page: Page;

BeforeAll(async () => {
  console.log('Launch Browser using Playwright and Chromium browser, performed once, before the start of all test scenarios.');
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async () => {
  console.log('Closes Browser before the start of each scenario');
  await browser.close();
});

Before(async () => {
  console.log('Launch Browser, performed before each individual test scenario');
  page = await browser.newPage();
  pageFixture.page = page;
});

After(async () => {
  console.log('Browser closed after each scenario');
  await page.close();
});
