import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./app/tests",
  retries: 1,
  use: {
    baseURL: "http://localhost:3000",
    browserName: "chromium",
  },
});
