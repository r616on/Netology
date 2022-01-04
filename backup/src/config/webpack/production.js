import breakpoints from '../breakpoints';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import path from "path";
import fs from "fs";
import HtmlWebpackPlugin from "html-webpack-plugin";

const pagesDir = path.resolve(__dirname, '../../../', 'src/components/pages');
const pages = fs
  .readdirSync(pagesDir)
  .filter(
    filename => filename.endsWith('.pug')
  );

const getCriticalCSS = (compilation) => {
  return Object.entries(compilation.assets)
    .filter( ([filename]) => {
      return filename.includes('critical.css') || filename.includes('vendor.css');
    })
    .map(([filename, contents]) => contents.source())
    .join('\n')
    .replace(/\.\.\//g, '');

  // console.log(criticalFiles);
};

// html file/entry name
const htmlWebpackPlugins = pages.map(
  filename => {
    const slug = filename.replace('.pug', '');
    const template = path.join(pagesDir, filename);
    const outputFilename = `${slug}.html`;
    return new HtmlWebpackPlugin({
      env: 'production',
      getCriticalCSS,
      breakpoints,
      inject: false,
      filename: outputFilename,
      template,
      // separating entry builds
      // chunks: [slug]
    })
  }
);

export default {
  output: {
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          chunks: 'all',
          enforce: true,
        },
        critical: {
          name: 'critical',
          test: /(critical\.s?css)|(\.css)$/i,
          chunks: 'all',
          enforce: true,
        },
        mobile: {
          name: 'mobile',
          test: /mobile\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
        tablet: {
          name: 'tablet',
          test: /tablet\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
        desktop: {
          name: 'desktop',
          test: /desktop\.s?css$/,
          chunks: 'all',
          enforce: true,
        }
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff2?|otf|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[hash].[ext]',
            }
          },
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          // "postcss-loader",
          // resolves url() problems
          "resolve-url-loader",
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /scss\/.*\.s[ac]ss$/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          // "postcss-loader",
          // resolves url() problems
          "resolve-url-loader",
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        include: /scss\/.*\.s[ac]ss$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        },
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[hash].[ext]',
      //       }
      //     },
      //     'img-loader'
      //   ]
      // },
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    }),
    ...htmlWebpackPlugins
  ]
}
