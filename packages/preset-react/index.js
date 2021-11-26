function getWebpackConfiguration(presetApi, option) {
  // check "production" or "development"

  // webpackConfigurations是一个数组；[common, production/development]
  const getCommonWebpackConfig = require('./config/webpack.config');
  const webpackConfigurations = [getCommonWebpackConfig(presetApi)];

  return webpackConfigurations;
  
}

module.exports = {
  getWebpackConfiguration
};
