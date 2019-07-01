const{format, createLogger, transports} = require('winston');


const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    transports: [new transports.Console()]
  });

function hello() {
    return new Promise( () => logger.info('hello'));
}

let result = hello().then(logger.warn("end"));
