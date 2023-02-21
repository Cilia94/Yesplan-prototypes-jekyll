module.exports = {
  plugins: {
    'postcss-discard-comments': {},
    'postcss-urlrewrite': {
      properties: true,
      rules: [ {
        from: /[^]*/,
        to: (s) => s.replace(
          /^(data:image\/svg\+xml.*)(<svg.+\<\/svg\>)$/,
          (match, m1, m2) => `${m1}${encodeURIComponent(m2)}`) } ] },
    'autoprefixer': { cascade: false } } };
