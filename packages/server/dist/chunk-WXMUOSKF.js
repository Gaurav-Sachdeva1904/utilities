import {
  __export
} from "./chunk-MLKGABMK.js";

// src/logger/index.ts
var logger_exports = {};
__export(logger_exports, {
  default: () => logger_default
});
import { createLogger, transports, format } from "winston";
import util from "util";
var LOG_FILE_PATH = process.env.LOG_FILE_PATH;
var SPLAT = /* @__PURE__ */ Symbol.for("splat");
if (!LOG_FILE_PATH) {
  console.error("Unable to initialise logger due invalid log file path");
}
function stringifyMeta(value) {
  if (value instanceof Error) {
    return value.stack || value.message;
  }
  if (typeof value === "string") {
    return value;
  }
  return util.inspect(value, { depth: 5, breakLength: 120 });
}
var logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    format.printf((info) => {
      const { timestamp, level, message, stack } = info;
      const splat = info[SPLAT];
      const meta = (splat || []).map(stringifyMeta).join(" ");
      const detail = stack || meta;
      return detail ? `[${timestamp}] [${level.toUpperCase()}]: ${message} ${detail}` : `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [new transports.Console(), new transports.File({ filename: LOG_FILE_PATH })]
});
var logger_default = logger;

export {
  logger_default,
  logger_exports
};
