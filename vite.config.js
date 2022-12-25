/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.js", "**/*.test.jsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
  },
});
