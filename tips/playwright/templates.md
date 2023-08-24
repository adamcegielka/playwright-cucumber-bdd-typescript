## Methods

:small_orange_diamond: Import

```TypeScript
import { test, expect, chromium } from '@playwright/test';
```

:small_orange_diamond: Test

```TypeScript
test('Title', async ({ page }) => {
  // ...
});
```

:small_orange_diamond: Describe

```TypeScript
test.describe('Title two tests', () => {

  test('Title1', async ({ page }) => {
    // ...
  });

  test('Title2', async ({ page }) => {
    // ...
  });
});
```

:small_orange_diamond: test.beforeEach

```TypeScript
test.describe('Title two tests', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto('/');
  });

  test('my test', async ({ page }) => {
    // ...
  });
});
```
