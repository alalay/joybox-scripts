const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configFactory = require('../../../config/webpack.config');
const createDevServerConfig = require('../../../config/webpackDevServer.config');
const chalk = require('chalk');

// 1.设置环境变量
process.env.NODE_ENV = 'development';
// 2.get config
const config = configFactory('development');

const compiler = webpack(config);
// 3.得到server config
const serverConfig = createDevServerConfig();
// 4.一个dev server实例
const devServer = new WebpackDevServer(compiler, serverConfig);
devServer.listen(3000, () => {
  console.log(chalk.cyan('Starting the development server'));
});
