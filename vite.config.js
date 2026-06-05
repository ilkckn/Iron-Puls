import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "postcss", // Lightning CSS'i kapat, postcss kullan
    lightningcss: false,
  },
});
