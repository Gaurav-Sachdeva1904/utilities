import BaseError from './baseError';

export default class ValidationError extends BaseError {
    constructor(message: string, detail?: string) {
        super(message, 400, 'VALIDATION_ERROR', detail);
    }
}
