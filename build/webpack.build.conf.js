const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/frontend/dist'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|cur|mp4|webm)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets/img',
          publicPath: '/frontend/dist/assets/img',
          interpolate: true
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets/fonts',
          publicPath: '/frontend/dist/assets/fonts'
        },
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'APP_IS_PROD': true
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`, },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});
