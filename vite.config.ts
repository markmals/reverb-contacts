import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reverb from "react-router/reverb/dev";

export default defineConfig({
    plugins: [react(), reverb()],
});
