require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  winston.add(
    new winston.transports.Console({ colorize: true, prettyPrint: true })
  );
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({ db: "mongodb://127.0.0.1/vidly" })
  );
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "unhandledExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });
};
