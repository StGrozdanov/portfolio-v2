import winston from 'winston/lib/winston.js';

const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf((info) => {
        return `timestamp: ${info.timestamp} level: ${info.level} message: ${info.message}`;
    })
);

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        logFormat,
        winston.format.json(),
        winston.format.colorize(),
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

export default logger;