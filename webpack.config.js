const path = require('path');


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: {
      app: {
        name: 'google-chrome',
      },
    },
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};