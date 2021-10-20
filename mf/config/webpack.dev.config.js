const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({analyzerPort: 4000}),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    clientLogLevel: 'silent',
    port: 9001,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      GlobalComponents: path.resolve(__dirname, '../src/components/'),
    },
    extensions: ['.js', '.jsx'],
  },
});
