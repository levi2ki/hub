const fs = require('fs');
const path = require('path');
const baseCfg = require('./webpack.base');
const wpMerge = require('webpack-merge');
const webpack = require('webpack');


const environment = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'environment.json')));
const wpEnv = environment.webpack;


module.exports = wpMerge(baseCfg, {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, wpEnv.dist),
    port: 9000,
    compress: true,
    hot: true,
  },
plugins: [
  new webpack.HotModuleReplacementPlugin({
    multiStep: false,
  })
]
});