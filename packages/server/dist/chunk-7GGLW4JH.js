import {
  __export
} from "./chunk-MLKGABMK.js";

// src/async/index.ts
var async_exports = {};
__export(async_exports, {
  default: () => asyncHandler
});
function asyncHandler(handler) {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}

export {
  asyncHandler,
  async_exports
};
