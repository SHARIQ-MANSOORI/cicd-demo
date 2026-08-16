import js from "@eslint/js";
import globals from "globals"; // lint supports import modules

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ["test/**/*.js"],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];