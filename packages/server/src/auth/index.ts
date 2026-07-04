import jwt from 'jsonwebtoken';

export interface TokenPayload {
    userId: string;
    username: string;
}

const ACCESS_TOKEN_EXPIRES_IN = (process.env.ACCESS_TOKEN_EXPIRES_IN ||
    '1h') as jwt.SignOptions['expiresIn'];
const REFRESH_TOKEN_EXPIRES_IN = (process.env.REFRESH_TOKEN_EXPIRES_IN ||
    '7d') as jwt.SignOptions['expiresIn'];

function getAccessTokenSecret(): string {
    if (process.env.JWT_SECRET) {
        return process.env.JWT_SECRET;
    }

    if (process.env.NODE_ENV === 'production') {
        throw new Error('JWT_SECRET must be configured in production');
    }

    return 'dev_secret_key';
}

function getRefreshTokenSecret(): string {
    if (process.env.REFRESH_JWT_SECRET) {
        return process.env.REFRESH_JWT_SECRET;
    }

    if (process.env.NODE_ENV === 'production') {
        throw new Error('REFRESH_JWT_SECRET must be configured in production');
    }

    return 'dev_refresh_secret_key';
}

type AccessTokenPayload = TokenPayload & {
    tokenType: 'access';
};

type RefreshTokenPayload = TokenPayload & {
    tokenType: 'refresh';
};

type JwtWithExp = {
    iat?: number;
    exp?: number;
};

export function getTokenExpiresInSeconds(token: string): number {
    const decoded = jwt.decode(token) as JwtWithExp | null;

    if (!decoded?.exp || !decoded?.iat) {
        throw new Error('Token expiry missing');
    }

    return decoded.exp - decoded.iat;
}

export function signAccessToken(payload: TokenPayload): string {
    const JWT_SECRET = getAccessTokenSecret();
    return jwt.sign({ ...payload, tokenType: 'access' }, JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });
}

export function verifyAccessToken(token: string): TokenPayload {
    const JWT_SECRET = getAccessTokenSecret();
    const payload = jwt.verify(token, JWT_SECRET) as AccessTokenPayload;

    if (payload.tokenType !== 'access') {
        throw new Error('Invalid token type');
    }

    return { userId: payload.userId, username: payload.username };
}

export function signRefreshToken(payload: TokenPayload): string {
    const JWT_SECRET = getRefreshTokenSecret();
    return jwt.sign({ ...payload, tokenType: 'refresh' }, JWT_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });
}

export function verifyRefreshToken(token: string): TokenPayload {
    const JWT_SECRET = getRefreshTokenSecret();
    const payload = jwt.verify(token, JWT_SECRET) as RefreshTokenPayload;

    if (payload.tokenType !== 'refresh') {
        throw new Error('Invalid token type');
    }

    return { userId: payload.userId, username: payload.username };
}
