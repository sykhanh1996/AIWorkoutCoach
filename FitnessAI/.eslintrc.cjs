const path = require("path");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    // Disable các rule mà eslint xung đột với prettier.
    // Để cái này ở dưới để nó override các rule phía trên!.
    "eslint-config-prettier",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: "detect",
    },
    // Nói ESLint cách xử lý các import
    "import/resolver": {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  // Tắt rule yêu cầu import React trong file jsx
  "react/react-in-jsx-scope": "off",
  // Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
  "react/jsx-no-target-blank": "warn",
  // Tăng cường một số rule prettier (copy từ file .prettierrc qua)
  "prettier/prettier": [
    "warn",
    {
      arrowParens: "always",
      semi: false,
      trailingComma: "none",
      tabWidth: 2,
      endOfLine: "auto",
      useTabs: false,
      singleQuote: true,
      printWidth: 120,
      jsxSingleQuote: true,
    },
  ],
};
