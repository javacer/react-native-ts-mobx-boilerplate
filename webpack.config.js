const path = require('path');
const webpack = require('webpack');
const fs = require("fs");
const rootDir = fs.realpathSync(process.cwd())
const distDir = path.join(rootDir, "dist")

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: path.join(rootDir, "src", "android.ts"),
  target: "node",
  output: {
    path: distDir,
    filename: 'android.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: "ts-loader?" + JSON.stringify({
          webStormErrorFormat: true
        }),
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: nodeModules,
  devtool: "source-map"
}
