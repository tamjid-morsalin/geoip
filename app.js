'use strict';

module.exports = async () => {
    const express = require('express');
    const cookieParser = require('cookie-parser');
    const {fork} = require('child_process');

    require('dotenv').config();
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    const ipLookupController = require('./lib/ip-lookup')();
    
    app.use('/api',
        require('./routes/ip-lookup')(ipLookupController)
    );

    const updateDbScheduleHandler = fork('./update-db-schedule');
    return app;
}