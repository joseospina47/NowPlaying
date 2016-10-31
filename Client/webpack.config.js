'use strict';

// Modules
const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ProvidePlugin     = require('webpack/lib/ProvidePlugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

module.exports = function makeWebpackConfig () {

  const config = {};

  /**
   * Entry
   */
  config.entry = {
    app: './app/js/app.js'
  };

  /**
   * Output
   */
  config.output = {
    path: __dirname + '/dist',
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  /**
   * Type of sourcemap to use per build type
   */
if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  /**
   * Loaders and preLoaders
   */
  config.module = {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  /**
   * PostCSS
   */
  config.postcss = [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ];

  /**
   * Regular plugins configuration
   */
  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css', {disable: !isProd}),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  )


  /**
   * Plugins used when the bundle is built for production
   */
  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: __dirname + '/dist'
      }])
    )
  }

  /**
   * devServer configuration
   */
  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
