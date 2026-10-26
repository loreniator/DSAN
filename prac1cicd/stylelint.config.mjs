javascript
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["prac1cicd/js/**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
]);


