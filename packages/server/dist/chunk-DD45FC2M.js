import {
  __export
} from "./chunk-MLKGABMK.js";

// src/auth/index.ts
var auth_exports = {};
__export(auth_exports, {
  getTokenExpiresInSeconds: () => getTokenExpiresInSeconds,
  signAccessToken: () => signAccessToken,
  signRefreshToken: () => signRefreshToken,
  verifyAccessToken: () => verifyAccessToken,
  verifyRefreshToken: () => verifyRefreshToken
});
import jwt from "jsonwebtoken";
var ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || "1h";
var REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";
function getAccessTokenSecret() {
  if (process.env.JWT_SECRET) {
    return process.env.JWT_SECRET;
  }
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET must be configured in production");
  }
  return "dev_secret_key";
}
function getRefreshTokenSecret() {
  if (process.env.REFRESH_JWT_SECRET) {
    return process.env.REFRESH_JWT_SECRET;
  }
  if (process.env.NODE_ENV === "production") {
    throw new Error("REFRESH_JWT_SECRET must be configured in production");
  }
  return "dev_refresh_secret_key";
}
function getTokenExpiresInSeconds(token) {
  const decoded = jwt.decode(token);
  if (!decoded?.exp || !decoded?.iat) {
    throw new Error("Token expiry missing");
  }
  return decoded.exp - decoded.iat;
}
function signAccessToken(payload) {
  const JWT_SECRET = getAccessTokenSecret();
  return jwt.sign({ ...payload, tokenType: "access" }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN
  });
}
function verifyAccessToken(token) {
  const JWT_SECRET = getAccessTokenSecret();
  const payload = jwt.verify(token, JWT_SECRET);
  if (payload.tokenType !== "access") {
    throw new Error("Invalid token type");
  }
  return { userId: payload.userId, username: payload.username };
}
function signRefreshToken(payload) {
  const JWT_SECRET = getRefreshTokenSecret();
  return jwt.sign({ ...payload, tokenType: "refresh" }, JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN
  });
}
function verifyRefreshToken(token) {
  const JWT_SECRET = getRefreshTokenSecret();
  const payload = jwt.verify(token, JWT_SECRET);
  if (payload.tokenType !== "refresh") {
    throw new Error("Invalid token type");
  }
  return { userId: payload.userId, username: payload.username };
}

export {
  getTokenExpiresInSeconds,
  signAccessToken,
  verifyAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  auth_exports
};
