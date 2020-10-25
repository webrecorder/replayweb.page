const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// fake url used in app to serve files
// can not use custom scheme due to service worker issues
const APP_FILE_SERVE_PREFIX = "http://files.replayweb.page/";
//const APP_FILE_SERVE_PREFIX = "file://files.replayweb.page";


// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID = "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";


const electronMainConfig = (env, argv) => {
  return {
    target: 'electron-main',
    mode: 'production',
    entry: {
      'electron': './src/electron-main.js', 
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY)
      })
    ],
  }
};


const electronPreloadConfig = (env, argv) => {
  return {
    target: 'electron-preload',
    mode: 'production',
    entry: {
      'preload': './src/electron-preload.js', 
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
  }
};
 
 

const browserConfig = (env, argv) => {
  return {
    target: 'web',
    mode: 'production',
    entry: {
      'ui': './src/ui.js',
      'sw': './src/sw.js'
    },

    output: {
      path: path.join(__dirname),
      filename: '[name].js',
      libraryTarget: 'self',
      globalObject: 'self',
      publicPath: '/'
    },

    externals: {
      electron: 'electron',
    },

    devServer: {
      compress: true,
      port: 9990,
      open: false,
      contentBase:  path.join(__dirname),
      publicPath: '/'
    },

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_NAME__: JSON.stringify('sw.js'),
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY),
        __GDRIVE_CLIENT_ID__ : JSON.stringify(GDRIVE_CLIENT_ID),
        __VERSION__: JSON.stringify(require("./package.json").version)
      }),
      new webpack.BannerPlugin('[name].js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020, Webrecorder Software. Licensed under the Affero General Public License v3.')
    ],

    module: {
      rules: [
      {
        test:  /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /main.scss$/,
        loaders: ['css-loader', 'sass-loader']
      },
      {
        test: /wombat.js|wombatWorkers.js|index.html$/i,
        loaders: ['raw-loader'],
      }
      ]
    },
  }
};

module.exports = [ browserConfig, electronMainConfig, electronPreloadConfig ];


