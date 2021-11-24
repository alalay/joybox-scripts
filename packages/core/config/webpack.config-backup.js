const merge = require('webpack-merge');
const { getPresetApi, getPreset } = require('../utils/preset');

module.exports = (env) => {
  const presetApi = getPresetApi();
  const presetName = presetApi.getUserConfig(['preset'], 'talend');
  const preset = getPreset(presetName);

  // Preset default configuration file
  let webpackConfigurations = [];
  webpackConfigurations = webpackConfigurations.concat(preset.);
};
