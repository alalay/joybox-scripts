const fs = require("fs-extra");
const paths = require("../config/paths");
const pahts = require("../config/paths");
const webpack = require("webpack");
const chalk = require("chalk");
/**
 * 1.设置环境变量
 */
process.env.NODE_ENV = "production";
/**
 * 2.获取webpack配置文件
 */

debugger;

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    filter: (file) => file !== paths.appHtml, // index.html不拷贝，交由webpack插件编译处理
  });
}
function build(config) {
  let compiler = webpack(config);
  console.log(chalk.green(config));
  compiler.run((err, stats) => {
    console.log(stats);
    // console.log(chalk.green("Compiled Successfully"));
  });
}

const configFactory = require("../config/webpack.config");

const config = configFactory("production");

/**
 * 3.如果build不为空，清空build目录
 */
fs.emptyDirSync(paths.appBuild);
/**
 * 4. copy public目录下的静态文件到build目录
 */
copyPublicFolder();
build(config);
