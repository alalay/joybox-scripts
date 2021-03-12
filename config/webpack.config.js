const paths = require('../config/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRegex = /\.css$/;

module.exports = function (env) {
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';

  function getStyleLoaders(cssOptions) {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      { loader: 'css-loader', options: cssOptions }
    ].filter(Boolean);
    return loaders;
  }

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: paths.appIndexJs,
    output: {
      path: paths.appBuild
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: paths.appSrc,
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides'
            ),
            presets: [
              [require.resolve('babel-preset-react-app'),
              {
                runtime: 'automatic'
              }]
            ]
          }
        },
        {
          test: cssRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvDevelopment
          })
        },
        {
          test: /\.png$/
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve('svg-url-loader'),
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        inject: true
      })
    ]
  };
};
