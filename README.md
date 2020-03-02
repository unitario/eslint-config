# Unitario ESLint Configuration

The package provides base [ESLint](https://eslint.org) configurations for Unitario. It follows a set of recommended style guidelines for writing code that is more performant and easier to reason about.

This package use [ESLint to run Prettier](https://prettier.io/docs/en/integrating-with-linters.html#use-eslint-to-run-prettier). 

## What it does

- Lints JavaScript or TypeScript based on latest standards
- Follows a [mostly reasonable approach](https://github.com/airbnb/javascript) by Airbnb
- Fixes common code errors and style issues

## Installation

### 1. Install dependencies

#### Development

```
npm install @langoon/eslint-config --save-dev
```

#### Peer

In case peer dependencies has not already been installed, make sure to install these too:

```
npm install eslint prettier --save-dev
```

#### Optional

- **[jest](https://jestjs.io)** – Test framework. _Configuration files has already loaded in this package._
- **[ramda](https://ramdajs.com)** – Functional utility library. _Configuration files has already loaded in this package._
- **[lint-staged](https://github.com/okonet/lint-staged)** – _Used to enable allow ESLint to run on staged files._
- **[husky](https://github.com/typicode/husky)** – _Used to enable allow ESLint to run on staged files._

Use them if you project requires it. If so then configuration files has already been bundled in this package. Just make sure that they have been installed in your project.

### 2. Create config file

Create an `.eslintrc` file at the root of your project with this content:

```json
{
  "extends": "@langoon"
}
```

## Rules

### Extends

This configuration package follows a specific list of configuration rules. Each configuration overwrites the previous configuration in the case of conflicting rules.

1. [Airbnb ESLint Base Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) – Base ruleset for JavaScript files
2. [TypeScript ESLint Recommended Config](https://github.com/typescript-eslint/typescript-eslint) – Base ruleset for TypeScript files
2. [Jest ESLint Recommended Config](https://github.com/jest-community/eslint-plugin-jest#readme) – Base ruleset for Jest spec-files
3. [Prettier ESLint Config](https://github.com/prettier/eslint-config-prettier) – Turns off all rules that are unnecessary or might conflict with Prettier

### Enforced Rules

This configuration package makes a couple of opinionated style rules which overwrites any rules provided in the extends array.

- **Print Width.** Line wrap at 160 characters (default is `80`).
- **Tab Width.** Tab with is 2 spaces (default is `4`).
- **Semicolons.** Never print semicolons in end of statements (default is `always`).

### Overriding Rules

If you'd like to override any rules, you can add the rules to your `.eslintrc` file.

```json
{
  "extends": "@langoon",
  "rules": {
    "no-console": "off"
  }
}
```

## Code Editor Integrations

### Visual Studio Code

1. Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Reload Visual Studio Code
3. Modify your `settings.json` file

```json
// Format on save with Prettier
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
// Tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
// An array of language identifiers specify the files to be validated
"eslint.validate": [
  { "language": "html", "autoFix": true },
  { "language": "json", "autoFix": true },
  { "language": "javascript", "autoFix": true },
  { "language": "typescript", "autoFix": true }
],
// Turn off Prettier extension for js and ts files since we're handling that with ESLint
"prettier.disableLanguages": ["javascript", "typescript"],
```

## Pre-Commit Hook

You may want ESLint to automatically fix your errors on commit, you can use [lint-staged](https://github.com/okonet/lint-staged) with [husky](https://github.com/typicode/husky), which manages git hooks.

1. Install dependencies
    - `npm install lint-staged husky --save-dev `
2. Update `package.json`:

```json
{
  "lint-staged": {
    "*.{js,ts,json}": ["eslint --fix", "git add"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```
