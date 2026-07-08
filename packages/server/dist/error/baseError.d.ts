declare class BaseError extends Error {
    readonly status: number;
    readonly code: string;
    readonly detail?: string | undefined;
    constructor(message: string, status?: number, code?: string, detail?: string | undefined);
}

export { BaseError as default };
