const path = require('path');
const webpack = require('webpack');
const forkTSChecker = require('fork-ts-checker-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../client/index.tsx'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    port: 9001,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../client/src')
    },
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules', 'app']
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            logLevel: 'info'
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new forkTSChecker(),
    new htmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../client/index.html')
    })
  ]
};
