const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.[hash].js',
    chunkFilename: '[name].[hash].index.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules','src'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'ts-loader',
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
