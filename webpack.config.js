const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// fake url used in app to serve files
// can not use custom scheme due to service worker issues
const APP_FILE_SERVE_PREFIX = "https://files.replayweb.page";


// if running in dev-server, build sw.js in dist/sw.js
// to support hot-reloading, otherwise, build sw.js in root
const IS_DEV_SERVER = process.env.WEBPACK_DEV_SERVER;


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
      })
    ]
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
      'frontend': './src/frontend.js',
      'embed': './src/embed.js',
      'sw': 'wabac/src/sw.js'
    },

    output: {
      path: path.join(__dirname, 'docs'),
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
      contentBase:  path.join(__dirname, 'docs'),
      publicPath: '/'
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_PATH__: JSON.stringify('./sw.js'),
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
      }),
    ],

    module: {
      rules: [
      {
        test:  /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /base.scss$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /main.scss$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /wombat.js|wombatWorkers.js$/i,
        loaders: ['raw-loader'],
      }
      ]
    }
  }
};

module.exports = [ browserConfig, electronMainConfig, electronPreloadConfig ];


