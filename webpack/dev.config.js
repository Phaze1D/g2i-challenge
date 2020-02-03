const base = require('./base.config');
const merge = require('webpack-merge');


module.exports = merge(base, {
  mode: 'development',
  watch: true,
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
});
