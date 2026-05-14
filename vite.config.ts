import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    netlifyPlugin(),
    tanstackStart(),
    react(),
  ],
});
