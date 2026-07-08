import BaseError from './baseError.js';

declare class DatabaseError extends BaseError {
    constructor(message: string, status: number, detail?: string);
}
declare function mapPostgresError(_err: unknown): DatabaseError;

export { DatabaseError, mapPostgresError as default };
