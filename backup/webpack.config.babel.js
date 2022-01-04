import merge from 'webpack-merge';

// webpack mode divided configuration
import commonConfig from './src/config/webpack/common';
import productionConfig from './src/config/webpack/production';
import developmentConfig from './src/config/webpack/development';

const configs = {
  production: productionConfig,
  development: developmentConfig,
};

export default (env, args) => {
  const { mode = 'production' } = args;
  const config = configs[mode];

  return merge(commonConfig, config);
};
