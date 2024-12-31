import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "index.html",
  },
  base: "/React-Portfolio",
  root: "src",
  publicDir: "public",
  build: {
    outDir: "dist",
  },
});
