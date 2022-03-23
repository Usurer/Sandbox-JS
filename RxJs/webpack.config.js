const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './RxJs/src/main.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './RxJs/src/index.html'
    }),
  ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true, // clean dist folder before build
   },
 };