const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    // new WebpackLighthousePlugin({
    // url: 'http://localhost:9001',
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
