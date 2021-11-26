const merge = require('webpack-merge');
const { getPresetApi, getPreset } = require('../utils/preset');

// 返回值：config对象
module.exports = (env) => {
  const presetName = '@alalay/scripts-preset-react'
  const preset = getPreset(presetName);
  const preset  = require('@alalay/scripts-preset-react');

  // Preset default configuration file
  let webpackConfigurations = [];
  webpackConfigurations = webpackConfigurations.concat(preset.getWebpackConfiguration());

  const config = merge.smart(webpackConfigurations);

  return config;
};
