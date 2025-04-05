import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "remoteUser",
      filename: "remoteEntry.js",
      exposes: {
        "./User": "./src/components/User.jsx",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
  server: { port: 5001 },
  build: { target: "esnext", outDir: "dist" },
});
