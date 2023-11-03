/* eslint-env node */
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
  rules: {
    "no-restricted-globals": [2, "event", "error"],
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/no-explicit-any": "warn",
  },
  ignorePatterns: ["ruffle/**/*", "build/**/*"],
};
