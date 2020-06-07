const path = require('path');

module.exports = {
  mode:'development',
  entry: './www/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'www/js/'),
  }
};