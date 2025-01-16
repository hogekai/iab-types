import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  clean: true,
  minify: true,
  entry: [
    "./src/index.ts",
    "./src/context/index.ts",
    "./src/enum/index.ts",
    "./src/placement/index.ts",
  ],
});
