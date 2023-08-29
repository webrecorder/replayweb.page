/*eslint-env node */

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const package_json = require("./package.json");


// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID = "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";

// Copyright banner text
const BANNER_TEXT = `'[name].js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-${new Date().getFullYear()}, Webrecorder Software. Licensed under the Affero General Public License v3.'`;

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
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          // { from: "node_modules/classic-level/prebuilds/", to: "prebuilds" },
          { from: "build/extra_prebuilds/", to: "prebuilds" }
        ],
      }),
    ],
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
    ]
  };
};
 
 

const browserConfig = (/*env, argv*/) => {
  const isDevServer = process.env.WEBPACK_SERVE;
  const swPath = "node_modules/@webrecorder/wabac/dist/sw.js";
  const entry = {
    "ui": "./src/ui.js",
  };

  const patterns = [
    { from: "package.json", to: "_data/package.json" }
  ];

  if (isDevServer) {
    entry["sw"] = "./src/sw.js";
  } else {
    patterns.push(
      { from: "package.json", to: "_data/package.json" },
      { from: swPath, to: "sw.js"}
    );
  }


  return {
    target: "web",
    mode: "production",
    resolve: {fallback: { "crypto": false }},
    entry,
    optimization,

    output: {
      path: path.join(__dirname),
      filename: "[name].js",
      libraryTarget: "self",
      globalObject: "self",
      publicPath: "/"
    },

    devServer: {
      compress: true,
      port: 9990,
      open: false,
      static:  path.join(__dirname),
      //publicPath: "/"
      watchFiles: [swPath],
    },

    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_NAME__: JSON.stringify("sw.js"),
        __HELPER_PROXY__ : JSON.stringify(HELPER_PROXY),
        __GDRIVE_CLIENT_ID__ : JSON.stringify(GDRIVE_CLIENT_ID),
        __VERSION__: JSON.stringify(package_json.version),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({ patterns })
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


