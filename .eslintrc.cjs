module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  parser: "@babel/eslint-parser",
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
    "react/no-unknown-property": "off",
  },
};