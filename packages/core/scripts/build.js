const spawn = require('cross-spawn');
const { hereRelative, resolveBin } = require('../utils/path-resolver');

const webpack = resolveBin('webpack');

function build(env = 'production', _, options = []) {
  debugger;
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
build();
