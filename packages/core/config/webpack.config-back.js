const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRegex = /\.css$/;

module.exports = function (env) {
  env = 'production';
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  const getStyleLoaders = (cssOptions, preProcessor) => {
    return [
      require.resolve('style-loader'),
      { loader: require.resolve('css-loader'), options: cssOptions },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            // Necessary for external CSS imports to work
            // https://github.com/facebook/create-react-app/issues/2677
            ident: 'postcss',
            plugins: [
              'postcss-flexbugs-fixes',
              [
                'postcss-preset-env',
                {
                  autoprefixer: {
                    flexbox: 'no-2009'
                  },
                  stage: 3
                }
              ],
              // Adds PostCSS Normalize as the reset css with default options,
              // so that it honors browserslist config in package.json
              // which in turn let's users customize the target behavior as per their needs.
              'postcss-normalize'
            ]
          }
          // sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        }
      }
    ];
  };
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
            presets: [
              [require.resolve('@babel/preset-react'), { runtime: 'automatic' }]
            ]
          }
        },
        {
          test: cssRegex,
          // exclude: cssModuleRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: isEnvProduction ? true : isEnvDevelopment,
            modules: {
              mode: 'icss'
            }
          })
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve('@svgr/webpack'),
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }]
                },
                titleProp: true,
                ref: true
              }
            },
            {
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash].[ext]'
              }
            }
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHtml
      })
    ]
  };
};
