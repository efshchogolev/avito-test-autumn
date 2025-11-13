import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/list",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      buffer: "buffer",
    },
  },
});
