const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const {dependencies} = require('../package.json');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(), // will delete the existing content of our /public folder and create new with every Webpack build
    new HtmlWebpackPlugin({
      title: 'HRMS-Onboarding',
      template: path.resolve(__dirname, '../src/static/index.html'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/static/'),
        to: path.resolve(__dirname, '../dist/public/'),
      },
    ]),
    new ModuleFederationPlugin({
      name: 'Onboarding',
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'shell',
      },
      exposes: {
        './routes': path.resolve(__dirname, '../src/routes'),
      },
      shared: {
        ...dependencies,
        react: {singleton: true, requiredVersion: dependencies.react},
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist/public/'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader?limit=100000',
        },
      },
    ],
  },
  resolve: {
    alias: {
      GlobalComponents: path.resolve(__dirname, '../src/components/'),
      Services: path.resolve(__dirname, '../src/services/'),
      Constants: path.resolve(__dirname, '../src/utils/constants'),
      Helpers: path.resolve(__dirname, '../src/utils/helpers'),
      Svg: path.resolve(__dirname, '../src/static/images/svg'),
    },
    extensions: ['.js', '.jsx'],
  },
};
