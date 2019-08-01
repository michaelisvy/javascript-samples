/**
 * I have used a script without a test file because logging is hard to test
 * In order to run this script:
 * node src/logging-winston//logger.js
 */
const {createLogger, format, transports} = require("winston");
const path = require("path");


const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(
      info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
    )
  ),
  transports: [new transports.Console()]
  // Alternatively, logging to a file:
  // new transports.File({ filename })
});



logger.debug("hello debug");
logger.info("hello info");
logger.warn("watch out!");
logger.error("you're in trouble!");