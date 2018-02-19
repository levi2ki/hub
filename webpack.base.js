const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environment = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'environment.json')));
const wpEnv = environment.webpack;

module.exports = {
  context: path.resolve(__dirname, wpEnv.src),
  entry: {
    view: './app.jsx',
  },
  output: {
    path: path.resolve(__dirname, wpEnv.dist),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, wpEnv.src), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(s?css|sass)$/,
        include: [/node_modules/, /styles\/theming\.scss/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(s?css|sass)$/,
        exclude: [/node_modules/, /styles\/theming\.scss/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            fallback: 'file-loader',
          },
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../../',
              outputPath: `${wpEnv.assets}/`,
              // useRelativePath: true,
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`${wpEnv.assets}/styles/styles.css`),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, wpEnv.src, 'index.html'),
    }),
  ],
};
