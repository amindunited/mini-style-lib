const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    'main': './src/main.ts',// this is the actual message exchange
    // 'demo/index': './src/demo/main.ts',
    // 'demo/app_one/main': './src/demo/app_one/main.ts',
    // 'demo/app_two/main': './src/demo/app_two/main.ts',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname + '/dist')
  },
  plugins: [
    new CopyPlugin([
      // {from: './node_modules/mpc-ap-styles/src/assets', to: 'dist/demo/assets'}
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Development',
      template: 'src/index.html',
      chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'demo/app_one/index.html',
    //   title: 'App One',
    //   template: 'src/demo/app_one/index.html',
    //   chunks: ['demo/app_one/main']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'demo/app_two/index.html',
    //   title: 'App Two',
    //   template: 'src/demo/app_two/index.html',
    //   chunks: ['demo/app_two/main']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'demo/index.html',
    //   title: 'Demo App',
    //   template: 'src/demo/index.html',
    //   chunks: ['demo/index']
    // }),
  ]
}
