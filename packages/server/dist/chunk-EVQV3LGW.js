// src/error/baseError.ts
var BaseError = class extends Error {
  constructor(message, status = 500, code = "INTERNAL_ERROR", detail) {
    super(message);
    this.status = status;
    this.code = code;
    this.detail = detail;
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
  status;
  code;
  detail;
};

export {
  BaseError
};
