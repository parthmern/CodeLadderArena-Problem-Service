const dotenv = require("dotenv");

dotenv.config();

// console.log(require('dotenv').config());

module.exports ={
    PORT: process.env.PORT || 3001,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL ,
    NODE_ENV : process.env.NODE_ENV,
    LOG_DB_URL : process.env.LOG_DB_URL,
}