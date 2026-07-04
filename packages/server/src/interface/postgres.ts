export type PostgreSQLError = {
    name: string;
    code: string;
    constraint: string;
    detail: string;
};
