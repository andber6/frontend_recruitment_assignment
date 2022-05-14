const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist'
  }
};

// var BUILD_DIR = path.resolve(__dirname, 'dist');
// var APP_DIR = path.resolve(__dirname, 'src/index.js');

// var config = {
//   entry: APP_DIR,
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   },
//   loaders : [
//     {
//       test : /\.js?/,
//       include : APP_DIR,
//       loader : 'babel-loader'
//     }
//   ]

// };

// module.exports = config;