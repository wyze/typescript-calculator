const { join, resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const stats = {
  chunks: false,
  modules: false,
}

module.exports = env => ([
  {
    entry: {
      main: [
        env.production ? '' : 'webpack/hot/only-dev-server',
        './src',
      ].filter(x => x),
    },
    devtool: 'cheap-module-source-map',
    output: {
      filename: `[name]${env.production ? '.[chunkhash]' : ''}.js`,
      path: join(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          include: resolve(__dirname, 'src'),
        },
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          include: resolve(__dirname, 'src'),
          options: { emitErrors: true },
        },
      ],
    },
    plugins: [
      new HtmlPlugin({
        chunksSortMode: 'dependency',
        inject: 'body',
        template: './index.html',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        minChunks: module =>
          module.context && module.context.indexOf('node_modules') !== -1,
        name: 'vendor',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      }),
    ].concat(
      env.production
        ? []
        : [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
        ]
    ),
    resolve: {
      extensions: [ '.js', '.ts', '.tsx' ],
    },
    stats,
    devServer: {
      hot: true,
      stats,
    },
  },
])
