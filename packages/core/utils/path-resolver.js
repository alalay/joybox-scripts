const fs = require('fs');
const which = require('which');
const path = require('path');
/**
 * Resolve the bin module executable path
 * @param {*} modName The bin module name
 */
function resolveBin(modName, { executable = modName, cwd = process.cwd() }) {
  let systemCommandPath;
  try {
    systemCommandPath = fs.realpathSync(which.sync(executable));
  } catch (_error) {
    // ignore _error
  }
  try {
    const modPkgPath = require.resolve(`${modName}/package.json`);
    const modPkgDir = path.dirname(modPkgPath);
    const { bin } = require(modPkgPath);
    const binPath = typeof bin === 'string' ? bin : bin[executable];
    const fullPathToBin = path.join(modPkgDir, binPath);
    if (fullPathToBin === systemCommandPath) {
      // 如果在环境变量里有就直接返回命令
      return executable;
    }
    return fullPathToBin.replace(cwd, '.'); // 否则返回bin所在的相对路径
  } catch (error) {
    if (systemCommandPath) {
      return executable;
    }
    throw error;
  }
}
/**
 * Resolve relative path from cwd
 * @param {*} dirname the folder the path starts from
 * @param {*} filePath the path
 * @returns {string} The relative path from cwd
 */
function hereRelative(dirname, filePath) {
  return path.join(dirname, filePath).replace(process.cwd(), '.');
}

module.exports = {
  resolveBin,
  hereRelative
};
