import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["prac1cicd/js/**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
        alert: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
]);