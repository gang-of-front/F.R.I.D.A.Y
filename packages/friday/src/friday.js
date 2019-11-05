import {Polly} from '@pollyjs/core'
import FetchAdapter from '@pollyjs/adapter-fetch'
import XHRAdapter from '@pollyjs/adapter-xhr'
import LocalStoragePersister from '@pollyjs/persister-local-storage'

Polly.register(FetchAdapter)
Polly.register(XHRAdapter)
Polly.register(LocalStoragePersister)

const registerInterceptor = deps => interceptor => interceptor(deps)

const defaultConfig = {
  logging: true,
  name: 'F.R.I.D.A.Y.',
}

window.polly = {
  stop() {},
}

const friday = (...interceptors) => (config = defaultConfig) => {
  window.polly.stop()
  const polly = new Polly(config.name, {
    adapters: ['fetch', 'xhr'],
    persister: 'local-storage',
    logging: config.logging,
  })

  const {server} = polly

  server.any().passthrough()

  const register = registerInterceptor({server})

  interceptors.forEach(register)

  window.polly = polly
}

export {friday}
