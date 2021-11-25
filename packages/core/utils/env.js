const get = require('lodash.get');
/**
 * Deserialize joybox scripts configuration from env object
 * @returns {*} The user configuration
 */
function getJoyBoxScriptsConfig({ JOYBOX_SCRIPTS_CONFIG }) {
  if (typeof JOYBOX_SCRIPTS_CONFIG === 'string') {
    return JSON.parse(JOYBOX_SCRIPTS_CONFIG);
  }
  return JOYBOX_SCRIPTS_CONFIG;
}

/**
 * Create a user configuration getter
 * @param {object} env
 * @returns {getUserConfig} The user config getter
 */
function createUserConfigGetter(env = process.env) {
  const scriptsConfig = getJoyBoxScriptsConfig(env);
  return function getUserConfig(configObjectPath, defaultValue) {
    return get(scriptsConfig, configObjectPath, defaultValue);
  };
}

function getEnv(options) {
  const env = Object.create(process.env);
  return env;
}

module.exports = {
  createUserConfigGetter,
  getEnv
};
