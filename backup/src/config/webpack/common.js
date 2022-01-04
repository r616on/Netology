import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: {
      main: './src/entries/main.tsx'
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../../../', 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('../../scripts/modernizr.js'),
        use: [
          {
            loader: 'imports-loader',
            options: {
              wrapper: 'window'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
          },
        ]
      },
      {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [
              'babel-loader',
              'eslint-loader'
          ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin,
    new CleanWebpackPlugin,
  ]
};
