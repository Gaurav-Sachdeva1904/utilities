import {
  BaseError
} from "./chunk-EVQV3LGW.js";

// src/error/resourceError.ts
var ResourceError = class extends BaseError {
  constructor(message, detail) {
    super(message, 404, "RESOURCE_NOT_FOUND", detail);
  }
};

export {
  ResourceError
};
