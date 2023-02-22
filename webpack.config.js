const { mergeWithRules } = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const path = require('path');
const remove = require('lodash/remove');
const dev = require('./Yesplan/resources/reactjs-components/webpack.dev');
const postcssOptions = require('./Yesplan/resources/reactjs-components/postcss.config');

const scssLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions
    }
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        outputStyle: 'expanded'
      }
    }
  }
];

const prototypesConfig = {
  output: {
    path: path.resolve(__dirname, './prototypes/assets'),
  },
  module: {
    rules: [
      {
        test: /stylesheets\/scss\/[^_/]+[^/]*\.scss$/,
        include: [path.join(__dirname, '../stylesheets')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          ...scssLoaders
        ]
      }
    ]
  },
  plugins: [new WebpackShellPlugin({ onBuildStart: { scripts: ['bash copyYPImages.sh'] } })]
};


const mergeRules = {
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'replace'
      }
    }
  }
};

const mergedWebpackConfig = mergeWithRules(mergeRules)(dev, prototypesConfig);
/* The copy css step from /stylesheets to /public from the original Webpack is not needed in this setup */
remove(mergedWebpackConfig.plugins, plugin => plugin.constructor && plugin.constructor.name === 'WebpackShellPlugin' && plugin.onBuildExit.blocking && plugin.onBuildExit.scripts.length === 1);
module.exports = mergedWebpackConfig;

