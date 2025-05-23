/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const package_json = require("./package.json");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

// helper proxy URL, run locally for app
const HELPER_PROXY = "https://helper-proxy.webrecorder.workers.dev";

// GDrive client-id
const GDRIVE_CLIENT_ID =
  "160798412227-tko4c82uopud11q105b2lvbogsj77hlg.apps.googleusercontent.com";

const GDRIVE_API = "https://apis.google.com/js/platform.js";

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
    plugins: [new TsconfigPathsPlugin()],
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
        patterns: [{ from: "build/extra_prebuilds/", to: "prebuilds" }],
      }),
    ],
    resolve: {
      alias: {
        "bufferutil": path.join(__dirname, "./node_modules/bufferutil/fallback.js")
      }
    }
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

const libConfig = (env, argv) => {
  /** @type {import('webpack').Configuration['entry']} */
  const entry = {
    index: "./src/index.ts",
    utils: "./src/utils/index.ts",
  };

  const extraPlugins = [];

  const patterns = [
    { from: "node_modules/@webrecorder/wabac/dist/sw.js", to: "sw.js" },
  ];
  //extraPlugins.push(new CopyPlugin({ patterns }));

  /** @type {import('webpack').Configuration} */
  const config = {
    target: "web",
    mode: "production",
    cache: {
      type: "filesystem",
    },
    resolve: {
      fallback: { crypto: false },
    },
    entry,
    optimization,
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      globalObject: "self",
      library: {
        type: "module",
      },
      publicPath: "/",
    },
    experiments: {
      outputModule: true,
    },

    devtool: argv.mode === "production" ? undefined : "source-map",

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
        __GDRIVE_API__: JSON.stringify(""),
        __VERSION__: JSON.stringify(package_json.version),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      ...extraPlugins,
    ],

    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["raw-loader"],
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

const browserConfig = (/*env, argv*/) => {
  const isDevServer = process.env.WEBPACK_SERVE;

  /** @type {import('webpack').Configuration['entry']} */
  const entry = {
    ui: "./src/index.ts",
  };

  const extraPlugins = [];

  //if (isDevServer) {
  //  entry["sw"] = "@webrecorder/wabac/src/sw.js";
  //} else {
  const patterns = [
    { from: "node_modules/@webrecorder/wabac/dist/sw.js", to: "sw.js" },
  ];
  //extraPlugins.push(new CopyPlugin({ patterns }));
  //}

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
      static: __dirname,
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
        __GDRIVE_API__: JSON.stringify(GDRIVE_API),
        __VERSION__: JSON.stringify(package_json.version),
      }),
      new webpack.BannerPlugin(BANNER_TEXT),
      ...extraPlugins,
    ],

    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ["raw-loader"],
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

module.exports = [
  libConfig,
  browserConfig,
  electronMainConfig,
  electronPreloadConfig,
];
