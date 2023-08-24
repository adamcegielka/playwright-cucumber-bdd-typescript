## Selectors

- Text: `await page.click('text=Example text')`
- CSS:
  - `await page.click('button')`
  - `await page.click('')`
  - `await page.click('#id')`
  - `await page.click('.class')`
- Only visible CSS Selector: `await page.click('.submit-button:visible')`
- Combinations: `await page.clik('#login_form .username')`
- Xpath: `await page.click('//button')`
