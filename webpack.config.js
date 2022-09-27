/*eslint-env node */

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const package_json = require("./package.json");

// fake url used in app to serve files
// can not use custom scheme due to service worker issues
const APP_FILE_SERVE_PREFIX = "http://files.replayweb.page/";
//const APP_FILE_SERVE_PREFIX = "file://files.replayweb.page";


// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID = "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";

// Copyright banner text
const BANNER_TEXT = "'[name].js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-2021, Webrecorder Software. Licensed under the Affero General Public License v3.'";

const fallback = {
  "stream": require.resolve("stream-browserify"),
  "querystring": require.resolve("querystring-es3"),
  "url": require.resolve("url/"),
  "buffer": false,
  "process": false
};

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
};


const electronMainConfig = (/*env, argv*/) => {
  return {
    target: "electron-main",
    mode: "production",
    entry: {
      "electron": "./src/electron-main.js", 
    },
    optimization,
    resolve: {
      alias: {
        "abort-controller": "abort-controller/dist/abort-controller.js",
        "dlv": "dlv/dist/dlv.js",
        "bignumber.js": "bignumber.js/bignumber.js",
        //"multiformats/hashes/sha2": "multiformats/cjs/src/hashes/sha2.js"
      }
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY),
        __IPFS_CORE_URL__: JSON.stringify("")
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          { from: "node_modules/classic-level/prebuilds/", to: "prebuilds" },
          { from: "build/extra_prebuilds/", to: "prebuilds" }
        ],
      }),
    ],
    externals: {
      "bufferutil": "bufferutil",
      "utf-8-validate": "utf-8-validate"
    }
  };
};


const electronPreloadConfig = (/*env, argv*/) => {
  return {
    target: "electron-preload",
    mode: "production",
    entry: {
      "preload": "./src/electron-preload.js", 
    },
    optimization,
    plugins: [
      new webpack.BannerPlugin(BANNER_TEXT),

      // this needs to be defined, but not actually used, as electron app uses
      // ipfs-core from node
      new webpack.DefinePlugin({
        __IPFS_CORE_URL__: JSON.stringify("")
      }),
    ]
  };
};
 
 

const browserConfig = (/*env, argv*/) => {
  return {
    target: "web",
    mode: "production",
    entry: {
      "ui": "./src/ui.js",
      "sw": "./src/sw.js"
    },

    optimization,
    resolve: {fallback},

    output: {
      path: path.join(__dirname),
      filename: "[name].js",
      libraryTarget: "self",
      globalObject: "self",
      publicPath: "/"
    },

    externals: {
      electron: "electron",
    },

    devServer: {
      compress: true,
      port: 9990,
      open: false,
      static:  path.join(__dirname),
      //publicPath: "/"
    },

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_NAME__: JSON.stringify("sw.js"),
        __APP_FILE_SERVE_PREFIX__ : JSON.stringify(APP_FILE_SERVE_PREFIX),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY),
        __GDRIVE_CLIENT_ID__ : JSON.stringify(GDRIVE_CLIENT_ID),
        __VERSION__: JSON.stringify(package_json.version),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          { from: "package.json", to: "_data/package.json" }
        ]
      }),
    ],

    module: {
      rules: [
        {
          test:  /\.svg$/,
          use: ["svg-inline-loader"],
        },
        {
          test: /main.scss$/,
          use: ["css-loader", "sass-loader"]
        },
        {
          test: /wombat.js|wombatWorkers.js|index.html$/i,
          use: ["raw-loader"],
        }
      ]
    },
  };
};

module.exports = [ browserConfig, electronMainConfig, electronPreloadConfig ];


