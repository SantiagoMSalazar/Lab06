const path = require('path');
// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
  // The location of the build folder described above
  plugins: [
    new Dotenv()
  ],
  // The entry point file described above
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
};