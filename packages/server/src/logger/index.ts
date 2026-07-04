import { createLogger, transports, format } from 'winston';
import path from 'path';
import util from 'util';

const LOG_FILE_PATH = process.env.LOG_FILE_PATH;
const SPLAT = Symbol.for('splat');

if (!LOG_FILE_PATH) {
    console.error('Unable to initialise logger due invalid log file path');
}

function stringifyMeta(value: unknown): string {
    if (value instanceof Error) {
        return value.stack || value.message;
    }

    if (typeof value === 'string') {
        return value;
    }

    return util.inspect(value, { depth: 5, breakLength: 120 });
}

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        format.printf((info: any) => {
            const { timestamp, level, message, stack } = info;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const splat = (info as any)[SPLAT] as unknown[] | undefined;
            const meta = (splat || []).map(stringifyMeta).join(' ');
            const detail = stack || meta;
            return detail
                ? `[${timestamp}] [${level.toUpperCase()}]: ${message} ${detail}`
                : `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
        }),
    ),
    transports: [new transports.Console(), new transports.File({ filename: LOG_FILE_PATH })],
});

export default logger;
