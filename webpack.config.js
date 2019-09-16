const path = require('path')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')

module.exports = {
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } },
      },
    ],
  },
  plugins: [new SentryWebpackPlugin({ include: 'dist', urlPrefix: '~/dist' })],
}
