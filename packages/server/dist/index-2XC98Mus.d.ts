import BaseError from './error/baseError.js';
import mapPostgresError from './error/databaseError.js';
import ValidationError from './error/validationError.js';
import { AuthError } from './error/authError.js';
import { errorFactory } from './error/errorFactory.js';
import ResourceError from './error/resourceError.js';

declare const index_AuthError: typeof AuthError;
declare const index_BaseError: typeof BaseError;
declare const index_ResourceError: typeof ResourceError;
declare const index_ValidationError: typeof ValidationError;
declare const index_errorFactory: typeof errorFactory;
declare const index_mapPostgresError: typeof mapPostgresError;
declare namespace index {
  export { index_AuthError as AuthError, index_BaseError as BaseError, index_ResourceError as ResourceError, index_ValidationError as ValidationError, index_errorFactory as errorFactory, index_mapPostgresError as mapPostgresError };
}

export { index as i };
