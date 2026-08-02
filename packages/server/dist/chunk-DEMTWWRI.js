import {
  BaseError
} from "./chunk-EVQV3LGW.js";
import {
  MAPPED_ERROR_CODES,
  UNIQUE_VIOLATION_REGEX
} from "./chunk-CMKCH3ON.js";

// src/error/databaseError.ts
var DatabaseError = class extends BaseError {
  constructor(message, status, detail) {
    super(message, status, "DATABASE_ERROR", detail);
  }
};
function mapPostgresError(_err) {
  const err = _err;
  if (!err || typeof err !== "object" || !err.code) {
    return new DatabaseError("Unknown database error", 500);
  }
  const pgCode = String(err.code);
  const detail = err.detail || "";
  if (pgCode === "23505") {
    const match = UNIQUE_VIOLATION_REGEX.exec(detail);
    if (match) {
      const [, column, value] = match;
      return new DatabaseError(
        `"${value}" already exists.`,
        MAPPED_ERROR_CODES[pgCode] || 500,
        "Duplicate value"
      );
    }
    return new DatabaseError(
      "Duplicate key violation",
      MAPPED_ERROR_CODES[pgCode] || 500,
      "DUPLICATE_KEY"
    );
  }
  if (pgCode === "23503") {
    return new DatabaseError(
      "Bad Request",
      MAPPED_ERROR_CODES[pgCode] || 500,
      "FOREIGN_KEY_VIOLATION"
    );
  }
  if (pgCode === "23502") {
    return new DatabaseError(
      `Missing required field`,
      MAPPED_ERROR_CODES[pgCode] || 500,
      "NOT_NULL_VIOLATION"
    );
  }
  return new DatabaseError("Database error", 500, `PG_${pgCode}`);
}

export {
  DatabaseError,
  mapPostgresError
};
