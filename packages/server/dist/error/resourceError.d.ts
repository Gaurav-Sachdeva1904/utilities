import BaseError from './baseError.js';

declare class ResourceError extends BaseError {
    constructor(message: string, detail?: string);
}

export { ResourceError as default };
