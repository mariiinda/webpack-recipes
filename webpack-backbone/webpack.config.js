var webpack           = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  bemLinter         = require('postcss-bem-linter'),
  atImport          = require('postcss-import'),
  customProperties  = require('postcss-custom-properties'),
  autoprefixer      = require('autoprefixer');

module.exports = {
  entry: {
    html: "./dist/index.html",
    bundle: './src/js/main.js',
    vendor: ['lodash','backbone', 'jquery','markdown']
  },

  output: {
    path: __dirname +'/dist',
    filename: '[name].js' // Template based on keys in entry above
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool : 'eval-source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'Backbone App',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body' // Inject all scripts into the body
    })
  ],

  postcss: [
    atImport({
      path: ['node_modules', './src']
    }),
    autoprefixer(),
    customProperties(),
    bemLinter()
  ],

  module: {
    loaders: [
    { test: /\.html?$/, loader: 'file?name=[name].[ext]' },
    { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
    { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
    { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' },
    { test: /\.handlebars$/, loader: "handlebars-loader" },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  }
};
