import path from 'path';
import breakpoints from '../breakpoints';
import HtmlWebpackPlugin from "html-webpack-plugin";
import fs from "fs";

const dist = path.join(__dirname, '../../../', 'dist');

const pagesDir = path.resolve(__dirname, '../../../', 'src/components/pages');
const pages = fs
  .readdirSync(pagesDir)
  .filter(
    filename => filename.endsWith('.pug')
  );

// html file/entry name
const htmlWebpackPlugins = pages.map(
  filename => {
    const slug = filename.replace('.pug', '');
    const template = path.join(pagesDir, filename);
    return new HtmlWebpackPlugin({
      getCriticalCSS: () => '',
      breakpoints,
      template,
      // separating entry builds
      // chunks: [slug]
    })
  }
);

const cssModulesConfig = {
  localIdentName: "[path][name]__[local]--[hash:base64:5]",
};

const scssLoaders = Object.entries(breakpoints)
  .map(item => {
    const [slug, breakpoint] = item;
    // responsive sass mediafile
    const { media } = breakpoint;
    const attributes = {
      'data-slug': slug
    };

    if (media) {
      attributes['data-media'] = media;
    }

    // Creates `style` nodes from JS strings
    const styleLoader = {
        loader: 'style-loader',
        options: {
          // add media attribute to style tag for responsive classes
          attributes,
          styleTagTransform: (css, style) => {
            style.innerHTML = css;
            if (style.dataset.media) {
              style.media = style.getAttribute('data-media');
              // style.removeAttribute('data-media');
            }
            document.head.appendChild(style);
          }
        }
      };

    // Compiles Sass to CSS
    const sassLoader = {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      };

    return [
      {
        test: new RegExp(`${slug}\\.s[ac]ss$`, 'i'),
        use: [
          styleLoader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: cssModulesConfig,
              importLoaders: 1,
              sourceMap: true,
            },
          },
          // resolves url() problems
          'resolve-url-loader',
          sassLoader
        ],
        exclude: /scss\/.*\.s[ac]ss$/
      },
      {
        test: new RegExp(`${slug}\\.s[ac]ss$`, 'i'),
        use: [
          styleLoader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          // resolves url() problems
          'resolve-url-loader',
          sassLoader
        ],
        include: /\/scss\//i
      }
    ];
  })
  .flat();


export default {
  devServer: {
    historyApiFallback: true,
    // contentBase: dist,
  },
  module: {
    rules: [
      {
        test: /fonts\/.*\.(woff2?|otf|ttf|eot|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]'
        },
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: cssModulesConfig,
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
      ...scssLoaders,
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    ...htmlWebpackPlugins,
  ]
}
