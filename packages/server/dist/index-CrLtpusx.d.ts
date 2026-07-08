import * as winston from 'winston';

declare const logger: winston.Logger;

declare namespace index {
  export { logger as default };
}

export { index as i, logger as l };
