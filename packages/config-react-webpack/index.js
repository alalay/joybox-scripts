module.exports = function getWebpackConfiguration(presetApi, option) {
  // common config
  const getCommonWebpackConfig = require('./config/webpack.config');
  // production config
  const getProdWebpackConfig = require('./config/webpack.config.prod');

  const webpackConfigurations = [
    getCommonWebpackConfig(presetApi),
    getProdWebpackConfig(presetApi)
  ];

  return webpackConfigurations;
};
