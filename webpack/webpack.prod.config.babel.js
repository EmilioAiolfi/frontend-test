'use strict';

import CONFIG from '../config';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import validate, { Joi } from 'webpack-validator';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import baseConfig from './webpack.base.config.babel';


const configPROD = {
  devtool: 'cheap-module-source-map',

  entry: {
    app: CONFIG.WEBPACK.PATHS.ENTRY_APP,
  },

  output: {
    path: path.resolve(__dirname, '../public', 'static', 'build'),
    publicPath: '/static/build/',
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  target: 'web',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader : ExtractTextPlugin.extract('style', CONFIG.WEBPACK.STYLE_LOADERS)
      },
    ]
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'build-manifest.json',
      publicPath: '/static/build/',
      writeToFileEmit: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.[name].js',
      minChunks: Infinity
    }),

    new ExtractTextPlugin('style.[name].[chunkhash].css', {
      disable: false,
      allChunks: true //extract all css from async chunks as well
    }),

    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },

      sourcemap: false,
      beautify: false,
      dead_code: true
    }),

  ]
};


export default validate(merge(baseConfig, configPROD), {
  schemaExtension: Joi.object({
    sassLoader: Joi.any(),
  }),
});