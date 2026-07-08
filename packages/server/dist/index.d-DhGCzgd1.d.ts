type PostgreSQLError = {
    name: string;
    code: string;
    constraint: string;
    detail: string;
};

type postgres_PostgreSQLError = PostgreSQLError;
declare namespace postgres {
  export type { postgres_PostgreSQLError as PostgreSQLError };
}

export { type PostgreSQLError as P, postgres as p };
