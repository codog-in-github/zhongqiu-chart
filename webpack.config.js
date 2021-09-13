const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename:'[name].bundle.[hash].js',
    path:resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test:/\.(le|c)ss$/,
      use:['style-loader','css-loader','less-loader'],
    }],
  },
  devServer: {
    static: './dist',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      title: 'Development',
    }),
  ]
} 