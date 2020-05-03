const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    mode: 'production',
    entry: {
      'frontend': './src/frontend.js',
      'sw': 'wabac/src/sw.js',
      'wombat': 'wombat/src/wbWombat.js',
    },

    output: {
      path: path.join(__dirname, 'dist'),
      filename: (chunkData) => {
        switch (chunkData.chunk.name) {
          case 'sw':
            return argv.mode === 'production' ? '../[name].js': '[name].js';

          case 'wombat':
            return '../static/[name].js';

          case 'frontend':
          default:
            return '[name].js';
        }
      },
      libraryTarget: 'self',
      globalObject: 'self',
      publicPath: '/dist/'
    },

    devServer: {
      compress: true,
      port: 9990,
      headers: {'Service-Worker-Allowed': '/'},
      open: false,
      publicPath: '/dist/'
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __SW_PATH__: JSON.stringify(argv.mode === 'production' ? './sw.js' : './dist/sw.js')
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
      ]
    }
  }
}


