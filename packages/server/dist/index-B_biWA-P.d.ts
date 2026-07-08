interface TokenPayload {
    userId: string;
    username: string;
}
declare function getTokenExpiresInSeconds(token: string): number;
declare function signAccessToken(payload: TokenPayload): string;
declare function verifyAccessToken(token: string): TokenPayload;
declare function signRefreshToken(payload: TokenPayload): string;
declare function verifyRefreshToken(token: string): TokenPayload;

type index_TokenPayload = TokenPayload;
declare const index_getTokenExpiresInSeconds: typeof getTokenExpiresInSeconds;
declare const index_signAccessToken: typeof signAccessToken;
declare const index_signRefreshToken: typeof signRefreshToken;
declare const index_verifyAccessToken: typeof verifyAccessToken;
declare const index_verifyRefreshToken: typeof verifyRefreshToken;
declare namespace index {
  export { type index_TokenPayload as TokenPayload, index_getTokenExpiresInSeconds as getTokenExpiresInSeconds, index_signAccessToken as signAccessToken, index_signRefreshToken as signRefreshToken, index_verifyAccessToken as verifyAccessToken, index_verifyRefreshToken as verifyRefreshToken };
}

export { type TokenPayload as T, signRefreshToken as a, verifyRefreshToken as b, getTokenExpiresInSeconds as g, index as i, signAccessToken as s, verifyAccessToken as v };
