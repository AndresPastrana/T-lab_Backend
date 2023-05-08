"use strict";
const mongoose = require("mongoose");
const connection = (env) => {
    let CDN;
    if (env === "development") {
        CDN = process.env.CDN_DEV_DB;
    }
    if (env === "test") {
        CDN = process.env.CDN_TEST_DB;
    }
    // Define here the evenjt handlers for the db Connection
    if (env !== "test" && env === "development") {
        mongoose.connection.once("open", () => {
            console.log(`DB :  Database online   (${env})`);
        });
        mongoose.connection.once("disconnected", () => {
            console.log(`\n DB :  Database offline   (${env})`);
        });
        mongoose.connection.on("error", () => {
            console.error("Error conecting to the database");
        });
    }
    // Initial conection
    mongoose.connect(CDN, {
        autoCreate: true,
        bufferCommands: true,
    });
    return mongoose;
};
module.exports = { connection };
