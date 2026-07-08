import {
  BaseError
} from "./chunk-EVQV3LGW.js";

// src/error/authError.ts
var AuthError = class extends BaseError {
  constructor(message = "Unauthorized", detail) {
    super(message, 401, "UNAUTHORIZED", detail);
  }
};

export {
  AuthError
};
