import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // "./" keeps every link relative, so the built site works in any folder
  base: "./",
  plugins: [react()],
  build: {
    rolldownOptions: {
      // One entry per page: the design chooser plus the two React homepages
      input: {
        main: resolve(root, "index.html"),
        design1: resolve(root, "design-1/index.html"),
        design2: resolve(root, "design-2/index.html"),
      },
    },
  },
});
