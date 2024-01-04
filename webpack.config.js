/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const package_json = require("./package.json");

// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID =
  "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";

// Copyright banner text
const BANNER_TEXT = `'[name].js is part of ReplayWeb.page (https://replayweb.page) Copyright (C) 2020-${new Date().getFullYear()}, Webrecorder Software. Licensed under the Affero General Public License v3.'`;

/** @type {import("webpack").Configuration['optimization']} */
const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
};
/** @type {import("webpack").Configuration} */
const tsConfig = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src"),
        options: {
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
};

const electronMainConfig = (/*env, argv*/) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    target: "electron-main",
    mode: "production",
    entry: {
      electron: "./src/electron-main.ts",
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
        __HELPER_PROXY__: JSON.stringify(HELPER_PROXY),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({
        patterns: [
          // { from: "node_modules/classic-level/prebuilds/", to: "prebuilds" },
          { from: "build/extra_prebuilds/", to: "prebuilds" },
        ],
      }),
    ],
  };
  return merge(tsConfig, config);
};

const electronPreloadConfig = (/*env, argv*/) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    target: "electron-preload",
    mode: "production",
    entry: {
      preload: "./src/electron-preload.ts",
    },

    optimization,
    plugins: [new webpack.BannerPlugin(BANNER_TEXT)],
  };
  return merge(tsConfig, config);
};

const browserConfig = (/*env, argv*/) => {
  const isDevServer = process.env.WEBPACK_SERVE;

  /** @type {import('webpack').Configuration['entry']} */
  const entry = {
    ui: "./src/ui.ts",
    index: "./src/index.ts",
    misc: "./src/misc.ts",
  };

  const patterns = [{ from: "package.json", to: "_data/package.json" }];

  if (isDevServer) {
    entry["sw"] = "@webrecorder/wabac/src/sw.js";
  } else {
    patterns.push({
      from: "node_modules/@webrecorder/wabac/dist/sw.js",
      to: "sw.js",
    });
  }

  /** @type {import('webpack').Configuration} */
  const config = {
    target: "web",
    mode: "production",
    cache: {
      type: isDevServer ? "memory" : "filesystem",
    },
    resolve: {
      fallback: { crypto: false },
    },
    entry,
    optimization,

    output: {
      path: path.join(__dirname),
      filename: "[name].js",
      libraryTarget: "self",
      globalObject: "self",
      publicPath: "/",
    },

    devServer: {
      compress: true,
      port: 9990,
      open: false,
      static: path.join(__dirname),
      //publicPath: "/"
    },

    plugins: [
      new webpack.NormalModuleReplacementPlugin(/^node:*/, (resource) => {
        switch (resource.request) {
          case "node:stream":
            resource.request = "stream-browserify";
            break;
        }
      }),

      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_NAME__: JSON.stringify("sw.js"),
        __HELPER_PROXY__: JSON.stringify(HELPER_PROXY),
        __GDRIVE_CLIENT_ID__: JSON.stringify(GDRIVE_CLIENT_ID),
        __VERSION__: JSON.stringify(package_json.version),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      new CopyPlugin({ patterns }),
    ],

    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["svg-inline-loader"],
        },
        {
          test: /main.scss$/,
          use: ["css-loader", "sass-loader"],
        },
        {
          test: /wombat.js|wombatWorkers.js|index.html$/i,
          use: ["raw-loader"],
        },
      ],
    },
  };
  return merge(tsConfig, config);
};

// const libraryConfig = (/*env, argv*/) => {
//   const browserConf = browserConfig();
//   /** @type {import('webpack').Configuration} */
//   return {
//     ...browserConf,
//     entry: {
//       index: "./src/index.ts",
//       misc: "./src/misc.ts",
//       "electron-replay-app": "./src/electron-replay-app.js",
//     },

//     output: {
//       path: path.join(__dirname, "dist"),
//       filename: "[name].js",
//       library: "replaywebpage",
//       libraryTarget: "umd",
//       globalObject: "self",
//       publicPath: "/",
//       umdNamedDefine: true,
//     },

//     externals: [/^lit\/.+$/],
//     plugins: [
//       new webpack.NormalModuleReplacementPlugin(/^node:*/, (resource) => {
//         switch (resource.request) {
//           case "node:stream":
//             resource.request = "stream-browserify";
//             break;
//         }
//       }),
//       new webpack.ProvidePlugin({
//         process: "process/browser",
//       }),
//       new MiniCssExtractPlugin(),
//       new webpack.DefinePlugin({
//         __SW_NAME__: JSON.stringify("sw.js"),
//         __HELPER_PROXY__: JSON.stringify(HELPER_PROXY),
//         __GDRIVE_CLIENT_ID__: JSON.stringify(GDRIVE_CLIENT_ID),
//         __VERSION__: JSON.stringify(package_json.version),
//       }),
//       new webpack.BannerPlugin(BANNER_TEXT),
//     ],
//   };
// };

module.exports = [
  browserConfig,
  electronMainConfig,
  electronPreloadConfig,
  // libraryConfig,
];
