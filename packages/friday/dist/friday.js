"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.friday = void 0;

var _core = require("@pollyjs/core");

var _adapterFetch = _interopRequireDefault(require("@pollyjs/adapter-fetch"));

var _adapterXhr = _interopRequireDefault(require("@pollyjs/adapter-xhr"));

var _persisterLocalStorage = _interopRequireDefault(require("@pollyjs/persister-local-storage"));

_core.Polly.register(_adapterFetch.default);

_core.Polly.register(_adapterXhr.default);

_core.Polly.register(_persisterLocalStorage.default);

const registerInterceptor = deps => interceptor => interceptor(deps);

const defaultConfig = {
  logging: true,
  name: 'F.R.I.D.A.Y.'
};
window.polly = {
  stop() {}

};

const friday = (...interceptors) => (config = defaultConfig) => {
  window.polly.stop();
  const polly = new _core.Polly(config.name, {
    adapters: ['fetch', 'xhr'],
    persister: 'local-storage',
    logging: config.logging
  });
  const {
    server
  } = polly;
  server.any().passthrough();
  const register = registerInterceptor({
    server
  });
  interceptors.forEach(register);
  window.polly = polly;
};

exports.friday = friday;