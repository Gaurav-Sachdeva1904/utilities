import BaseError from './baseError';
import mapPostgresError from './databaseError';

export function errorFactory(err: unknown): BaseError {
    if (err instanceof BaseError) {
        return err;
    }

    if (err && typeof err === 'object' && 'code' in err) {
        return mapPostgresError(err);
    }

    return new BaseError(
        err instanceof Error ? err.message : 'Unknown error',
        500,
        'INTERNAL_ERROR',
    );
}
