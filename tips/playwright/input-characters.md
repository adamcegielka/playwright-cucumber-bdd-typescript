## Input characters

```JavaScript
await page.type('#nameID', 'password');

await page.type('#nameID', 'password', {delay: 200});

await page.locator('#nameID').fill('password');

const passwordInput = await page.locator('#nameID');
await passwordInbut.fill('password');

await page.fillForm('#myForm', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
});
```

## Action

```JavaScript
await page.press('Enter');
```
