module.exports = function (api) {
  api.cache(true);
  return (
    {
      "presets": [
        "@babel/preset-react",
        "@babel/preset-env"
      ],
      "plugins": [
        "@babel/plugin-proposal-class-properties",
        "lodash",
        [
          "i18n",
          {
            "globalIntl": "intl",
            "alwaysUseGlobal": true,
            "i18nMessageCalls": "error",
            "oneBasedTemplateParameters": true,
            "includeDescription": true,
          }
        ],
        [
          "react-intl",
          {
            "messagesDir": "./Yesplan/resources/reactjs-components/locale/generatedMessages",
            "extractFromFormatMessageCall":  true,
            "extractSourceLocation": true,
          }
        ],
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-json-strings",
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-logical-assignment-operators",
        "@babel/plugin-proposal-optional-chaining",
        [
          "@babel/plugin-proposal-pipeline-operator",
          {
            "proposal": "minimal"
          }
        ],
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-do-expressions",
        "@babel/plugin-proposal-function-bind"
      ]
    });
}
