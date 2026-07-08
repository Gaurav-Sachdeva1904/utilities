import {
  mapPostgresError
} from "./chunk-RFSB4XR7.js";
import {
  BaseError
} from "./chunk-EVQV3LGW.js";

// src/error/errorFactory.ts
function errorFactory(err) {
  if (err instanceof BaseError) {
    return err;
  }
  if (err && typeof err === "object" && "code" in err) {
    return mapPostgresError(err);
  }
  return new BaseError(
    err instanceof Error ? err.message : "Unknown error",
    500,
    "INTERNAL_ERROR"
  );
}

export {
  errorFactory
};
