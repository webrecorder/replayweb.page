/* eslint-env node */
/** @type { import("eslint").Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:lit/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "lit"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  root: true,
  rules: {
    "no-restricted-globals": [2, "event", "error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  ignorePatterns: ["ruffle/**/*", "build/**/*", "dist/**/*"],
  reportUnusedDisableDirectives: true,
};
