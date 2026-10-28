import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

// Pages have clean addresses like /design-1/services/furnaces.
// There is no file at that address, so send the design's index.html
// and let its router (shared/useRoute.js) pick the page.
function designPages() {
  function rewrite(req, res, next) {
    const match = req.url.match(/^\/(design-[12])\/([^?#]*)/);
    const wantsPage = (req.headers.accept || "").includes("text/html");
    if (match && wantsPage && !match[2].includes(".")) {
      req.url = "/" + match[1] + "/index.html";
    }
    next();
  }
  return {
    name: "design-pages",
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

export default defineConfig({
  // "/" makes every file load from the site root, so deep addresses like
  // /design-1/services/furnaces still find the scripts and images.
  // The built site must be hosted at the root of a domain.
  base: "/",
  plugins: [react(), tailwindcss(), designPages()],
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
