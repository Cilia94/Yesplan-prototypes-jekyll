module.exports = {
  "extends": ["airbnb", "prettier", "plugin:storybook/recommended"],
  "root": true,
  "parser": "babel-eslint",
  // https://github.com/babel/babel-eslint
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "classes": true
    }
  },
  "plugins": ["disable", "react", "i18n"],
  "processor": "disable/disable",
  "overrides": [{
    "files": ["*.js", "*.jsx"],
    "globals": {
      "i18n": false,
      "i18nDefine": "readonly",
      "_": "readonly",
      "$exporter": "readonly",
      "FileSaver": "readonly",
      "XLSX": "readonly",
      "intl": "readonly"
    }
  }, {
    "files": ["*.ts", "*.tsx"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": "./tsconfig.json",
      "tsconfigRootDir": __dirname
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
      "no-undef": "off",
      "no-redeclare": "off",
      "import/no-unresolved": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        "vars": "local",
        "argsIgnorePattern": "Ignored$"
      }],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "no-use-before-define": "off",
      "lines-between-class-members": "off",
      "@typescript-eslint/lines-between-class-members": "warn",
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/ban-types": "error"
    }
  }],
  "env": {
    "browser": true,
    "jquery": true
  },
  "settings": {
    "disable/plugins": ["jsx-a11y"],
    "import/resolver": {
      "node": {
        "extensions": [".mjs", ".js", ".json", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "class-methods-use-this": ["off", {
      "exceptMethods": ["render", "getInitialState", "getDefaultProps", "getChildContext", "componentWillMount", "componentDidMount", "componentWillReceiveProps", "shouldComponentUpdate", "componentWillUpdate", "componentDidUpdate", "componentWillUnmount"]
    }],
    // Overrides airbnb linting config
    "comma-dangle": ["error", "only-multiline"],
    "react/destructuring-assignment": "off",
    "react/button-has-type": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": ["warn", {
      "html": "enforce",
      "custom": "enforce",
      "explicitSpread": "ignore",
      "exceptions": []
    }],
    "react/no-danger": "off",
    "react/static-property-placement": ["warn", "static public field"],
    "no-unused-vars": ["error", {
      "vars": "local",
      "argsIgnorePattern": "Ignored$"
    }],
    "radix": "off",
    "func-names": ["error", "as-needed"],
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "mjs": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "no-else-return": "off",
    "no-restricted-syntax": "off",
    "no-labels": "error",
    "no-with": "error",
    "guard-for-in": "error",
    "i18n/i18n-arguments": "warn"
  }
};
