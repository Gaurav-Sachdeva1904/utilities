import BaseError from './baseError.js';

declare class ValidationError extends BaseError {
    constructor(message: string, detail?: string);
}

export { ValidationError as default };
