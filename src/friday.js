import {Polly} from '@pollyjs/core'
import FetchAdapter from '@pollyjs/adapter-fetch'
import XHRAdapter from '@pollyjs/adapter-xhr'
import LocalStoragePersister from '@pollyjs/persister-local-storage'

const Friday = () => {
  Polly.register(FetchAdapter)
  Polly.register(XHRAdapter)
  Polly.register(LocalStoragePersister)

  const polly = new Polly('AutoFin-API', {
    adapters: ['fetch', 'xhr'],
    persister: 'local-storage',
    logging: true,
  })

  const {server} = polly

  server.any().passthrough()
}

export {Friday}
