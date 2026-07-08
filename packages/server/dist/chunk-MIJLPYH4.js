import {
  ResourceError
} from "./chunk-WNTR7BSH.js";
import {
  ValidationError
} from "./chunk-KTVX6H26.js";
import {
  AuthError
} from "./chunk-B32RRFBG.js";
import {
  errorFactory
} from "./chunk-PNKMR7ZA.js";
import {
  mapPostgresError
} from "./chunk-RFSB4XR7.js";
import {
  BaseError
} from "./chunk-EVQV3LGW.js";
import {
  __export
} from "./chunk-MLKGABMK.js";

// src/error/index.ts
var error_exports = {};
__export(error_exports, {
  AuthError: () => AuthError,
  BaseError: () => BaseError,
  ResourceError: () => ResourceError,
  ValidationError: () => ValidationError,
  errorFactory: () => errorFactory,
  mapPostgresError: () => mapPostgresError
});

export {
  error_exports
};
