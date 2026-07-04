import BaseError from './baseError';

export class AuthError extends BaseError {
    constructor(message = 'Unauthorized', detail?: string) {
        super(message, 401, 'UNAUTHORIZED', detail);
    }
}
