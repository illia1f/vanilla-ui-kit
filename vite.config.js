import { resolve } from "path";

const __dirname = import.meta.dirname;

export default {
  build: {
    outDir: "./dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
};
