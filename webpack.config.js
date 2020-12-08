const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// fake url used in app to serve files
// can not use custom scheme due to service worker issues
const APP_FILE_SERVE_PREFIX = "http://files.replayweb.page/";
//const APP_FILE_SERVE_PREFIX = "file://files.replayweb.page";


// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID = "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";

// Copyright banner text
const BANNER_TEXT = "'[name].js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020, Webrecorder Software. Licensed under the Affero General Public License v3.'";

// IPFS ipfs-core lib url
const IPFS_CORE_URL = "https://cdn.jsdelivr.net/npm/ipfs-core@0.2.0/dist/index.min.js";


const electronMainConfig = (env, argv) => {
  return {
    target: 'electron-main',
    mode: 'production',
    entry: {
      'electron': './src/electron-main.js', 
    },
    resolve: {
      alias: {
        "abort-controller": "abort-controller/dist/abort-controller.js",
        "dlv": "dlv/dist/dlv.js",
        "bignumber.js": "bignumber.js/bignumber.js"
      }
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY)
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          { from: 'node_modules/bcrypto/build/Release/bcrypto.node', to: 'build' },
          { from: 'node_modules/leveldown/prebuilds/', to: 'prebuilds' },
        ],
      }),
    ],
    externals: {
      "bufferutil": "bufferutil",
      "utf-8-validate": "utf-8-validate",
    }
  }
};


const electronPreloadConfig = (env, argv) => {
  return {
    target: 'electron-preload',
    mode: 'production',
    entry: {
      'preload': './src/electron-preload.js', 
    },
    plugins: [
      new webpack.BannerPlugin(BANNER_TEXT),

      // this needs to be defined, but not actually used, as electron app uses
      // ipfs-core from node
      new webpack.DefinePlugin({
        __IPFS_CORE_URL__: JSON.stringify(IPFS_CORE_URL)
      }),
    ]
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
        __VERSION__: JSON.stringify(require("./package.json").version),
        __IPFS_CORE_URL__: JSON.stringify(IPFS_CORE_URL)
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          { from: 'node_modules/ipfs-core/dist/index.min.js', to: 'ipfs-core.min.js' },
        ]
      }),
    ],

    module: {
      rules: [
      {
        test:  /\.svg$/,
        use: ['svg-inline-loader'],
      },
      {
        test: /main.scss$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /wombat.js|wombatWorkers.js|index.html$/i,
        use: ['raw-loader'],
      }
      ]
    },
  }
};

module.exports = [ browserConfig, electronMainConfig, electronPreloadConfig ];


