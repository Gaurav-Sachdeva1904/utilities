export default class BaseError extends Error {
    constructor(
        message: string,
        public readonly status = 500,
        public readonly code = 'INTERNAL_ERROR',
        public readonly detail?: string,
    ) {
        super(message);
        this.name = new.target.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
