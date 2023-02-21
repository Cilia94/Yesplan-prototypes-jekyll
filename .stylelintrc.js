module.exports = {
  customSyntax: require('postcss-scss'),
  plugins: [
    'stylelint-selector-tag-no-without-class'
  ],
  rules: {
    'plugin/selector-tag-no-without-class': ['//']
  }
}
