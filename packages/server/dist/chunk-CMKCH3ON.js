import {
  __export
} from "./chunk-MLKGABMK.js";

// src/constants/db.ts
var db_exports = {};
__export(db_exports, {
  FOREIGN_KEY_VIOLATION_REGEX: () => FOREIGN_KEY_VIOLATION_REGEX,
  MAPPED_ERROR_CODES: () => MAPPED_ERROR_CODES,
  NOT_NULL_VIOLATION_REGEX: () => NOT_NULL_VIOLATION_REGEX,
  UNIQUE_VIOLATION_REGEX: () => UNIQUE_VIOLATION_REGEX
});
var MAPPED_ERROR_CODES = {
  "23505": 409,
  "23503": 400,
  "23502": 400
};
var NOT_NULL_VIOLATION_REGEX = /null value in column "(.+)" violates not-null constraint/;
var FOREIGN_KEY_VIOLATION_REGEX = /Key \((.+)\)=\((.+)\) is not present in table "(.+)"\./;
var UNIQUE_VIOLATION_REGEX = /Key \((.+)\)=\((.+)\) already exists\./;

export {
  MAPPED_ERROR_CODES,
  NOT_NULL_VIOLATION_REGEX,
  FOREIGN_KEY_VIOLATION_REGEX,
  UNIQUE_VIOLATION_REGEX,
  db_exports
};
