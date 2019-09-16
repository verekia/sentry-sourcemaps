import * as Sentry from '@sentry/browser'

import someFunction from './somefile'

Sentry.init({ dsn: 'https://61c3abac8a7f4f598539dfd101d54fa0@sentry.io/1726721' })

someFunction()
