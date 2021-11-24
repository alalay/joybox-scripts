const path = require("path");
const appDirectory = process.cwd(); // 当前工作目录，也就是根目录
// 接收一个相对路径，返回从根目录出发的绝对路径
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
module.exports = {
  appBuild: resolveApp("build"), //打包后的输出目录。webpack默认的输出目录是dist
  appHtml: resolveApp("public/index.html"), // index.html
  appIndexJs: resolveApp("src/index.js"), // 默认的入口文件
  appPublic: resolveApp("public"),
  appSrc: resolveApp("src"),
};
