import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    libInjectCss(),
    dts({
      include: ["lib"],
      insertTypesEntry: true,
    }),
  ],
  build: {
    // Library settings
    lib: {
      //  To make multiple entry points: https://vite.dev/guide/build (Under the "Library Mode" section)
      entry: resolve(__dirname, "lib/main.ts"),
      name: "zens_trial_ui",
      fileName: "zens_trial_ui",
    },
    //
    // Bundler Options (Rollup) - Externalize react related imports
    rollupOptions: {
      // External dependencies
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      // Output settings
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
          tailwindcss: "tailwindcss",
        },
      },
    },
    copyPublicDir: false,
  },
});
