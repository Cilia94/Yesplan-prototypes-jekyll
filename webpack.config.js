const { mergeWithRules } = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const path = require('path');
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

// For DEV purposes (while WIP)
// console.log(JSON.stringify(mergeWithRules(mergeRules)(dev, prototypesConfig)));

 module.exports =  mergeWithRules(mergeRules)(dev, prototypesConfig);

