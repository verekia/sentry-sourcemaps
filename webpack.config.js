const path = require('path')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

module.exports = {
  devtool: 'source-maps',
  plugins: [
    new SentryWebpackPlugin({
      include: '.',
      ignore: ['node_modules', 'webpack.config.js'],
    }),
  ],
}
