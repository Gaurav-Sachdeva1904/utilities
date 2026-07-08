import BaseError from './baseError.js';

declare function errorFactory(err: unknown): BaseError;

export { errorFactory };
