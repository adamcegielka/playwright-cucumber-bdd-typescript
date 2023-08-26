import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';
import { pageFixture } from './pageFixture';

let browser: Browser;
let page: Page;

BeforeAll(async () => {
  console.log('Launch Browser');
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  pageFixture.page = page;
});

AfterAll(async () => {
  await pageFixture.page.close();
  await browser.close();
});

Before(async () => {});

After(async () => {});
