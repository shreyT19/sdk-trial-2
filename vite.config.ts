import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
      external: ["react", "react-dom", "react/jsx-runtime"],
      // Output settings
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
