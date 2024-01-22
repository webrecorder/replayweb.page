/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
  },
  extends: ["plugin:wc/recommended", "plugin:lit/recommended", "prettier"],
  plugins: ["@typescript-eslint", "lit"],
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
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
    // "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    "__generated__",
    "__mocks__",
    "dist",
    "ruffle",
    "ui.js",
    "sw.js",
  ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["webpack.*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
