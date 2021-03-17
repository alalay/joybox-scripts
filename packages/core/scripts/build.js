const spawn = require('cross-spawn');
const { hereRelative, resolveBin } = require('../utils/path-resovler');

const webpack = resolveBin('webpack');

module.exports = function build(env, _, options) {
  return spawn.sync(
    webpack,
    [
      '--config',
      hereRelative(__dirname, '../config/webpack.config.js'),// 需要得到config相对于build命令执行目录的相对路径
      '--progress',
      ...options
    ],
    { stdio: 'inherit', env }
  );
};
