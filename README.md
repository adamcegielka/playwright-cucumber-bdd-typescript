[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Cucumber](https://img.shields.io/badge/Documantation-Cucumber-23d96c.svg?logo=cucumber)](https://cucumber.io/)
[![GitHub](https://img.shields.io/badge/Documantation-GitHub-23d96c.svg?logo=github)](https://github.com/adamcegielka/playwright-cucumber-bdd-typescript)
<br>

# Playwright with Typescript - Cucumber - BDD

This is my personal project to improve my skills in automated testing using Cucumber and BDD.
This project was created solely for my learning process and to showcase my testing skills.

## Installation

- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> => Install Playwright => OK
- Install Cucumber plugin
- Install dependencies: 
  - `npm i @cucumber/cucumber -D`
  - `npm i ts-node -D`
- Create folder `src/test/features` and `src/test/steps`
- Install ESLint `npm install eslint --save-dev`
- Configuration `npm init @eslint/config`
- Add prettier in `.eslintrc.json` :
```json
"extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
],
```
- Install Prettier `npm install --save-dev --save-exact prettier`
- Add file `.prettierignore` :
```
package-lock.json
README.md
```
- Add Prettier rule `.prettierrc.json` :
```json
{
    "singleQuote": true
}
```
- Run formatting with Prettier `npx prettier --write .`
- Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`

## Tutorials

- [Playwright Cucumber (BDD) - Typescript](https://www.udemy.com/course/playwright-cucumber-bdd-typescript)
- [Automated Software Testing with Playwright](https://www.udemy.com/course/automated-software-testing-with-playwright)
- [Playwright & Cucumber - Typescript](https://www.youtube.com/watch?v=bfWXNLqKlvA&list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)
- [Cucumber and Playwright](https://www.youtube.com/watch?v=PUVFmhYJNJA&t=1314s)
- [Cucumber JS - YT](https://www.youtube.com/watch?v=vT4WHsZh6AU&list=PLBw1ubD1J1UhScgbM67OAfZqrVQJNzg0b)
- [Cucumber JS - GitHub](https://github.com/cucumber/cucumber-js)
- [Selenium JavaScript Tutorial](https://www.youtube.com/watch?v=BQ-9e13kJ58)