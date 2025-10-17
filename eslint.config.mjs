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
      import: eslintPluginImport.default,
    },
    rules: {
      "import/no-unresolved": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off", // disable blocking rule
    },
    settings: {
      "import/resolver": {
        typescript: {},
        node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      },
    },
  },
];
