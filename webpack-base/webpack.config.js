var webpack           = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  atImport          = require('postcss-import'),
  autoprefixer      = require('autoprefixer');

module.exports = {
  entry: {
    bundle: './src/js/main.js',
    vendor: ['lodash']
  },

  output: {
    path: __dirname +'/dist',
    filename: '[name].js' // Template based on keys in entry above
  },

  resolve: {
    extensions: ['', '.js']
  },

  devtool : 'eval-source-map',
  //devtool : 'inline--source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'App',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  postcss: [
    atImport({
      path: ['node_modules', './src']
    }),
    autoprefixer()
  ],

  module: {
    loaders: [
    { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
    { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  }
};
