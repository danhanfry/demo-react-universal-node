
var path = require('path');
module.exports = {
  entry: path.join(process.cwd(), './client/renderReact.js'),
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      }
    ]
  }
}
