'use strict';

module.exports = (ipLookup) => {

    const express = require('express');
    const router = express.Router();
    
    const vs = require('../validator');
    const validationHandler = require('../middlewares/validation-handler');

    const responseHandler = require('../utils/response-handler');

    router
    .get('/ip-lookup',
        function (req, res, next) {
            req.body = req.query;
            next();
        },
        validationHandler(vs['FetchInfoByIp']),
        async (req, res) =>{
            try {
                res.data = await ipLookup.fetch(req.query.ip);
                responseHandler(null, req, res);
            } catch (e) {
                console.log(e);
                responseHandler(e, req, res);
            }
        }
    )

    return router;
}