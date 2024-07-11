import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({

  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    federation({
      name: "vite_remix_cloudflare_app",
      filename: "remoteEntry.js",
      exposes: {
        "./NavigateButton": "./app/components/NavigateButton.tsx",
      }
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: "127.0.0.1",
  },
});
