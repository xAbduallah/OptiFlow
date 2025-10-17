import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintPluginImport = (await import("eslint-plugin-import")).default;

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/no-unresolved": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {},
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
  },
];

export default eslintConfig;
