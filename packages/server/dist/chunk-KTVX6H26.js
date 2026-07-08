import {
  BaseError
} from "./chunk-EVQV3LGW.js";

// src/error/validationError.ts
var ValidationError = class extends BaseError {
  constructor(message, detail) {
    super(message, 400, "VALIDATION_ERROR", detail);
  }
};

export {
  ValidationError
};
