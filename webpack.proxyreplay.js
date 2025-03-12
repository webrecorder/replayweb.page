const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  target: "web",
  entry: "./src/proxyreplay/main.ts",
  output: {
    path: path.resolve(__dirname, "dist/proxyui"),
    filename: `proxyui.js`,
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    static: __dirname,
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
      {
        // CSS loaded as raw string and used as a CSSStyleSheet
        test: /\.css$/,
        type: "asset/source",
        include: [path.resolve(__dirname, "src/proxyreplay")],
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: { "@tailwindcss/postcss": {} } },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/source",
      },
    ],
  },
};
