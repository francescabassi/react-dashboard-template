const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');


module.exports = {
  entry: ['@babel/polyfill', path.resolve('src/index.js')],
  resolve: {
    modules: [
      'node_modules',
      path.resolve('src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[folder]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader' 
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/index.html', 
      filename: './index.html' 
    }),
    new ExtractTextPlugin('style.css'),
    new DotenvPlugin({
      sample: path.resolve('.env.example'),
      path: path.resolve('.env')
    })
  ],
  devServer: {
    port: process.env.HTTP_PORT || 3000
  }
}
