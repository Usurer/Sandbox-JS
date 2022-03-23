const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/main.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
   },
 };