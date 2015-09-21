var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer      = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './src/js/main.js',
    vendor: ["lodash","react", "react-router"]
  },
  output: {
    path: __dirname +'/dist',
    filename: '[name].js' // Template based on keys in entry above
    //publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  postcss: [
    autoprefixer()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: 'file' }
    ]
  }
};
