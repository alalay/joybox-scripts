const { createUserConfigGetter } = require('./env');

/**
 * Get the preset arguments
 * @param {object} env The environment object. It takes the current process env if not provided.
 */
function getPresetApi(env = process.env) {
  const mode = env.JOYBOX_MODE || 'production';
  const getUserConfig = createUserConfigGetter(env);
  return {
    mode,
    getUserConfig
  };
}
/**
 * Get the preset
 * @param {string} preset The preset package name
 * @returns {*} The preset module
 */
function getPreset(preset) {
  return require(preset);
}
module.exports = {
  getPreset,
  getPresetApi
};
