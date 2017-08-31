/*
  File Name: webpack.config.js
*/
const path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './build',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            }
        ],
    },
};
