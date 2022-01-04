import autoprefixer from 'autoprefixer';
import flexGapPolyfill from 'flex-gap-polyfill';

module.exports = {
  plugins: [
    ["postcss-short", { prefix: "x" }],
    "postcss-preset-env",
    autoprefixer,
    // flexGapPolyfill({
    //   only: true,
    //   flexGapNotSupported: '.no-flex-gap'
    // })
  ],
};
