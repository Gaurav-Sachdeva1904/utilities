import BaseError from './baseError.js';

declare class AuthError extends BaseError {
    constructor(message?: string, detail?: string);
}

export { AuthError };
