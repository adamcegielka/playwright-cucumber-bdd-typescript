## Annotations

[Annotations - playwright.dev](https://playwright.dev/docs/test-annotations)

- `test.only()` - only these tests run
- `test.skip()` - does not run such a test
- `test.fail()` - run this test and ensure it does indeed fail
- `test.fixme()` - run this test when running the test is slow or crashes
- `test.slow()` - test extends the default timeout three times
- `test.parallel()` - performs tests in parallel

<br>

### Tag - @name

```javascript
test('name test @failTest', async ({ page }) => {});
```

- `npx playwright test --grep @failTest` - run only that test:
- `npx playwright test --grep-inver @failTest` - can skip the tests with a certain tag

<br>

### Group tests

```javascript
describe('name tests', () => {
  test('first test', async ({ page }) => {});

  test('second test', async ({ page }) => {});
});
```
