import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
    // Add your custom rules here
    {
      rules: {
        // Option 1: Modify the rule to allow apostrophes
        "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }]
        
        // Option 2: Or completely disable the rule
        // "react/no-unescaped-entities": "off"
      }
    }
];

export default eslintConfig;
