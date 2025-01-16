import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  clean: true,
  minify: true,
  dts: true,
  entry: ["src/v25/index.ts", "src/v26/index.ts", "src/v30/index.ts"],
});
