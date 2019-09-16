const Sentry = require('@sentry/browser')

const someFunction = require('./somefile')

Sentry.init({ dsn: 'https://61c3abac8a7f4f598539dfd101d54fa0@sentry.io/1726721' })

someFunction()
