const MAPPED_ERROR_CODES = {
    '23505': 409,
    '23503': 400,
    '23502': 400,
};

const NOT_NULL_VIOLATION_REGEX = /null value in column "(.+)" violates not-null constraint/;
const FOREIGN_KEY_VIOLATION_REGEX = /Key \((.+)\)=\((.+)\) is not present in table "(.+)"\./;
const UNIQUE_VIOLATION_REGEX = /Key \((.+)\)=\((.+)\) already exists\./;

export {
    MAPPED_ERROR_CODES,
    NOT_NULL_VIOLATION_REGEX,
    FOREIGN_KEY_VIOLATION_REGEX,
    UNIQUE_VIOLATION_REGEX,
};
