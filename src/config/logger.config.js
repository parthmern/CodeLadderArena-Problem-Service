const winston = require("winston");

const allowedTransports = [];

// The below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize({ all: true }), // Colorize the entire log message
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

const logger = winston.createLogger({

    format: winston.format.combine(

        // timestamp type
        winston.format.timestamp({
            format : 'YYYY-MM-DD HH:MM:SS'
        }),

        // what is going printed into log ( which format )
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),

    // where to print
    transports : allowedTransports 
})


module.exports = logger; 