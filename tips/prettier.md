## Prettier

<br>

[![Prettier](https://img.shields.io/badge/Documentation-Prettier-f7ba3e.svg?logo=prettier)](https://prettier.io/docs/en/index.html)
[![Prettier - GitHub](https://img.shields.io/badge/GitHub-Prettier-f7ba3e.svg?logo=github)](https://github.com/prettier/prettier)
[![Prettier - Stack Overflow](https://img.shields.io/badge/stackoverflow-Prettier-e87922.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/prettier)

:small_orange_diamond: install Prettier `npm install --save-dev --save-exact prettier`  
:small_orange_diamond: add file to project `.prettierignore` :

```javascricpt
playwright-report
package-lock.json
README.md
test-results
```

:small_orange_diamond: add Prettier rule `.prettierrc.json` :

```javascript
{
    "singleQuote": true
}
```

or more:

```javascript
{
    "bracketSpacing": true,
    "semi": true,
    "singleQuote": true,
    "tabWidh": 2,
    "endOfLine": "lf"
}
```

:small_orange_diamond: run formatting with Prettier `npx prettier --write .`  
:small_orange_diamond: install plug-in `Prettier`

<br>

### :small_orange_diamond: Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`
