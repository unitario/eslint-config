module.exports = {
  "plugins": [
    // TypeScript plugin for ESLint
    "@typescript-eslint",
    // This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
    "import",
    // ESLint plugin for Jest
    "jest",
    // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
    "prettier",
    // ESLint rules for pragmatic Ramda usage, refactoring and simplification
    "ramda"
  ],
  "extends": [
    // Airbnb ESLint configs
    "airbnb-base",
    // TypeScript ESLint recommended configs
    "plugin:@typescript-eslint/recommended",
    // Jest ESLint recommended configs
    "plugin:jest/recommended",
    // Ramda ESLint recommended configs
    "plugin:ramda/recommended",
    // Import ESLint recommended configs
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    // Prettier ESLint recommended configs
    "plugin:prettier/recommended",
    // Prettier @typescript-eslint plugin will override conflicting Prettier rules 
    "prettier/@typescript-eslint"
  ],
  "rules": {
    // Overwrites Prettier defaults
    "prettier/prettier": [
      "error",
      {
        // Default is 80
        "printWidth": 160,
        // Default is 4
        "tabWidth": 2,
        // Default is true
        "semi": false,
        // Default is false
        "singleQuote": true
      }
    ],
    // Overwrite conflicts with ts(2691).
    // Due to configs issued by Airbnb.
    // This is expected to be resolved in future release of eslint-plugin-import
    // See issue: https://github.com/benmosher/eslint-plugin-import/issues/1558
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
   // Defaults exports are generally discuraged in TypeScript
   // See: https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
   "import/no-default-export": 2,
   // This rule checks all import declarations and verifies that all imports are sorted
   "sort-imports": 2
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    // Allows for the parsing of modern ECMAScript features
    "ecmaVersion": 2020,
    // Allow module imports
    "sourceType": "module",
    "ecmaFeatures": {
      // Enforce script mode as default
      "impliedStrict": true
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true
  }
}