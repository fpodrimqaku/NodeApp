const winston = require("winston");
import {format, transports} from 'winston';
const { combine, timestamp } = format;

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console(),
    new winston.transports.File(
        {
            filename: 'winston.log', 
            level: "debug",
            format: combine(
                timestamp({
                  format: "DD-MMM-YYYY HH:mm:ss",
                }),
              ),
        }
    )
],
});

export default logger;