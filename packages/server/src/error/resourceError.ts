import BaseError from './baseError';

export default class ResourceError extends BaseError {
    constructor(message: string, detail?: string) {
        super(message, 404, 'RESOURCE_NOT_FOUND', detail);
    }
}
