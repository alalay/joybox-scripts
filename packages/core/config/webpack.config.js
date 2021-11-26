const merge = require('webpack-merge');
const { getPresetApi, getPreset } = require('../utils/preset');

// 函数的返回值是什么？是config对象吗？
module.exports = (env) => {
  // const presetApi = getPresetApi();
  // const presetName = presetApi.getUserConfig(['preset'], 'talend');
  const presetName = '@alalay/scripts-preset-react'
  const preset = getPreset(presetName);
  const preset  = require('@alalay/scripts-preset-react');

  // Preset default configuration file
  let webpackConfigurations = [];
  webpackConfigurations = webpackConfigurations.concat(preset.);
};
