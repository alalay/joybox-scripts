const paths = require("../config/paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (env) {
  const isEnvDevelopment = env === "development";
  const isEnvProduction = env === "production";
  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    entry: paths.appIndexJs,
    output: {
      path: paths.appBuild,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: paths.appSrc,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        inject: true,
      }),
    ],
  };
};
