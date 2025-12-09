import { resolve } from "path";

const __dirname = import.meta.dirname;

export default {
  build: {
    outDir: "./dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/"),
      "@components": resolve(__dirname, "src/components/"),
      "@config": resolve(__dirname, "src/config/"),
      "@styles": resolve(__dirname, "src/styles/"),
      "@utils": resolve(__dirname, "src/utils/"),
      "@assets": resolve(__dirname, "src/assets/"),
      "@scripts": resolve(__dirname, "src/scripts/"),
    },
  },
};
